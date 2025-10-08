import { Link, Outlet  } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"><span>Home</span></Link></li>
                    <li><Link to="/about"><span>About</span></Link></li>
                    <li><Link to="/projects"><span>Projects</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
