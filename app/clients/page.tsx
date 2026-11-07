import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import { ClientRows, Hero, Sp } from '@/components/bits';

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Respected businesses, institutions, hotels and innovative brands across Nigeria trust TalkStuff for digital marketing and billboard advertising.',
};

export default function Clients() {
  return (
    <PageShell>
      <Hero
        left="Our clients"
        right="Across Nigeria"
        title={<>Trusted by <Sp>leading brands.</Sp></>}
        intro="We’re proud to partner with respected businesses, institutions, hotels and innovative brands across Nigeria."
      />
      <section className="sec-l" style={{ paddingTop: 0 }}>
        <div className="wrap"><ClientRows /></div>
      </section>
    </PageShell>
  );
}
