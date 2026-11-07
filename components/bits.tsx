import Link from 'next/link';
import type { ReactNode } from 'react';
import { CLIENTS, CONTACT, RATES, STATS } from '@/lib/content';

export const Sp = ({ children }: { children: ReactNode }) => <span className="serif acc">{children}</span>;

/** Inner-page hero: eyebrow row, giant headline, intro */
export function Hero({ left, right, title, intro }: { left: string; right: string; title: ReactNode; intro: string }) {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="eb">
          <span>{left}</span>
          <span>{right}</span>
        </div>
        <h1 className="d3" style={{ marginTop: 40 }} data-split>{title}</h1>
        <p className="lead" style={{ marginTop: 48, paddingBottom: 80 }} data-r>{intro}</p>
      </div>
    </section>
  );
}

/** Section heading with eyebrow and optional right-hand content */
export function Hd({ eyebrow, title, extra }: { eyebrow: string; title: ReactNode; extra?: ReactNode }) {
  return (
    <div className="hd between">
      <div>
        <div className="eb" data-r>{eyebrow}</div>
        <h2 className="d2" data-split>{title}</h2>
      </div>
      {extra}
    </div>
  );
}

export function Stats() {
  return (
    <div className="stats" data-stagger>
      {STATS.map((s) => (
        <div className="st" key={s.label}>
          {s.text ? (
            <div className="num">{s.text}</div>
          ) : (
            <div className="num" data-count={s.n} data-suffix={s.suffix}>{s.n}{s.suffix}</div>
          )}
          <div className="eb mute">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function Rates() {
  return (
    <div className="rates" data-stagger>
      {RATES.map((r) => (
        <div className="rate" key={r.n}>
          <div className="big">{r.n}<span className="serif"> {r.unit}</span></div>
          <div className="eb">30% off</div>
          <div className="rt"><span>Rate per face</span><b>{r.rate}</b></div>
          <div className="rt"><span>Discount rate</span><b>{r.discount}</b></div>
          <div className="rt"><span>Pioneer client</span><b>{r.pioneer}</b></div>
        </div>
      ))}
    </div>
  );
}

export function Info() {
  return (
    <div className="ci" data-stagger>
      <div><div className="eb mute">Email us at</div><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
      <div><div className="eb mute">Our location</div>Abuja, Nigeria</div>
      <div>
        <div className="eb mute">Call us at</div>
        <a href={CONTACT.phones[0].href}>{CONTACT.phones[0].label}</a><br />
        <a href={CONTACT.phones[1].href}>{CONTACT.phones[1].label}</a>
      </div>
      <small>Free strategy consultation<br />Tailored solutions for your business<br />No long-term contract for billboard-only bookings</small>
    </div>
  );
}

export function Board() {
  return (
    <>
      <div className="board" data-parallax="-0.08">
        <div>YOUR BRAND<br />EVERYWHERE<br /><span className="serif">it matters.</span></div>
      </div>
      <div className="pole" />
    </>
  );
}

export function ClientRows({ names = CLIENTS }: { names?: string[] }) {
  return (
    <>
      {names.map((n, i) => (
        <Link href="/contact" className="cl" data-r key={n}>
          <span>{n}</span>
          <span className="eb mute">{String(i + 1).padStart(2, '0')}</span>
        </Link>
      ))}
      <div className="last" />
    </>
  );
}
