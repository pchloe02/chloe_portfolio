import React from 'react'
import './Navbar.css'
import logo from '../assets/img/logo_cplrn.png'


function Navbar() {
  return (
    <div className='navbar'>

      <img src={logo} alt="logo-cplrn" className='logo' />

      <ul id="list-nav">
        <a href="#home-section"><li>Accueil</li></a>
        <a href="#about-section"><li>À propos</li></a>
        <a href="#project-section"><li>Projets</li></a>
      </ul>
    </div>
  )
}

export default Navbar