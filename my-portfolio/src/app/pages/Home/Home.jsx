import { Link, Outlet  } from "react-router-dom";
import asteriskIcon from '../../../assets/asterisk.svg'

import "./Home.css";
import ProfileCard from "../../components/design/Profile-card/Profile-card";
const Home = () => {
    return (
        <div className="home-container container">
            <ProfileCard />
                <div className="home-content" >
                    <section className="hero-section">
                        <h1>Wie ben ik ?</h1>
                        <p>
                            Mijn naam is Amin Akhayad, ik ben een full-stack developer met een passie voor het bouwen van webapplicaties.<br /><br />
                            Mijn interesse in technologie begon al op jonge leeftijd; ik vond het altijd leuk om met computers te werken. Daarom ben ik gestart met de opleiding Programmeren aan de Arteveldehogeschool.<br /><br />
                            Tijdens mijn studies heb ik kennis opgedaan van verschillende programmeertalen en frameworks, waaronder <strong>HTML, CSS, JavaScript, PHP, React, Next.js, Node.js, Svelte, GSAP</strong> en <strong>Handlebars</strong>. Daarnaast heb ik ook ervaring met <strong>C#</strong>, <strong>MySQL</strong>, <strong>Figma</strong> en <strong>Adobe Photoshop</strong>.<br /><br />
                            Ik heb geleerd hoe ik efficiënt kan samenwerken binnen een team en projecten kan beheren van begin tot eind. Na het afronden van mijn opleiding besloot ik mijn carrière als developer verder uit te bouwen.<br /><br />
                            Ik ben sterk gemotiveerd om mijn vaardigheden voortdurend te verbeteren en ga graag nieuwe uitdagingen aan.<br />
                            Wil je meer te weten komen over mijn ervaring en projecten? Bezoek dan mijn <Link to="/about">Over mij</Link>-pagina.
                        </p>
                    </section>
                    <section className="tech-section">
                        <h2><img src={asteriskIcon} alt="Asterisk icon" />Mijn Technologieën</h2>
                        <p>
                            Hier is een overzicht van enkele technologieën en tools die ik heb gebruikt in mijn projecten:
                        </p>
                    </section>
                </div>
        </div>
    );
};
export default Home;
