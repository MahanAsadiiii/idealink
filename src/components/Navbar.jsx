import React from 'react'
import { Logo } from '../utilities'
import Section from './Section'

const Navbar = () => {
  return (
    <Section>
      <div className="w-full mt-4 flex justify-between">
        <img src={Logo} alt="/" className='scale-75 md:scale-100' />
        <div className="">
          <a href="/" className='border border-[#ae351a] py-1 px-2 md:px-4 md:py-2 rounded font-medium text-xs md:text-base text-[#ae351a] mr-2'>Home</a>
          <a className='border border-[#1A9DAE] py-1 px-2 md:px-4 md:py-2 rounded font-medium text-xs md:text-base text-[#1A9DAE]'>Log in</a>
        </div>

      </div>
    </Section>
  )
}

export { Navbar }