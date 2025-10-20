import { Link  } from "react-router-dom";
import asteriskIcon from '../../../assets/asterisk.svg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "../../components/functional/Contact-form/Contact-form";
import "./Home.css";
import profileIcon from '../../../assets/amin.jpg'
import ProfileCard from "../../components/design/Profile-card/Profile-card";
import data from "../../components/data/data.json";
import githubIcon from '../../../assets/github.svg';
import linkedinIcon from '../../../assets/linkedIn.svg';
import Button from "../../components/design/Button/Button";

const Home = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
    // Timeline animatie voor de intro
    const tl = gsap.timeline();

    // Naam fade in
    tl.from(".intro p", {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
    });

    // Fade out + naar boven
    tl.to(".intro", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        document.querySelector(".intro").style.display = "none";
            ScrollTrigger.refresh(); // ← voeg deze toe

      },
    });
    ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.set(".scroll-progress__bar", { scaleY: self.progress });
      },
    });
    gsap.to(".blob-ring", {
  rotation: 360,
  duration: 40,
  ease: "none",
  repeat: -1,
  transformOrigin: "50% 50%",
  transformBox: "fill-box",
});
gsap.to(".blob-ring", {
  scale: 1.05,
  duration: 3,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
  transformOrigin: "50% 50%",
  transformBox: "fill-box",
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
                            <h1>Ik ben Amin Akhayad <br /><br /><span>een full-stack developer</span></h1>
                            <p>
                              Welkom op mijn portfolio! Hier deel ik mijn passie en vaardigheden op het gebied van webontwikkeling. 
                              <br /><br /> 
                              Als full-stack developer streef ik ernaar om oplossingen te creëren die niet alleen functioneel, maar ook visueel aantrekkelijk zijn. 
                              Ik vind het belangrijk dat een website niet alleen goed werkt, maar ook een fijne ervaring biedt voor de gebruiker.
                              <br /><br />
                              Bekijk mijn avontuur van hoe en waarom ik er van hou om websites op te bouwen. <br />
                              <Button to="/about">Lees meer</Button>
                            </p>
                            <h2>Socials</h2>
                            <ul>
                              <li><Link to="https://twitter.com/aminakhayad" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Twitter" /></Link></li>
                              <li><Link to="https://www.linkedin.com/in/amin-akhayad-1b60a62b5" target="_blank"><img src={linkedinIcon} alt="LinkedIn" /></Link></li>
                            </ul>
                        </div>
                        <figure>
                            <img src={profileIcon} alt="Amin Akhayad" />
                        </figure>
                    </section>
                    <section className="tech-section">
                        <h2><img src={asteriskIcon} alt="Asterisk icon" />Mijn Tech stack</h2>
                        {Object.entries(data).map(([category, items]) => (
                          <div key={category} className="tech-category">
                            <h2>{category}</h2>
                            <div className="tech-items">
                              {items.map(({ name, icon }) => (
                                <div key={name} className="tech-item-card">
                                  <img src={`${import.meta.env.BASE_URL}${icon}`} alt={name} className="tech-icon" />
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
                        <svg className="blob-ring" viewBox="0 0 600 600" aria-hidden="true">
                          <path
                            d="M426.5,320.5Q419,441,300,455.5Q181,441,123.5,350.5Q66,260,141.5,176.5Q217,93,326,120Q435,147,438,243.5Q434,320,426.5,320.5Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
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
