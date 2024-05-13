import React from 'react'
import './Project.css'
import { projetData } from '../assets/projet-data'

function Project() {
  return (
    <div id='project-section' className='project-container'>

        <h2 className='title'>Mes projets</h2>

        <div className='project-wrapper'>
            {projetData.map((data, index) => (
                <a href={data.github}>
                    <div className='project-frame' key={index}>
                        <div className='detail-project'>
                            <h3 className='name'>{data.name ? data.name : data.wip}</h3>
                            <p className='type'>{data.type}</p>
                            <p className='desc'>{data.description}</p>
                            <p className='techno'>{data.techno}</p>
                        </div>
                        <img className='img-project' src={data.apercu} alt="aperçu projet" />
                    </div>
                </a>
            ))}
        </div>

    </div>
  )
}

export default Project