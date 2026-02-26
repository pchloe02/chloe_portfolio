import React from "react";
import "./Project.css";
import { projetData } from "../assets/projet-data";

function Project() {
  return (
    <div id="project-section" className="project-container">
      <h2 className="title">Mes projets</h2>

      <div className="project-wrapper">
        {projetData.map((data, index) => (
          <a
            href={data.github}
            key={index}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-frame">
              <img
                className="img-project"
                src={data.apercu}
                alt={data.name || data.wip}
              />
              <div className="detail-project">
                <h3 className="name">{data.name ? data.name : data.wip}</h3>
                <p className="type">{data.type}</p>
                <p className="desc">{data.description}</p>
                <p className="techno">{data.techno}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Project;
