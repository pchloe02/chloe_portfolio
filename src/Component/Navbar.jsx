import React from 'react'
import './Navbar.css'
import logo from '../assets/img/cat.png'


function Navbar() {
  return (
    <div className='navbar'>

        <img src={logo} alt="logo-cat" className='logo'/>

        <ul id="list-nav">
          <a href="#home-section"><li>Accueil</li></a>
          <a href="#about-section"><li>À propos</li></a>
          <a href="#project-section"><li>Projets</li></a>
          <a href="#contact-section"><li>Contact</li></a>
        </ul>
    </div>
  )
}

export default Navbar