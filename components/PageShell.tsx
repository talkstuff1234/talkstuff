import type { ReactNode } from 'react';
import Footer from './Footer';

/** Wraps each page: enter animation, main landmark and the shared footer */
export default function PageShell({ children, cta = true }: { children: ReactNode; cta?: boolean }) {
  return (
    <div className="page">
      <main id="main">{children}</main>
      <Footer cta={cta} />
    </div>
  );
}
