/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaMapMarkerAlt, FaPhoneAlt, FaRegBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DownloadBtn from "./DownloadBtn";

const Footer = () => {
    return(
        <>
       <div className="container mx-auto footer-download-app position-relative">
        <div className="overlay-bg"></div>
            <div className="d-flex justify-content-between position-relative z-1 flex-column  flex-lg-row ">
                <div>
                    <h4 className="pb-4 text-center text-lg-start">INDIA’S BEST RUMMY APP</h4>
                    <h3 className="pb-4 text-center text-lg-start">DOWNLOAD OUR APP!</h3>
                    <p className="text-center text-lg-start">The Most Trusted & Easy Use Rummy App</p>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                   <DownloadBtn />
                </div>
            </div>
       </div>
       <footer>
        <div className="container text-light d-flex">
            <div className="box-1">
                <h4><span>Sky</span> Rummy</h4>
                <p>Sky Rummy, is a real-time online rummy card game which fully owned by SKYYEET SOFTWARE TECHNOLOGY PRIVATE LIMITED.</p>
                <p>We are a passionate team of designers and developers with years experience in the card game industry. Our aim is to provide you an awesome online experience on this sophisticated handmade product!</p>
            </div>
            <div className="box-2">
                <h4>Policies Links</h4>
                <ul className="list-unstyled footer-links">
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms Conditions</a>
                    </li>
                    <li>
                        <a href="#">Cancellation & Refund Policy</a>
                    </li>
                    <li>
                        <a href="#">Withdrawal Policy</a>
                    </li>
                </ul>
            </div>
            <div className="box-3">
                <h4 >Get in Touch</h4>
                <ul className="list-unstyled footer-links">
                    <li>
                        <a href="#"><FaRegBuilding className="me-3" />SKYYEET SOFTWARE TECHNOLOGY PRIVATE LIMITED</a>
                    </li>
                    <li>
                        <a href="#"><FaMapMarkerAlt className="me-3" />NIKANTH MAHADEV TEMPLE, SHOP NO 2 , PLOT NO 1, SYAMNAGAR, BENAR ROAD, MADHAV NAGAR JHOTWARA, JAIPUR, RAJASTHAN, 302012</a>
                    </li>
                    <li>
                        <a href="#"><MdEmail className="me-3" />SKYYEET.SERVICE@GMAIL.COM</a>
                    </li>
                    <li>
                        <a href="#"><FaPhoneAlt className="me-3" />+91 730 344 6292</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-copyright container">
            © 2023 SKYYEET SOFTWARE TECHNOLOGY PRIVATE LIMITED • ALL RIGHTS RESERVED
            </div>  
       </footer>
       </>
    )
}
export default Footer;