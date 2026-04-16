import React, { useRef, useState, useCallback } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  RoundedBox,
} from "@react-three/drei";
import { TextureLoader } from "three";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/Addons.js";
import { TextGeometry } from "three/examples/jsm/Addons.js";

import TanPearl from "../assets/font/TANPEARL_Regular.json";
import arrow from "../assets/img/down-arrow.png";
import "./Landing.css";
import violet_bg from "../assets/img/bgx2.hdr";
import bg from "../assets/img/bg.png";

extend({ TextGeometry });

function BackgroundPlane({ imgUrl }) {
  const texture = useLoader(TextureLoader, imgUrl);
  const meshRef = useRef();
  const { camera, size } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      const distance = Math.abs(camera.position.z - -10);
      const vFOV = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(vFOV / 2) * distance;
      const width = height * (size.width / size.height);

      meshRef.current.scale.set(width / 20, height / 20, 1);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        map={texture}
        roughness={1}
        metalness={0}
        emissive={0xffffff}
        emissiveMap={texture}
        emissiveIntensity={1}
      />
    </mesh>
  );
}

function ParallaxText({ font, mouseRef }) {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current && mouseRef.current) {
      meshRef.current.position.x = -5.5 + mouseRef.current.x * 0.15;
      meshRef.current.position.y = 0 + mouseRef.current.y * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[-5.5, 0, -1]}>
      <textGeometry
        args={["Chloé Pelerin", { font, size: 1, depth: 0, curveSegments: 90 }]}
      />
      <meshPhysicalMaterial attach="material" color={"white"} />
    </mesh>
  );
}

function RotatingBox({ position, materialProps, rotateY, rotateX, mouseRef }) {
  const meshRef = useRef();
  const initialPosition = useRef(position);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotateY;
      meshRef.current.rotation.x += rotateX;

      if (mouseRef && mouseRef.current) {
        meshRef.current.position.x =
          initialPosition.current[0] - mouseRef.current.x * 0.04;
        meshRef.current.position.y =
          initialPosition.current[1] - mouseRef.current.y * 0.04;
      }
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[0.5, 0.5, 0.5, 8, 0.15]}
      position={position}
    >
      <MeshTransmissionMaterial attach="material" {...materialProps} />
    </RoundedBox>
  );
}

function Landing() {
  const font = new FontLoader().parse(TanPearl);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [, setTrigger] = useState(0);

  const handleMouseMove = useCallback((e) => {
    const offsetX = (e.clientX / window.innerWidth - 0.5) * 2;
    const offsetY = (e.clientY / window.innerHeight - 0.5) * 2;
    mouseRef.current = { x: offsetX, y: offsetY };
  }, []);

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1.02,
    ior: 1.2,
    chromaticAberration: 0.05,
    backside: false,
  };

  // const randomCubePosition = () => {
  //   const x = Math.random() * 10 - 5;
  //   const y = Math.random() * 5;
  //   const z = Math.random() * 2 - 2;
  //   console.log(x, y, z);
  //   return [x, y, z];
  // };

  return (
    <div id="home-section" className="landing" onMouseMove={handleMouseMove}>
      <div className="arrow-scroll">
        <p className="scroll-text">Scroll to continue</p>
        <img src={arrow} alt="arrow" />
      </div>
      <Canvas id="canvas">
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[0, 2, 3]} />

        <Environment files={violet_bg} background />
        <BackgroundPlane imgUrl={bg} />
        <ParallaxText font={font} mouseRef={mouseRef} />

        <RotatingBox
          position={[1, 1, 1]}
          materialProps={materialProps}
          rotateY={-0.002}
          rotateX={-0.002}
          mouseRef={mouseRef}
        />
        <RotatingBox
          position={[3, 0, 2]}
          materialProps={materialProps}
          rotateY={-0.002}
          rotateX={-0.002}
          mouseRef={mouseRef}
        />
        <RotatingBox
          position={[-1.5, 0, 3]}
          materialProps={materialProps}
          rotateY={-0.002}
          rotateX={-0.002}
          mouseRef={mouseRef}
        />
        <RotatingBox
          position={[-0.8, 0.6, 1]}
          materialProps={materialProps}
          rotateY={-0.002}
          rotateX={-0.002}
          mouseRef={mouseRef}
        />
        <RotatingBox
          position={[0.2, 0, 3]}
          materialProps={materialProps}
          rotateY={-0.002}
          rotateX={-0.002}
          mouseRef={mouseRef}
        />
        <RotatingBox
          position={[0.8, -0.5, 3]}
          materialProps={materialProps}
          rotateY={-0.002}
          rotateX={-0.002}
          mouseRef={mouseRef}
        />
      </Canvas>
    </div>
  );
}

export default Landing;
