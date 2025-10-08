import { Link, Outlet  } from "react-router-dom";
import "./Home.css";
import ProfileCard from "../../components/design/Profile-card/Profile-card";
const Home = () => {
    return (
        <div className="home-container container">
            <ProfileCard />
                <section className="hero-section">

                </section>
        </div>
    );
};
export default Home;
