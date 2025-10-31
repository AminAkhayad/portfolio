import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./About.css";
import gentFirst from "/assets/gent-first.jpg";
import gentSecond from "/assets/gent-second.jpg";
import gentThird from "/assets/gent-third.jpg";
import gentFourth from "/assets/gent-fourth.jpg";
import gentFifth from "/assets/gent-fifth.jpg";
import gentSixth from "/assets/gent-sixth.jpg";
const CV_SRC = "/portfolio/docs/amin_akhayad_cv.pdf";
import arrowIcon from "../../../assets/arrow-down.svg";

const About = () => {
  const scope = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".intro p", { opacity: 0, y: 80, duration: 1, ease: "power3.out" })
      .to(".intro", {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          const el = document.querySelector(".intro");
          if (el) el.style.display = "none";
          Promise.resolve().then(() => ScrollTrigger.refresh(true));
        },
      });

    ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => gsap.set(".scroll-progress__bar", { scaleY: self.progress }),
    });

    const boxes = gsap.utils.toArray(".interest-list li");
    gsap.set(boxes, { autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: ".interest-list",
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(boxes, {
          autoAlpha: 1,
          stagger: 0.12,
          duration: 0.5,
          ease: "power1.out",
          overwrite: "auto",
        });
      },
    });
  }, { scope });

  return (
    <div ref={scope} className="about-container container">
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" />
      </div>

      <div id="intro" className="intro">
        <p>About</p>
      </div>

      <section className="hero-section">
        <h1>About Me</h1>
        <ul className="images-grid">
          <li className="img"><img src={gentFourth} alt="Gent" /></li>
          <li className="img"><img src={gentFifth} alt="Gent" /></li>
          <li className="img"><img src={gentSixth} alt="Gent" /></li>
          <li className="img"><img src={gentFirst} alt="Gent" /></li>
          <li className="img"><img src={gentSecond} alt="Gent" /></li>
          <li className="img"><img src={gentThird} alt="Gent" /></li>
          <li className="banner">
            <h2>GENT</h2>
            <p>Gent is de mooie stad waar ik geboren ben, en natuurlijk een van mijn favoriete steden om te bezoeken.</p>
          </li>
        </ul>
      </section>

      <section className="interest-section">
        <h2>Mijn interesses</h2>
        <ul className="interest-list">
          <li>Reizen</li>
          <li>Fotografie</li>
          <li>Koken</li>
          <li>Wandelen</li>
          <li>Lezen</li>
          <li>Muziek</li>
          <li>Sport</li>
          <li>Gaming</li>
          <li>Bingewatchen</li>
        </ul>
      </section>
      <section className="cv-section">
        <h2>CV</h2>
        <p>Je kunt meer te weten komen als je mijn cv bekijkt.</p>
        <div className="cv-actions">
          <a href={CV_SRC} download>Download CV <img src={arrowIcon} alt="" /></a>
          <a href={CV_SRC} target="_blank" rel="noreferrer">Open in nieuw tabblad</a>
        </div>
        
      </section>
    </div>
  );
};

export default About;
