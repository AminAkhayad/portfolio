import './Footer.css';
import { Link } from "react-router-dom";
import githubIcon from '../../../../assets/github.svg';
import linkedinIcon from '../../../../assets/linkedIn.svg';

const Footer = () => {  
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-title">
                    <span>The Future</span>
                    <span className="devider"></span>
                    <span>is now</span>
                </div>
                <div className='author'>
                    AMIN.AKHAYAD
                </div>
                <ul className="footer-bottom">
                    <li><Link to="https://twitter.com/aminakhayad" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Twitter" /></Link></li>
                    <li><Link to="https://www.linkedin.com/in/amin-akhayad-1b60a62b5" target="_blank"><img src={linkedinIcon} alt="LinkedIn" /></Link></li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;