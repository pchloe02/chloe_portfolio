import React from "react";
import "./Navbar.css";
import Icon from "./Icon";

function Navbar() {
  return (
    <div className="navbar">
      <Icon />

      <ul id="list-nav">
        <a href="#home-section">
          <li>Accueil</li>
        </a>
        <a href="#about-section">
          <li>À propos</li>
        </a>
        <a href="#project-section">
          <li>Projets</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
