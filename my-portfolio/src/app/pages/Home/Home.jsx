import { Link } from "react-router-dom";
import asteriskIcon from "../../../assets/asterisk.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "../../components/functional/Contact-form/Contact-form";
import "./Home.css";
import profileIcon from "../../../assets/amin.jpg";
import data from "../../components/data/data.json";
import carIcon from "../../../assets/car.gif";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".intro p", {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(".intro", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        document.querySelector(".intro").style.display = "none";
        ScrollTrigger.refresh();
      },
    });
    
    gsap.set("#morph", { transformOrigin: "center" });

    gsap
      .timeline({ repeat: -1, defaults: { duration: 1.4, ease: "sine.inOut" } })
      .to("#morph", {
        morphSVG: "#shape-x",
        rotation: "+=90",
        transformOrigin: "center center",
      })
      .to("#morph", {
        morphSVG: "#shape-triangle",
        rotation: "+=90",
        transformOrigin: "center center",
      })
      .to("#morph", {
        morphSVG: "#shape-square",
        rotation: "+=90",
        transformOrigin: "center center",
      })
      .to("#morph", {
        morphSVG: "#shape-circle",
        rotation: "+=90",
        transformOrigin: "center center",
      });
    gsap
      .timeline({ repeat: -1 })
      .set(".words", { xPercent: -100 })
      .to(".words", { xPercent: 100, duration: 12, ease: "none" });

    gsap.utils.toArray(".tech-category").forEach((el) => {
      gsap.from(el, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
    gsap.utils.toArray(".tech-category > h2").forEach((el) => {
      gsap.from(el, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      
      });
       const mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  const st = ScrollTrigger.create({
    start: 0,
    end: () => document.documentElement.scrollHeight - window.innerHeight,
    onUpdate: (self) => gsap.set(".scroll-progress__bar", { scaleX: self.progress, scaleY: 1 }),
    invalidateOnRefresh: true,
  });
  return () => st.kill();
});

mm.add("(min-width: 769px)", () => {
  const st = ScrollTrigger.create({
    start: 0,
    end: () => document.documentElement.scrollHeight - window.innerHeight,
    onUpdate: (self) => gsap.set(".scroll-progress__bar", { scaleY: self.progress, scaleX: 1 }),
    invalidateOnRefresh: true,
  });
  return () => st.kill();
});
    });
  });
  return (
    <div className="home-container container">
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" />
      </div>
      <div id="intro" className="intro">
        <p>AMIN.AKHAYAD</p>
      </div>
      <section className="hero-section">
        <div className="hero-description">
          <h1>AMIN.AKHAYAD</h1>
          <div className="profile-description">
            <figure>
              <img src={profileIcon} alt="Profile" />
            </figure>
            <div className="profile-text">
              <div className="words">
                <span className="word">BASED</span>
                <span className="word divider">+</span>
                <span className="word">IN</span>
                <span className="word divider">+</span>
                <span className="word">GENT</span>
              </div>
              <figure>
                <img src={carIcon} alt="Car" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section className="tech-section">
        <h2>
          <img src={asteriskIcon} alt="Asterisk icon" />
          Mijn Tech stack
        </h2>
        {Object.entries(data).map(([category, items]) => (
          <div key={category} className="tech-category">
            <h2>{category}</h2>
            <div className="tech-items">
              {items.map(({ name, icon }) => (
                <div key={name} className="tech-item-card">
                  <img
                    src={`${import.meta.env.BASE_URL}${icon}`}
                    alt={name}
                    className="tech-icon"
                  />
                  <p>{name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="contact-section">
        <ContactForm />

        <h2 className="contact-heading">
          <svg
            className="blob-morph"
            viewBox="0 0 200 200"
            width="100"
            height="100"
          >
            <path
              id="morph"
              className="blob-path"
              d="M100,20 Q180,60 100,180 Q20,60 100,20Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              id="shape-x"
              d="M35,65 L65,35 L100,70 L135,35 L165,65 L130,100 L165,135 L135,165 L100,130 L65,165 L35,135 L70,100 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: "none" }}
            />
            <path
              id="shape-triangle"
              d="M100,30 L170,170 L30,170 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: "none" }}
            />
            <path
              id="shape-square"
              d="M40,40 H160 V160 H40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: "none" }}
            />
            <path
              id="shape-circle"
              d="M100,40 A60,60 0 1,1 99.9,40 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ display: "none" }}
            />
          </svg>
          <span>Stuur</span>
          <span className="divider" />
          <span>een bericht</span>
        </h2>
      </section>
    </div>
  );
};
export default Home;
