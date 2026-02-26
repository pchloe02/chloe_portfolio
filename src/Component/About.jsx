import React from "react";
import "./About.css";
import profil from "../assets/img/pp.jpg";
import { introduce, aboutMe } from "../utils/data";

function About() {
  return (
    <div id="about-section" className="about-container">
      <div className="about">
        <div id="border-pp">
          <img id="pp" src={profil} alt="picture-profil" />
        </div>

        <div>
          <h2 className="title-about">Qui suis-je ?</h2>
          <p id="about-me">
            <span id="bold">{introduce}</span>
            <br />
            {aboutMe}
          </p>
          <a
            href="https://drive.google.com/file/d/1ukeEpSHfNkOk-2veygIi0BLC3hGhIHJZ/view?usp=sharing"
            target="blank_"
          >
            <button>Voir mon CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
