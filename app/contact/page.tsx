import type { Metadata } from 'next';
import PageShell from '@/components/PageShell';
import ContactForm from '@/components/ContactForm';
import { Hero, Info, Sp } from '@/components/bits';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact TalkStuff in Abuja for a free strategy consultation on digital marketing, content creation or billboard advertising.',
};

export default function Contact() {
  return (
    <PageShell cta={false}>
      <Hero left="Contact us" right="Abuja, Nigeria" title={<>Let’s have a <Sp>chat.</Sp></>} intro="Contact us with one of these ways or fill in the form." />
      <section className="sec-l" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cgrid">
            <Info />
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
