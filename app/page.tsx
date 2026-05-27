/*
  TalkStuff — Main Page
  ─────────────────────
  Section order:
    1. Navbar       — top navigation + dark/light toggle
    2. Hero         — headline, CTA, metrics, brand strip
    3. About        — about copy + visual
    4. Services     — 8-card grid of services
    5. Billboard    — full-width billboard feature
    6. Stats        — 4 key performance numbers
    7. Team         — 6 team members
    8. Process      — 5-step process
    9. Contact      — form + perks
   10. Footer       — links + copyright

  To add a new section:
    1. Create a component in /components/
    2. Import it below
    3. Drop it where you want in the JSX
*/

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Billboard from "@/components/Billboard";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Billboard />
      <Stats />
      <Clients />
      <Team />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
