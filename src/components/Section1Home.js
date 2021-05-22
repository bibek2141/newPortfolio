import React from "react";
import { Button } from "./Button";
import Pdf from "../Documents/Resume.pdf";
import './Section1Home.css'
import { Link } from "react-router-dom";
function Section1Home() {
  return (
    <div className="section1-container">
      <p>
        Hello, I'm <span className='name'>Bibek Adhikari</span> , Front End Developer with interests in Web
        Development and Software Engineering.
      </p>
      <p>
        As for my future, I hope to one day work as a Software Engineer role
        working in both Front End and Backend.
      </p>
      <p className='test'>
        I am open to opportunities within the Software Engineering discipline
        and if you believe I am a good fit, I'd love to hear from you.
      </p>
      <div className='resume-container'>
        <div className='Moving'>
        <Button
            className="btns space"
            buttonStyle="btn--resume"
            buttonSize="btn--large"
            onClick={Pdf}
        >
            <Link to={Pdf} target="_blank">
                My Resume
            </Link>
            
        </Button>
         </div>
        <Button
            className="btns"
            buttonStyle="btn--resume"
            buttonSize="btn--large"
            onClick={Pdf}
        >
            <Link to={Pdf} download>
                Download Resume
            </Link>
            
        </Button>
      </div>
    </div>
  );
}

export default Section1Home;
