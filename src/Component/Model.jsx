import { useGLTF } from 'drei'
import React from 'react'

export default function Cube() {
    const { nodes } = useGLTF('../assets/3d-model/cube.glb')
    return (
        <group>
            <mesh {...nodes.cube}>

            </mesh>
        </group>
    )
}
