import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { extend, useThree } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/Addons.js';
import { TextGeometry } from 'three/examples/jsm/Addons.js';
import TanPearl from '../assets/font/TANPEARL_Regular.json'
import { useControls } from 'leva'
import './Landing.css'

extend({ TextGeometry })


function Landing() {
  const font = new FontLoader().parse(TanPearl)
  
  // const materialProps = useControls({
  //   thickness: { value: 5, min: 0, max: 20 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
  //   clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
  //   ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
  //   envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
  //   color: '#ffffff',
  //   attenuationTint: '#ffe79e',
  //   attenuationDistance: { value: 0, min: 0, max: 1 }
  // })

  return (
    <div id='home-section' className='landing'>
      
      <Canvas>
      
      <directionalLight position={[0, 0, 1]} />

      {/* Text */}
      <mesh position={[-5, 0, -1]}>
        <textGeometry args={['Chloé Pelerin', {font, size: 1, height: 0, curveSegments: 90}]} />
        <meshPhysicalMaterial attach='material' color={'white'}/>
      </mesh>

      {/* cube */}
    {/* <mesh position={[1, 0.5, 0]} rotation-x={2}>
      <boxGeometry  />
      <meshPhysicalMaterial metalness={0} roughness={0}/>
    </mesh> */}
    <OrbitControls />
      </Canvas>
      <a href="#about-section"><button>Voir plus</button></a>
    

      {/* <h1 className='greeting'>Chloé Pelerin <br /> développeuse front-end à la recherche d'une alternance !</h1> */}
    </div>

  )
}

export default Landing