import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
import React, { Fragment } from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <Fragment>
      <div className="footer">
        <h3 className="footer-title ">The Generics</h3>
        <div className="footericons">
          <ul>
            <a href="https://www.youtube.com/" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
