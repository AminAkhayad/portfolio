import { Link } from "react-router-dom";
import "./Button.css";
import arrowIcon from '../../../../assets/arrow.svg'

const Button = ({ to, children }) => {
    return (
        <Link to={to} className="btn">
            {children}
            <img src={arrowIcon} alt="Arrow icon" />
        </Link>
    );
};

export default Button;