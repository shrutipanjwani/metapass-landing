import React from "react";
import "../Styles/Footer.css";
import logo from "../Assets/metapass transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <img className="navbar-logo" src={logo} alt="Logo" />
          <span>Metapass</span>
          <ul className="footer-socials">
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <ul className="footer-links">
            <h3>Company</h3>
            <li>Twitter</li>
            <li>gm@metapasshq.xyz</li>
          </ul>
        </div>
        <div className="footer-col">
          <ul className="footer-links">
            <h3>Legal</h3>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <small>Copyright © 2022 Metapass, Inc. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
