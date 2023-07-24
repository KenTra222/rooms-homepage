import React from 'react'
import{  useFBX, useTexture} from '@react-three/drei'


const Pillows = () => {

    
    const pillow0 = useFBX('public/models/pillow0.fbx')
    const pillow1 = useFBX('public/models/Pillow1.fbx')

  return (
    <>
            <primitive scale={0.005} object={pillow0} position={[3,1.85,-0.25]} rotation={[Math.PI * -.65, Math.PI * .25,  Math.PI * -0.25]}/>
            <primitive scale={0.005} object={pillow1} position={[-.25,.75,.25]} rotation={[0,  Math.PI * .25,  0]} />
               
           
            

    </>
    
  )
}

export default Pillows