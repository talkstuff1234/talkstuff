import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { Board, Hero, Rates, Sp } from '@/components/bits';

export const metadata: Metadata = {
  title: 'Billboard Advertising',
  description: 'Billboard advertising in Abuja: Lugbe Airport Road double-faced unipole near Shoprite. See rates, package inclusions and installation costs.',
};

const BENEFITS = ['Prime locations across major cities', 'High-impact designs that stand out', 'Campaign tracking and performance reports', 'Perfect for awareness and large-scale reach'];
const INCLUDES = ['Premium billboard display', 'Artwork / creative design', 'Amplification of message online', 'Periodic sponsored digital advertising', 'Professional support throughout the display period'];
const PRODUCTION = [
  ['410gm flex production / printing', 'NGN 180,000'],
  ['610gm flex production / printing', 'NGN 340,000'],
  ['Installation', 'NGN 150,000'],
];

export default function Billboards() {
  return (
    <PageShell>
      <Hero
        left="New & powerful"
        right="Outdoor media"
        title={<>Billboard advertising that <Sp>gets you noticed.</Sp></>}
        intro="Our outdoor media puts your brand in high-traffic locations where thousands of eyes can meet you. We handle strategy, design, placement and reporting."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="scene" style={{ height: 560 }} data-r><Board /></div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cols" data-stagger style={{ fontSize: 22, letterSpacing: '-.02em', lineHeight: 1.3 }}>
            {BENEFITS.map((b, i) => (
              <div key={b}><span className="eb mute">0{i + 1}</span><br />{b}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec-l dark">
        <div className="wrap">
          <div className="eb mute" data-r>Outdoor introductory advertising rate card</div>
          <h2 className="d2" data-split style={{ margin: '12px 0' }}>Lugbe Airport Road <Sp>billboard</Sp></h2>
          <p className="lead" style={{ marginBottom: 56 }} data-r>Double-faced unipole near Shoprite, built for broad reach. 8m x 7m (56sqm) per face, with creative support, online amplification and professional campaign assistance included.</p>
          <Rates />
          <p className="fine" data-r>Payment term: upfront. Rate valid until December 31, 2026; all rates are negotiable based on duration. The 1-month pioneer rate includes an additional NGN 100,000 discount.</p>
        </div>
      </section>
      <section className="sec-l">
        <div className="wrap">
          <div className="two" style={{ gap: 72 }}>
            <div>
              <div className="eb" style={{ marginBottom: 20 }}>Package includes</div>
              {INCLUDES.map((x) => (
                <div className="cl s" data-r key={x}><span>{x}</span></div>
              ))}
            </div>
            <div>
              <div className="eb" style={{ marginBottom: 20 }}>Production &amp; installation</div>
              {PRODUCTION.map(([a, b]) => (
                <div className="cl s" data-r key={a}><span>{a}</span><b style={{ fontWeight: 600 }}>{b}</b></div>
              ))}
              <div style={{ marginTop: 40 }}>
                <Link className="btn k" href="/contact">Book this billboard <i>&rarr;</i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
