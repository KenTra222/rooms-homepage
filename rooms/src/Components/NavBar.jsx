import '../App.css'

const NavBar = () => {
  return (
  <nav className='flex w-full  items-center  mt-10'>
    <img className='ml-16' src='/logo.svg'/>
    <ul className='text-white flex justify-evenly mx-8'>
      <li className='mx-1 hover:underline hover:underline-offset-8'>home</li>
      <li className='mx-1 hover:underline hover:underline-offset-8'>shop</li>
      <li className='mx-1 hover:underline hover:underline-offset-8'>about</li>
      <li className='mx-1 hover:underline hover:underline-offset-8'> contact</li>
    </ul>
  </nav>
  )
}

export default NavBar