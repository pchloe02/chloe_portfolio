import React from 'react'
import './About.css'
import profil from "../assets/img/reading-book.png"

function About() {
  return (
    <div className='about-container'>
        <div className='about'>
            <div>
                <img  id="pp" src={profil} alt="picture-profil"/>
            </div>

            <div>
                <h2>Qui suis-je ?</h2>
                <p id="about-me">
                <span id="bold">Je suis une apprenante chez Ada Tech School à la 
                recherche d’une alternance en développement front-end.</span>
                <br/>
                <br/>
                Après 2 ans passés à étudier les arts plastiques à la fac, 
                j’ai décidé de troquer mes toiles contre des lignes de code. 
                Attirée par l’alliance entre la créativité et la technologie,
                j’ai choisi de me spécialiser dans le développement web.
            </p>
            </div>
        </div>
    </div>
  )
}

export default About