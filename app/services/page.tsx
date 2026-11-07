import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { Hd, Hero, Sp } from '@/components/bits';
import { PRINCIPLES, SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Digital marketing, social media, content creation, billboard advertising, creative campaigns and web design from TalkStuff in Abuja.',
};

export default function Services() {
  return (
    <PageShell>
      <Hero
        left="Our services"
        right="Strategy to execution"
        title={<>Everything a brand needs to <Sp>be seen.</Sp></>}
        intro="From strategy to execution, services that build visibility, engage audiences and drive real business growth."
      />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <div className="sv sv3" data-r key={s.name}>
              <span className="eb" style={{ paddingTop: 12 }}>0{i + 1}</span>
              <h3>{s.name}</h3>
              <div>
                <p>{s.desc}{i === 3 ? ' We handle strategy, design, placement and reporting.' : ''}</p>
                {s.tags.map((t) => (
                  <span className="tg" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="last" />
        </div>
      </section>
      <section className="sec-l">
        <div className="wrap">
          <Hd eyebrow="Process" title={<>How we <Sp>work.</Sp></>} />
          <div className="cols" data-stagger>
            {PRINCIPLES.map((p, i) => (
              <div key={p.k}>
                <div className="eb mute">Step 0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
