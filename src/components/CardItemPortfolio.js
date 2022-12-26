import React from "react";
import "./CardItemPortfolio.css";

export default function CardItemPortfolio(props) {
  const { project } = props;
  return (
    <div className="col-sm-12 col-lg-4">
      <div key={project._id} className="card h-100">
        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
          <img
            className="medium card-img-top embed-responsive-item"
            src={project.img}
            alt="product"
          />
        </a>
        <div className="card-body">
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="title">{project.name}</h2>
          </a>
          <div className="description">{project.description}</div>
          <div className="links">
            <span>
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
    </div>
  );
}
