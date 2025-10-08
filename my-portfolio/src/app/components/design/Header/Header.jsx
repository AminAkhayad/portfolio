import { Link, Outlet  } from "react-router-dom";
import homeIcon from '../../../../assets/home.svg'
import folderIcon from '../../../../assets/folder.svg'
import aboutIcon from '../../../../assets/about.svg'
import './Header.css'
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"><img src={homeIcon} alt="Home" /><span>Home</span></Link></li>
                    <li><Link to="/about"><img src={aboutIcon} alt="About" /><span>About</span></Link></li>
                    <li><Link to="/projects"><img src={folderIcon} alt="Projects" /><span>Projects</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
