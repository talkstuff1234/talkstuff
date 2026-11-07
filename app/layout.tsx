import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@fontsource-variable/inter-tight';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import './globals.css';
import Header from '@/components/Header';
import SiteEffects from '@/components/SiteEffects';

export const metadata: Metadata = {
  title: { default: 'TalkStuff | Digital Marketing & Billboard Advertising in Abuja', template: '%s | TalkStuff' },
  description:
    'TalkStuff is an Abuja digital agency helping brands grow through digital marketing, social media, content creation, web design, and billboard advertising.',
  openGraph: { title: 'TalkStuff | Digital Marketing & Billboard Advertising', type: 'website', locale: 'en_NG', siteName: 'TalkStuff' },
};

export const viewport: Viewport = { themeColor: '#EFEDE8', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Enables the scroll animations only when JavaScript is running */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <div className="prog" aria-hidden="true" />
        <Header />
        {children}
        <SiteEffects />
      </body>
    </html>
  );
}
