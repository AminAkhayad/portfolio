import './Profile-card.css';
import profileIcon from '../../../../assets/amin.jpg'
import { Link } from 'react-router-dom';
import githubIcon from '../../../../assets/github.svg';
import linkedinIcon from '../../../../assets/linkedIn.svg';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <img src={profileIcon} alt="Profile" className="profile-pic" />
            <h2 className="name">Amin Akhayad</h2>
            <p className="bio">Een jonge ontwikkelaar met een passie voor webontwikkeling.</p>
            <ul className='social-links'>
                <li><Link to="https://twitter.com/aminakhayad" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Twitter" /></Link></li>
                <li><Link to="https://www.linkedin.com/in/amin-akhayad-1b60a62b5" target="_blank"><img src={linkedinIcon} alt="LinkedIn" /></Link></li>
            </ul>
        </div>
    );
};
export default ProfileCard;