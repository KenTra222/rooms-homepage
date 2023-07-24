import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function IndustrialDesk(props) {
    const group = useRef()
  const { nodes, materials } = useGLTF('models/Industrial.glb')
  return (
    <group ref={group} {...props} dispose={null}   scale={props.customScale} rotation={props.customRotation}>
      <mesh geometry={nodes.Korpus.geometry} material={materials.Wood}>
        <mesh geometry={nodes.Cube014.geometry} material={materials['Black Metal']} />
        <mesh geometry={nodes.Cube016.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Szuflada_1.geometry} material={materials['Black Wood']} />
        <mesh geometry={nodes.Szuflada_2.geometry} material={materials['Black Wood']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('models/Industrial.glb')
