'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Lenis from 'lenis';
import { getLenis, setLenis } from '@/lib/smooth';

const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Splits an element's text into masked words, keeping inline children such as <span class="serif">. */
function split(el: HTMLElement) {
  if (el.dataset.splitted) return;
  el.dataset.splitted = '1';
  let i = 0;
  const walk = (n: Node) =>
    Array.from(n.childNodes).forEach((c) => {
      if (c.nodeType === 3) {
        const f = document.createDocumentFragment();
        (c.textContent || '').split(/(\s+)/).forEach((t) => {
          if (!t) return;
          if (/^\s+$/.test(t)) return f.append(' ');
          const w = document.createElement('span');
          const s = document.createElement('span');
          w.className = 'w';
          s.textContent = t;
          s.style.setProperty('--i', String(i++));
          w.append(s);
          f.append(w);
        });
        (c as ChildNode).replaceWith(f);
      } else if (c.nodeType === 1 && (c as Element).tagName !== 'BR') walk(c);
    });
  walk(el);
}

function countUp(el: HTMLElement) {
  const end = Number(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const t0 = performance.now();
  const dur = 1800;
  const tick = (now: number) => {
    const p = Math.min(1, (now - t0) / dur);
    const e = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
    el.textContent = Math.round(end * e) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function SiteEffects() {
  const pathname = usePathname();
  const router = useRouter();

  /* Once: smooth scroll, progress bar + parallax, anchor links, page transitions */
  useEffect(() => {
    const reduce = prefersReduced();
    let raf = 0;
    let lenis: Lenis | null = null;
    if (!reduce) {
      lenis = new Lenis({ duration: 1.25, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      setLenis(lenis);
      const loop = (t: number) => {
        lenis!.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const bar = document.querySelector<HTMLElement>('.prog');
    let ticking = false;
    const frame = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      if (!reduce) {
        document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
          const r = el.parentElement!.getBoundingClientRect();
          if (r.bottom < 0 || r.top > window.innerHeight) return;
          el.style.transform = `translate3d(0,${(-r.top * parseFloat(el.dataset.parallax || '0')).toFixed(1)}px,0)`;
        });
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    frame();

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
      if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#') && href.length > 1) {
        const t = document.querySelector<HTMLElement>(href);
        if (t) {
          e.preventDefault();
          lenis ? lenis.scrollTo(t, { offset: -84 }) : t.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (a.origin === location.origin && a.pathname !== location.pathname && !reduce) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('.page')?.classList.add('leaving');
        setTimeout(() => router.push(a.pathname + a.search + a.hash), 350);
      }
    };
    document.addEventListener('click', onClick, true);

    const onShow = (e: PageTransitionEvent) => {
      if (e.persisted) document.querySelector('.page')?.classList.remove('leaving');
    };
    window.addEventListener('pageshow', onShow);

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      setLenis(null);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('pageshow', onShow);
    };
  }, [router]);

  /* Every route change: reset scroll, split headlines, reveal on scroll, counters, magnetic buttons */
  useEffect(() => {
    const reduce = prefersReduced();
    const lenis = getLenis();
    lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0);

    document.querySelectorAll<HTMLElement>('[data-split]').forEach(split);
    document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((p) =>
      Array.from(p.children).forEach((c, i) => {
        c.setAttribute('data-r', '');
        (c as HTMLElement).style.setProperty('--d', i * 0.09 + 's');
      }),
    );

    const targets = document.querySelectorAll<HTMLElement>('[data-r],[data-split],[data-line],[data-count]');
    let io: IntersectionObserver | null = null;
    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'));
    } else {
      io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            el.classList.add('in');
            if (el.dataset.count) countUp(el);
            io!.unobserve(el);
          }),
        { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
      );
      targets.forEach((el) => {
        if (el.dataset.count) el.textContent = '0' + (el.dataset.suffix || '');
        io!.observe(el);
      });
    }

    const cleanups: Array<() => void> = [];
    if (!reduce && window.matchMedia('(hover:hover)').matches) {
      document.querySelectorAll<HTMLElement>('.btn,.disc').forEach((b) => {
        const move = (e: PointerEvent) => {
          const r = b.getBoundingClientRect();
          b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
        };
        const leave = () => (b.style.transform = '');
        b.addEventListener('pointermove', move);
        b.addEventListener('pointerleave', leave);
        cleanups.push(() => {
          b.removeEventListener('pointermove', move);
          b.removeEventListener('pointerleave', leave);
        });
      });
    }

    return () => {
      io?.disconnect();
      cleanups.forEach((c) => c());
    };
  }, [pathname]);

  return null;
}
