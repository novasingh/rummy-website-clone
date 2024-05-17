/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header--top-bar">
        <div className="container mx-a d-flex justify-content-between py-2">
          <div className="d-flex text-light">
            <div className="p-1 pe-4 border-1 border-light border-end">
              skyyeet.service@gmail.com
            </div>
            <div className="p-1 ps-4">+91 730 344 6292</div>
          </div>
          <div className="p-1 header--top-bar--fb-icon">
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className="header--menu py-2">
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand text-light" href="#">
              <span>Sky</span> Rummy
            </a>
            <ul className="navbar-nav  d-none d-lg-flex flex-row ">
              <li className="nav-item px-3">
                <a className="nav-link  active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item px-3">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="nav-btn d-none d-lg-flex">
              <button className="btn btn-primary px-4 py-2">
                Download App
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
