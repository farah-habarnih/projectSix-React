import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerMainContainer">
      <div className="footerColsContainer">
        <div className="footerColumn">
          <div className="footerSiteName">
            <h3 className="footerSiteName">BOOKINGA</h3>
          </div>
          <div className="footerSiteDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            molestias aliquam provident magnam voluptatibus et ad deleniti atque
            qui, nulla id labore saepe,
          </div>
        </div>
        <div className="footerColumn">
          <div className="footerSiteName">
            <h3>Links</h3>
          </div>
          <div className="footerColPagesLinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/findApartment">Find Apartment </Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerColumn">
          <div className="footerColTitle">
            <h3>Follow Us</h3>
          </div>
          <div className="footerColLinks">
            <a href="https://web.facebook.com/" target="_blank">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram-square fa-2x"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank">
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyRightArea">ALL RIGHT RESERVED 2021 &copy;</div>
    </div>
  );
}

export default Footer;
