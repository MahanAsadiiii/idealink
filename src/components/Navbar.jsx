import React from 'react'
import { Logo } from '../utilities'

const Navbar = () => {
  return (
    <div className='w-[70vw] mx-auto pt-[25px]'>
        <div className='flex justify-between'>
            <img src={Logo} alt="/" className='w-[130px] h-[35px]'/>
            <button className='border border-[#1A9DAE] px-4 py-2 rounded font-medium text-base text-[#1A9DAE]'>Log in</button>
        </div>
    </div>
  )
}

export {Navbar}