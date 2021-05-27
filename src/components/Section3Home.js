import React from "react";
import { Button } from "./Button";
import "./Section3Home.css";
import { Link } from "react-router-dom";

export default function Section3Home() {
  return (
    <div className="section3Home-container">
      <div className="section3Home-header">
        <h3>Interested in doing a project together?</h3>
      </div>

      <div className="section3Home-button">
        <Button
          className="btns space"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link to="/contactMe" target="_blank">
            Contact Me
          </Link>
        </Button>
      </div>
    </div>
  );
}
