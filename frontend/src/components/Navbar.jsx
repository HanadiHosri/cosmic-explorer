import logo from "../assets/logo.png";
import "../styles/colors.css";
import "../styles/utilities.css";
import "./style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="grey-bg navbar flex">
            <div>
                <img className="logo" alt="logo" src={logo}/>
            </div>
            <div className="flex row center nav-content">
                <Link to="/" className="white-text no-underline">Home</Link>
                <a className="white-text">Stars Map</a>
                <a className="white-text">Events</a>
            </div>
            <div className="btns-container gap flex center">
                <Link to="/signup"><button>Sign up</button></Link>
                <Link to="/login"><button>Login</button></Link>
            </div>
        </div>
    )
}

export default Navbar;