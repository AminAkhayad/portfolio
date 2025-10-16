import { Link  } from "react-router-dom";
import asteriskIcon from '../../../assets/asterisk.svg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactForm from "../../components/functional/Contact-form/Contact-form";
import "./Home.css";
import ProfileCard from "../../components/design/Profile-card/Profile-card";
import data from "../../components/data/data.json";
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
                        <ProfileCard />
                        <div className="hero-description">
                            <h1>Wie ben ik ?</h1>
                            <p>
                                Mijn naam is Amin Akhayad, ik ben een full-stack developer met een passie voor het bouwen van webapplicaties.<br /><br />
                                Mijn interesse in technologie begon al op jonge leeftijd; ik vond het altijd leuk om met computers te werken. Daarom ben ik gestart met de opleiding Programmeren aan de Arteveldehogeschool.<br /><br />
                                Tijdens mijn studies heb ik kennis opgedaan van verschillende programmeertalen en frameworks, waaronder <strong>HTML, CSS, JavaScript, PHP, React, Next.js, Node.js, Svelte, GSAP</strong> en <strong>Handlebars</strong>. Daarnaast heb ik ook ervaring met <strong>C#</strong>, <strong>MySQL</strong>, <strong>Figma</strong> en <strong>Adobe Photoshop</strong>.<br /><br />
                                Ik heb geleerd hoe ik efficiënt kan samenwerken binnen een team en projecten kan beheren van begin tot eind. Na het afronden van mijn opleiding besloot ik mijn carrière als developer verder uit te bouwen.<br /><br />
                                Ik ben sterk gemotiveerd om mijn vaardigheden voortdurend te verbeteren en ga graag nieuwe uitdagingen aan.<br />
                                Wil je meer te weten komen over mijn ervaring en projecten? Bezoek dan mijn <Link to="/about">Over mij</Link>-pagina.
                            </p>
                        </div>
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
