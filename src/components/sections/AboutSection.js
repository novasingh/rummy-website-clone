import AboutPokerImg from "../../assets/images/istockphoto-628650056-612x612-1.jpg";
import DownloadBtn from "../DownloadBtn";

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="container d-flex flex-column flex-lg-row">
                <div className="w-50">
                    <img src={AboutPokerImg}  loading="lazy"  alt="poker-img" className="img-fluid" />
                </div>
                <div className="w-50">
                    <p className="text-orange">ABOUT SKY RUMMY</p>
                    <h2>We Excel at What We Do</h2>
                    <p>Sky Rummy is a site for those who love rummy. It has been created by professionals with several years of experience playing the game and offers an amazing selection to choose from, including international rules as well!</p>
                    <DownloadBtn />
                </div>
            </div>
        </div>
    );
}
export default AboutSection;