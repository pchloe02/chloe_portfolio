import React from 'react'
import './Project.css'
import { projetData } from '../assets/projet-data'

function Project() {
  return (
    <div id='project-section' className='project-container'>
        <div className='project-list'>
            <h2 className='title'>Projets</h2>
            {projetData.map((data, index) => (
                <div className='projet-card' key={index}>
                    <h3>{data.name}</h3>
                    <img src={data.apercu} alt="aperçu projet" />
                    <p>{data.type}</p>
                    <a href={data.github}>Code source</a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Project