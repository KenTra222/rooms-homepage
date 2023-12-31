import React from 'react'
import{  useFBX, useTexture} from '@react-three/drei'

const Vase = () => {

    const vase = useFBX('models/Vase_23.FBX')
    
    
  return (
    
              <primitive  scale={0.0205} rotation={[Math.PI * .095, Math.PI * .075, 0]} position={[0,2.07,0.75]} object={vase}/>
         
    


  )
}

export default Vase