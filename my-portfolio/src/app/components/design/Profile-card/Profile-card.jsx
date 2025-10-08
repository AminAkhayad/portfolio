import './Profile-card.css';
import profileIcon from '../../../../assets/amin.jpg'
import { Link } from 'react-router-dom';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <img src={profileIcon} alt="Profile" className="profile-pic" />
            <h2 className="name">Amin Akhayad</h2>
            <p className="bio">Een jonge ontwikkelaar met een passie voor webontwikkeling.</p>
            
            
        </div>
    );
};
export default ProfileCard;