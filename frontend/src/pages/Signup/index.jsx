import Navbar from "../../components/Navbar";
import image from "../../assets/auth.jpg";
import "./style.css";

const Signup = () => {
    return (
        <div className="page flex column">
            <Navbar />
            <div className="page-container flex column center">
                <img className="img" src={image} />
                <div className="signup-form-container grey-bg rounded flex column center">
                    <h1 className="white-text">Sign up</h1>
                    <div className="flex column gap">
                        <label className="white-text">Email</label>
                        <input className="rounded input-field" type="text" placeholder="JohnDoe@mail.com" />
                    </div>
                    <div className="flex column gap">
                        <label className="white-text">Username</label>
                        <input className="rounded input-field" type="text" placeholder="JohnDoe" />
                    </div>
                    <div className="flex column gap">
                        <label className="white-text">Password</label>
                        <input className="rounded input-field" type="password" placeholder="*********" />
                    </div>
                    <div>
                        <p className="grey-text">Already have an account? <a className="primary-text underline">Login</a></p>
                    </div>
                    <div>
                        <button className="btn">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;