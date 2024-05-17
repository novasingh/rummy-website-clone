import PokerImg from "../../assets/images/istockphoto-628650056-612x612-1.jpg";
import DownloadBtn from "../DownloadBtn";
const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="bg-overlay-hero"></div>
            <div className="container text-light d-flex justify-content-between position-relative z-1 flex-column-reverse flex-lg-row">
                <div className="w-50">
                    <h1>MOST TRUSTED ONLINE RUMMY SITE</h1>
                    <p className="text-orange">SKYYEET SOFTWARE TECHNOLOGY PRIVATE LIMITED</p>
                    <p>Our website is one of the most exciting rummy websites to play all kinds of rummy games online. where you can enjoy online rummy with your friends</p>
                    <DownloadBtn />
                </div>
                <div className="w-50">
                    <img src={PokerImg} loading="lazy" className="img-fluid" alt="Poker Img"/>
                </div>
            </div>
        </div>
    );
}
export default HeroSection;