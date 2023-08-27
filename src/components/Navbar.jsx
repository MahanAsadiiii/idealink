import React from 'react'
import { Logo } from '../utilities/Index'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="w-full md:py-2 flex justify-between items-center md:px-14 bg-white border-b-2 border-gray-500">
        <Link rel="stylesheet" to="/" className='scale-75 md:scale-100 left-0  m-0'>
          <img src={Logo} alt="logo-sign" width={120} height={100} className='left-0 m-1' />
        </Link>
        <div className="mr-3">
          <a href="/" className='border border-[#ae351a] py-1 px-2 md:px-4 md:py-2 rounded font-medium text-xs md:text-base text-[#ae351a] mr-2 hover:bg-[#ae351a] hover:text-white'>Home</a>
          <a href="/reports" className='border border-[#1A9DAE] py-1 px-2 md:px-4 md:py-2 rounded font-medium text-xs md:text-base text-[#1A9DAE] hover:bg-[#1A9DAE] hover:text-white'>Log in</a>
        </div>
      </div>
    </>
  )
}

export { Navbar }