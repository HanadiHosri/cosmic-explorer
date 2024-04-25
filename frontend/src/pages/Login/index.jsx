import Navbar from "../../components/Navbar";
import image from "../../assets/auth.jpg";
import "./style.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="page flex column">
            <Navbar />
            <div className="page-container flex column center">
                <img className="img" src={image} />
                <div className="form-container grey-bg rounded flex column center">
                    <h1 className="white-text">Login</h1>
                    <div className="flex column gap">
                        <label className="white-text">Username</label>
                        <input className="rounded input-field" type="text" placeholder="JohnDoe" />
                    </div>
                    <div className="flex column gap">
                        <label className="white-text">Password</label>
                        <input className="rounded input-field" type="password" placeholder="*********" />
                    </div>
                    <div>
                        <p className="grey-text">Dont have an account? <Link to="/signup" className="primary-text underline">Sign up</Link> now</p>
                    </div>
                    <div>
                        <button className="btn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;