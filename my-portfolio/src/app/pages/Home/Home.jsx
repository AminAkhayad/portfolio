import { Link, Outlet  } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page of my portfolio website.</p>
            <p><Link to="/about">About</Link></p>
        </div>
    );
};
export default Home;
