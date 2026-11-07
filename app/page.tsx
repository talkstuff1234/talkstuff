import Link from 'next/link';
import PageShell from '@/components/PageShell';
import ContactForm from '@/components/ContactForm';
import { Board, ClientRows, Hd, Info, Rates, Sp, Stats } from '@/components/bits';
import { CLIENTS, PRINCIPLES, SERVICES } from '@/lib/content';

const TICKER = 'Digital Marketing ✶ Social Media ✶ Content Creation ✶ Billboard Advertising ✶ Creative Campaigns ✶ Web & Design ✶';

export default function Home() {
  return (
    <PageShell cta={false}>
      <section className="hero">
        <div className="wrap">
          <div className="eb">
            <span>TalkStuff — Digital Growth &amp; Outdoor Advertising</span>
            <span>Abuja, Nigeria</span>
          </div>
          <h1 className="d1" data-split>We build brands.<br />We drive <Sp>growth.</Sp></h1>
          <div className="hero-row between" data-r>
            <p className="lead">Digital marketing that performs. Billboard advertising that gets you seen. Results that speak for themselves.</p>
            <div className="btns">
              <Link className="btn k" href="/contact">Book a strategy call <i>&rarr;</i></Link>
              <Link className="btn o" href="/services">Explore services</Link>
            </div>
          </div>
          <div className="scene" data-r>
            <Board />
            <div className="cap">
              <div className="eb">Now showing</div>
              Lugbe Airport Road · near Shoprite<br />8m x 7m double-faced unipole
            </div>
            <a className="disc" href="#rates">View rate<br />card ↓</a>
          </div>
        </div>
      </section>

      <div className="marq" aria-hidden="true">
        <div className="track"><span>{TICKER}</span><span>{TICKER}</span></div>
      </div>

      <section className="sec-l" style={{ paddingBottom: 100 }}>
        <div className="wrap">
          <div className="eb" style={{ marginBottom: 32 }} data-r>(01) About</div>
          <p className="stmt" data-split>
            TalkStuff is a full-service digital agency helping businesses grow their brand, reach the right audience and drive{' '}
            <span className="serif">measurable results</span> through smart strategy, creative content and powerful advertising.
          </p>
          <Stats />
        </div>
      </section>

      <section className="sec" id="services" style={{ paddingBottom: 120 }}>
        <div className="wrap">
          <Hd
            eyebrow="(02) Services"
            title={<>Everything a brand<br />needs to <Sp>be seen.</Sp></>}
            extra={<p className="lead" style={{ maxWidth: 340, fontSize: 18 }} data-r>From strategy to execution, services that build visibility, engage audiences and drive real business growth.</p>}
          />
          {SERVICES.slice(0, 5).map((s, i) => (
            <Link href={s.href} className={`sv sv5${i === 4 ? ' last' : ''}`} data-r key={s.name}>
              <span className="eb">0{i + 1}</span>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
              <span className="eb mute" style={{ paddingTop: 8 }}>{s.tag}</span>
              <span className="arr" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="sec-l dark" id="rates">
        <div className="wrap">
          <div className="hd">
            <div className="eb acc" data-r>(03) New &amp; powerful</div>
            <h2 className="d2" data-split style={{ maxWidth: 1100 }}>Billboard advertising that <Sp>gets you noticed.</Sp></h2>
          </div>
          <div className="two" style={{ marginBottom: 96 }}>
            <p className="lead" data-r>Our outdoor media puts your brand in high-traffic locations where thousands of eyes can meet you. We handle strategy, design, placement and reporting.</p>
            <div className="ticks" data-r>
              Prime locations across major cities<br />High-impact designs that stand out<br />Campaign tracking and performance reports<br />Perfect for awareness and large-scale reach
            </div>
          </div>
          <div className="eb mute" data-r>Outdoor introductory advertising rate card</div>
          <h3 className="d2" style={{ fontSize: 'clamp(32px,4.5vw,64px)', margin: '12px 0' }} data-r>Lugbe Airport Road</h3>
          <p className="lead" style={{ marginBottom: 48 }} data-r>Double-faced unipole near Shoprite, 8m x 7m (56sqm) per face. Creative support, online amplification and professional campaign assistance included.</p>
          <Rates />
          <div className="btn-row">
            <p data-r>Payment upfront. Rate valid until December 31, 2026; all rates are negotiable based on duration. No long-term contract for billboard-only bookings.</p>
            <Link className="btn a" href="/contact" data-r>Book this billboard <i>&rarr;</i></Link>
          </div>
        </div>
      </section>

      <section className="sec-l" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <Hd eyebrow="(04) Why us" title={<>Strategy. Creativity. Execution. <Sp>Results.</Sp></>} />
          <div className="cols" data-stagger>
            {PRINCIPLES.map((p) => (
              <div key={p.k}>
                <div className="eb mute">{p.k}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-l">
        <div className="wrap">
          <Hd eyebrow="(05) Clients" title={<>Trusted by <span className="serif">leading brands.</span></>} />
          <ClientRows names={CLIENTS.slice(0, 7)} />
        </div>
      </section>

      <section className="sec" id="contact" style={{ padding: '40px 0 120px' }}>
        <div className="wrap">
          <div className="eb" style={{ marginBottom: 24 }} data-r>(06) New business</div>
          <h2 className="d1" data-split style={{ fontSize: 'clamp(52px,10vw,148px)', marginBottom: 72 }}>Have a project<br />in <Sp>mind?</Sp></h2>
          <div className="cgrid">
            <Info />
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
