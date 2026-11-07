import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Hd, Hero, Sp, Stats } from '@/components/bits';
import { PRINCIPLES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'TalkStuff Digital Services is a full-service digital agency in Abuja helping businesses grow their brand with strategy, creative content and advertising.',
};

export default function About() {
  return (
    <PageShell>
      <Hero
        left="About TalkStuff"
        right="Abuja, Nigeria"
        title={<>Your digital growth &amp; <Sp>advertising</Sp> partner</>}
        intro="TalkStuff Digital Services is a full-service digital agency helping businesses grow their brand, reach the right audience and drive measurable results through smart strategy, creative content and powerful advertising."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {/* Replace this placeholder with <Image src="/team.jpg" ... /> (see README) */}
          <div className="ph" data-r>
            <div>
              <div className="eb">Photo placeholder</div>
              <div style={{ marginTop: 6 }}>Team at work — add your office photo here (see README)</div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap"><Stats /></div>
      </section>
      <section className="sec-l" style={{ paddingTop: 60 }}>
        <div className="wrap">
          <Hd eyebrow="Why you should choose us" title={<>We combine strategy, creativity, execution and <Sp>results.</Sp></>} />
          {PRINCIPLES.map((p) => (
            <div className="pr" data-r key={p.k}>
              <span className="eb mute" style={{ paddingTop: 10 }}>{p.k}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
          <div className="last" />
        </div>
      </section>
    </PageShell>
  );
}
