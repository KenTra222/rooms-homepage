import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="w-full h-screen grid grid-cols-5 grid-rows-2">
      <div className="bg-slate-800 col-span-3">display</div>
      <div className="bg-green-600 col-span-2">info and call to action </div>
      <div className=" bg-black col-span-1">picture</div>
      <div className="flex flex-col justify-center text-left col-span-3 px-8">
        <h3 className="font-medium mb-6">About Our Furniture</h3>
        <p>our multifunctional collections blends design to suite your individual taste. Make each unique or pick an cohesive theme that best express your interest and what inspires you. Find furniture your need from traditional and contemporary styles or anything in between. product specialist are available to help you create your dream space.</p>
      </div>
      <div className=" bg-black col-span-1">picture</div>
    </div>
    
  )
}

export default App
