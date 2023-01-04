import React from "react";
import CardItemPortfolio from "./CardItemPortfolio";
import data from "./data";

function CardPortfolio() {
  return (
    <div className="container">
      <div className="row center">
        {data.projects.map((project) => (
          <CardItemPortfolio key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default CardPortfolio;
