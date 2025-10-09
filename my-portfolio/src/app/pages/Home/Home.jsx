import { Link  } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import asteriskIcon from '../../../assets/asterisk.svg'

import "./Home.css";
import ProfileCard from "../../components/design/Profile-card/Profile-card";
const Home = () => {
    const [loading, setLoading] = useState(true);
    const nameRef = useRef(null);
    const overlayRef = useRef(null);
     useEffect(() => {
    if (!loading) return;

    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    // Naam fade in
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      // even laten staan
      .to(nameRef.current, { opacity: 1, duration: 0.8 })
      // fade out + overlay verdwijnt
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });

    return () => tl.kill();
  }, [loading]);
    return (
        <div className="home-container container">
            {loading && (
        <div ref={overlayRef} className="loading-overlay">
          <h1 ref={nameRef}>Amin Akhayad</h1>
        </div>
      )}
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
                        
                    </section>
        </div>
    );
};
export default Home;
