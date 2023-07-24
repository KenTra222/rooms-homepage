import React from 'react'
import{  useFBX, useTexture} from '@react-three/drei'

const Vase = () => {

    const vase = useFBX('public/models/Vase_23.FBX')
    const vaseTexture = useTexture('/textures/Vase_23_color.jpg')
    
  return (
    
              <primitive  scale={0.0205} rotation={[Math.PI * .095, Math.PI * .075, 0]} position={[0,2.07,0.75]} object={vase}/>
         
    


  )
}

export default Vase