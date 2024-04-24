import logo from "../assets/logo.png";
import "../styles/colors.css";
import "../styles/utilities.css";
import "./style.css";

const Navbar = () => {
    return (
        <div className="grey-bg navbar flex">
            <div>
                <img className="logo" alt="logo" src={logo}/>
            </div>
            <div className="flex row center nav-content">
                <a className="primary-text">Home</a>
                <a className="white-text">Stars Map</a>
                <a className="white-text">Events</a>
            </div>
            <div className="btns-container gap flex center">
                <button>Sign up</button>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navbar;