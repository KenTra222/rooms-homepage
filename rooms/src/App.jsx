import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {
  

  return (
    
    <div className="w-screen h-screen grid grid-cols-7 grid-rows-3">

      <div className=" row-span-2 col-span-4 px-6 py-8">
        <nav className='flex w-full mx-auto my-0 items-end relative'>
          <p className='text-slate-100 ml-8 font-semibold text-xl'>room</p>
          <ul className='text-slate-200 flex justify-evenly w-1/2 k'>
            <li className='hover:underline hover:underline-offset-8'>home</li>
            <li className='hover:underline hover:underline-offset-8'>shop</li>
            <li className='hover:underline hover:underline-offset-8'>about</li>
            <li className='hover:underline hover:underline-offset-8'> contact</li>
          </ul>
           
        </nav>
        
      </div>

      <div className="bg-green-600 col-span-3 row-span-2">
        <h2 className='text-2xl'>discover innovative ways to decorate</h2>
        <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
        <a href='#' className='uppercase'>shop now</a>
        <div>
          <button>left</button>
          <button>right</button>
        </div>
      </div>
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
