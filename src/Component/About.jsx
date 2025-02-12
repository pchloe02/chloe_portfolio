import React from 'react'
import './About.css'
import profil from "../assets/img/profile_pic_2.jpg"

function About() {
  const introduce = "Je suis une développeuse front-end en quête d'une nouvelle opportunité !"
  const aboutMe = "Après 2 ans passés à étudier les arts plastiques à la fac, j’ai décidé de troquer mes toiles contre des lignes de code. Attirée par l’alliance entre la créativité et la technologie, j’ai choisi de me spécialiser dans le développement front-end."
  return (
    <div id='about-section' className='about-container'>
      <div className='about'>
        <div id='border-pp'>
          <img id="pp" src={profil} alt="picture-profil" />
        </div>

        <div>
          <h2>Qui suis-je ?</h2>
          <p id="about-me">
            <span id="bold">{introduce}</span>
            <br/>
            {aboutMe}
          </p>
          <a href="https://drive.google.com/file/d/1ukeEpSHfNkOk-2veygIi0BLC3hGhIHJZ/view?usp=sharing" target='blank_'><button>Voir mon CV</button></a>
        </div>
      </div>
    </div>
  )
}

export default About