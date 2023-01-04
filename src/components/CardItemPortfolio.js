import React from "react";
import "./CardItemPortfolio.css";

export default function CardItemPortfolio(props) {
  const { project } = props;
  return (
    <div className="wrapper">
      <div className="card h-200" key={project._id}>
        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
          <img className="card__img" src={project.img} alt="product" />{" "}
        </a>
        <div className="card__body">
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="card__title">{project.name}</h2>{" "}
          </a>
          <p className="card__description">{project.description}</p>
          <span className="px-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-github"></i>{" "}
            </a>
          </span>
          <span>
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>{" "}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
