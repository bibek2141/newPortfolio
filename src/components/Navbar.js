import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  
    /*Reverse State*/
  const[button,setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton= () => {
      if(window.innerWidth <=960){
          setButton(false);
      }else{
          setButton(true);
      }
  };
  
  window.addEventListener('resize',showButton);

  /*Show button once button center remember*/ 
  useEffect(() => {
      showButton();
  },[]);
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
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactMe"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Contact Me</Button>}
        </div>
      </nav>{" "}
    </>
  );
}

export default Navbar;