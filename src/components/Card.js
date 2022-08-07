import React from "react";
import "./Card.css";
import CardItem from "./CardItem";

function Card() {
  const card1 = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "SASS(Learning)",
    "ReactJS(Learning)",
  ];
  const card2 = [
    "MySQL",
    "NodeJS",
    "ASP.NET",
    "JSON",
    "ExpressJS(Learning)",
    "Python",
  ];
  const card3 = [
    "Git",
    "npm",
    "React Router(Learning)",
    "C programming",
    "C#",
    "SVN",
    "Linux",
  ];
  return (
    <div className="cards">
      <h1 className="title">Skills</h1>
      <div className="cardsDiv">
        <CardItem
          title="Front-End"
          text=<i class="fas fa-file-code fa-2x icon2"></i>
          list={card1.map(function (name, index) {
            return (
              <li class="card_name" key={index}>
                {name}
              </li>
            );
          })}
        />
        <CardItem
          title="Back-End"
          text=<i class="fas fa-database fa-2x icon2"></i>
          list={card2.map(function (name, index) {
            return (
              <li class="card_name" key={index}>
                {name}
              </li>
            );
          })}
        />
        <CardItem
          title="Others"
          text=<i class="fas fa-toolbox fa-2x icon2"></i>
          list={card3.map(function (name, index) {
            return (
              <li class="card_name" key={index}>
                {name}
              </li>
            );
          })}
        />
      </div>
    </div>
  );
}

export default Card;
