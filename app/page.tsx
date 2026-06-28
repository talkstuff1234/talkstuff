import About from "@/components/Home/About";
import BillboardSection from "@/components/Home/BillboardSection";
import Clients from "@/components/Home/Clients";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <BillboardSection />
      <Clients />
      {/* <Team /> */}
      <Contact />
    </>
  );
}
