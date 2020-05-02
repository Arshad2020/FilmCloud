import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer-conter">
      <div className="footer-details">
        <div className="social-container">
          <h3>Social follow</h3>
          <FontAwesomeIcon
            style={{ color: "#49a1eb" }}
            className="social-icon"
            icon={faTwitter}
            size="2x"
          />
          <FontAwesomeIcon
            style={{ color: "#4968ad" }}
            className="social-icon"
            icon={faFacebook}
            size="2x"
          />
          <FontAwesomeIcon
            style={{ color: "white" }}
            className="social-icon"
            icon={faInstagram}
            size="2x"
          />
          <FontAwesomeIcon
            style={{ color: "#eb3223" }}
            className="social-icon"
            icon={faYoutube}
            size="2x"
          />
        </div>
        <div className="col-div">
          <h4>GET HELP</h4>
          <ul className="col-help-sub">
            <li>Technical help</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col-div">
          <h4>ABOUT</h4>
          <ul className="col-about-sub">
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col-div">
          <h4>OUR APPS</h4>
          <ul className="col-help-sub">
            <li>FilmCloud for iOS</li>
            <li>FilmCloud for Android</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="copy-right">
          &copy;{new Date().getFullYear()} FilmCloud | All rights reserved |{" "}
          <span className="serves-terms">Terms of service </span>|{" "}
          <span className="privacy">Privacy</span>
        </p>
      </div>
    </div>
  );
}
export default Footer;
