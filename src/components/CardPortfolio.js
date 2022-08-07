import React from "react";
import CardItemPortfolio from "./CardItemPortfolio";
import data from "./data";

function CardPortfolio() {
  return (
    <div className="grid-container">
      <main class="main-card">
        <div>
          <div className="row center">
            {data.projects.map((project) => (
              <CardItemPortfolio key={project._id} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CardPortfolio;
