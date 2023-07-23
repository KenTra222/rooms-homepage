import { useState, useRef } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import{ ScrollControls, Scroll} from '@react-three/drei'
import NavBar from './Components/NavBar'
import {useAtom, atom} from 'jotai'



const infoTexts = [
  {
    heading: 'Discover innovative ways to decorate',
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    heading: 'We are available all across the globe',
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."

  },
  {
    heading: 'Manufactured with the best material',
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what cusomers want for their home and office."

  }
]


function App(props) {
  const cubeRef = useRef()
  const sphereRef = useRef()
  const torusRef = useRef()
console.log(cubeRef)

const [currentIndex, setCurrentIndex] = useState(0)
const [meshPosition, setMeshPosition] = useState([0,0,0])

const next = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1 ) % infoTexts.length)

  setMeshPosition((prevPosition) => [(prevPosition[0] + 10) % (10 * infoTexts.length), prevPosition[1], prevPosition[2]]);
}

const prev = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + infoTexts.length) % infoTexts.length)
  setMeshPosition((prevPosition) => [(prevPosition[0] - 10 + 10 * infoTexts.length) % (10 * infoTexts.length), prevPosition[1], prevPosition[2]]);
}

  return (
    
    <div className="w-screen h-screen grid grid-cols-7 grid-rows-3">
    {/* hero canvas */}
      <div className=" row-span-2 col-span-4 ">
          <section className='bg-gray-500 w-full h-full'>
           <Canvas flat>
            <ambientLight/>
            <ScrollControls horizontal>

            <group>
              <mesh ref={cubeRef} position={meshPosition}>
                <boxGeometry/>
                <meshStandardMaterial color='red'/>
              </mesh>

              <mesh ref={sphereRef} position={[meshPosition[0] - 10, meshPosition[1], meshPosition[2]]}>
                <sphereGeometry/>
                <meshStandardMaterial color='green'/>
              </mesh>

              <mesh ref={torusRef} position={[meshPosition[0] - 20, meshPosition[1], meshPosition[2]]}>
                <torusGeometry/>
                <meshStandardMaterial color='blue'/>
              </mesh>
            </group>

            <Scroll html>
            <NavBar/>
            </Scroll>
              </ScrollControls>
           </Canvas>
          </section>
        
      </div>
{/* info + call to action section  */}
      <div className=" col-span-3 row-span-2 flex justify-between  pt-12 pr-8 flex-col">
       
        <div className='w-8/12 mx-auto  flex flex-col justify-evenl'>
          <h2 className='text-3xl    font-bold '>{infoTexts[currentIndex].heading}</h2>
          <p className='text-sm my-4'> {infoTexts[currentIndex].text}</p>
          <a href='#' className='uppercase text-black hover:text-gray-700 flex items-center'>shop now <img className='ml-3 text-black hover:text-gray-700' src='/icon-arrow.svg'/></a>
        </div>

        <div className='relative bottom-0 left-0 flex'>
        {/* Use CSS and flexbox to center the SVG images for Prev and Next */}
        <button onClick={prev} className='bg-black text-white w-16 h-16 hover:bg-gray-800' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src='/icon-angle-left.svg' alt='prev' />
        </button>
        <button onClick={next} className='bg-black text-white w-16 h-16 hover:bg-gray-800' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src='/icon-angle-right.svg' alt="next" />
        </button>
      </div>
    </div>

{/* about section */}

      <div className=" col-span-2 ">
        <img className='h-full w-full' src='/image-about-dark.jpg'/>
      </div>
      <div className="flex flex-col justify-center text-left col-span-3 px-8">
        <h3 className="font-medium mb-4">About Our Furniture</h3>
        <p>our multifunctional collections blends design to suite your individual taste. Make each unique or pick an cohesive theme that best express your interest and what inspires you. Find furniture your need from traditional and contemporary styles or anything in between. product specialist are available to help you create your dream space.</p>
      </div>
      <div className=" col-span-2 p-0">
      <img className='h-full w-full' src='/image-about-light.jpg'/>
      </div>
    </div>
    
  )
}

export default App
