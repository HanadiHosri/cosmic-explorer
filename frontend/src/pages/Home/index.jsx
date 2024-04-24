import "../../styles/utilities.css";
import "../../styles/colors.css";
import "./style.css";
import Navbar from "../../components/Navbar";


const Home = () => {
    return (
        <div className="page home-page flex column">
            <Navbar />
            <div className="flex center">
                <div className="flex column center text white-text">
                    <h1>WELCOME TO COSMIC EXPLORER!</h1>
                    <div className="flex column center">
                        <p>Your designated website  for stargazing and exploring cosmic wonders.</p>
                        <p>With our interactive stars map feature, you can discover a variety of stellar events.</p>
                        <p>Explore the events page to locate on the map the best viewing spots for these events.</p>
                        <p>Start your cosmic journey today!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;