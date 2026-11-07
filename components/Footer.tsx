import Link from "next/link";
import { WhiteLogo } from "./logo";

export default function Footer({ cta = true }: { cta?: boolean }) {
  return (
    <>
      {cta && (
        <section className="cta">
          <div className="wrap between">
            <h2 className="d2" data-split style={{ fontSize: "clamp(48px,9vw,128px)", lineHeight: 0.92 }}>
              Have a project
              <br />
              in <span className="serif acc">mind?</span>
            </h2>
            <Link className="btn k" href="/contact" data-r>
              Start a project <i>&rarr;</i>
            </Link>
          </div>
        </section>
      )}
      <footer className="ftr">
        <div className="wrap">
          <div className="fg">
            <p>
              We build visibility that drives results. Digital marketing, outdoor advertising, content creation and web experiences that help brands
              grow and stay memorable.
            </p>
            <div>
              <div className="eb">Menu</div>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/billboards">Billboards</Link>
              <Link href="/clients">Clients</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div>
              <div className="eb">Get in touch</div>
              <a href="mailto:talkstuff.office@gmail.com">Email</a>
              <a href=" https://wa.me/2348029545630">Whatsapp</a>
              <a href="tel:+2348029545630">Call</a>
              <span>Abuja, Nigeria</span>
            </div>
            <div>
              <div className="eb">Social</div>
              {/* Replace # with your real profile URLs */}
              <a target="_blank" href="https://x.com/TalkStuffDS">
                X
              </a>
              <a target="_blank" href="https://www.instagram.com/talkstuffds?dlrf=eWZ1ZjhhaHZtaHh0">
                Instagram
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/talkstuff">
                LinkedIn
              </a>
              <a target="_blank" href="tiktok.com/@talkstuffds">
                Tiktok
              </a>
            </div>
          </div>
          <div className="wm" data-r>
            TalkStuff<sup>&reg;</sup>
          </div>
          <div className="fb">
            <span>&copy; 2026 TalkStuff Digital Services. All rights reserved.</span>
            <span>Built with strategy, creativity and technology.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
