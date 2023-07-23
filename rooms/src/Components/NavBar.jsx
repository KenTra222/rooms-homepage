import '../App.css'

const NavBar = () => {
  return (
  <nav className='flex w-full  items-end  mt-9'>
    <p className='text-slate-100 ml-16 font-semibold text-xl'>room</p>
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