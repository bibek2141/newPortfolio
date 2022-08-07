import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);

  /*Reverse State*/
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  /*Show button once button center remember*/
  useEffect(() => {
    showButton();
  }, []);
  return (
    <>
      {" "}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="logo" src="images/logo.svg" alt="Logo" srcSet="" />
          </Link>
          {/* Use state to change hamburger menu cross to ==*/}
          <div className="menu-icon" onClick={handleClick}>
            {/* When i click on hamburger menu toggle between cross and times*/}
            <i className={click ? "null" : "fas fa-bars fa-lg"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="menu-icon-test" onClick={handleClick}>
              {/* When i click on hamburger menu toggle between cross and times*/}
              <i className={click ? "fas fa-times fa-lg" : "null"} />
            </div>
            <li className="empty"></li>
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                activeClassName="main-nav-active"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-links"
                exact
                activeClassName="main-nav-active"
                onClick={closeMobileMenu}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contactMe"
                className="nav-links-mobile"
                exact
                activeClassName="main-nav-active"
                onClick={closeMobileMenu}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
          {button && (
            <Button
              className="btns space"
              buttonStyle="btn--resume"
              buttonSize="btn--large"
            >
              <Link to="/contactMe">Contact me</Link>
            </Button>
          )}
        </div>
      </nav>{" "}
    </>
  );
}

export default Navbar;
