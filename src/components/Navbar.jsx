import React from 'react'
import { Logo } from '../utilities'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="w-full mt-4 flex justify-between items-centern md:px-14">
        <Link rel="stylesheet" to="/home" className='scale-75 md:scale-100 left-0  m-0'>
          <img src={Logo} alt="logo" className='left-0 m-0' />
        </Link>
        <div className="mr-3">
          <a href="/" className='border border-[#ae351a] py-1 px-2 md:px-4 md:py-2 rounded font-medium text-xs md:text-base text-[#ae351a] mr-2'>Home</a>
          <a href="/reports" className='border border-[#1A9DAE] py-1 px-2 md:px-4 md:py-2 rounded font-medium text-xs md:text-base text-[#1A9DAE]'>Log in</a>
        </div>
      </div>
    </div>
  )
}

export { Navbar }