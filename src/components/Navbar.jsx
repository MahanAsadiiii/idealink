import React from 'react'
import { Logo } from '../utilities'
import Section from './Section'

const Navbar = () => {
  return (
    <Section>
      <div className="w-full mt-3 flex justify-between">
      <img src={Logo} alt="/" className='w-[152px] h-[39px]' />
      <button className='border border-[#1A9DAE] px-4 py-2 rounded font-medium text-base text-[#1A9DAE]'>Log in</button>
      </div>
    </Section>
  )
}

export { Navbar }