import '../App.css'

const NavBar = () => {
  return (
  <nav className='flex w-screen  items-center mx-auto  mt-10  '>
    <img className='ml-16' src='/logo.svg'/>
    <ul className='text-white lg:flex justify-evenly mx-8 hidden'>
      <li className='mx-1 hover:underline hover:underline-offset-8'>home</li>
      <li className='mx-1 hover:underline hover:underline-offset-8'>shop</li>
      <li className='mx-1 hover:underline hover:underline-offset-8'>about</li>
      <li className='mx-1 hover:underline hover:underline-offset-8'> contact</li>
    </ul>
    <button>
    <img className=' md:hidden relative ' src='icon-hamburger.svg'/>
    </button>
  </nav>
  )
}

export default NavBar