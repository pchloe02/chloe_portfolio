import React from 'react'
import { Canvas } from '@react-three/fiber';
import { MeshTransmissionMaterial } from '@react-three/drei';
import './Landing.css'

function Landing() {
  return (
    <div id='home-section' className='landing'>
      <Canvas>
        <directionalLight intensity={100} />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial
            color="#ffffff"
          />
        </mesh>
      </Canvas>
      {/* <h1 className='greeting'>Chloé Pelerin <br /> développeuse front-end à la recherche d'une alternance !</h1> */}
    </div>

  )
}

export default Landing