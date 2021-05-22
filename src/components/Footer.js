import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="logoFooter">
      <img className="logo" src="images/LogoFooter.svg" alt="Logo" srcSet="" />
      <div className="icon">
        <a href="https://www.linkedin.com/in/bibek-adhikari3/">
          <i className="fab fa-linkedin fa-2x social-media"></i>
        </a>

        <a href="https://github.com/bibek2141">
          <i className="fab fa-github fa-2x social-media"></i>
        </a>

        <a href="mailto:bibekadhikari2141@gmail.com">
          <i className="fas fa-envelope fa-2x social-media"></i>
        </a>

        <p className="copyright">
          Copyright ⓒ{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
