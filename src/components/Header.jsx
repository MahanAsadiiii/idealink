import React from 'react'
import InputUrl from './InputUrl'
import { BackgroundImage } from '../utilities'
import Section from './Section'

const Header = () => {
  return (
    <div>
      <img src={BackgroundImage} alt="" className='absolute top-0 left-0 z-[-999] mt-4' />
      <Section>
        <div className='flex flex-col justify-center relative'>
          <div className='flex flex-col mt-[233px] mx-auto'>
            <h2 className='text-black text-[40px] font-bold'>Sell Smarter <span className='text-[24px] '>with</span> <span className='text-[#1A9DAE] text-[40px]'>AI-Personality Analysis</span></h2>
            <p className='text-center text-[16px] font-medium mt-[1rem]'>Don’t judge your prospects at the first glance</p>
            <p className='text-center text-[16px] font-medium'>Leverage our AI Model to get a complete picture of them</p>
          </div>
          <InputUrl className='mt-[32px] w-[70vw]' />
        </div>
      </Section>
    </div>

  )
}

export { Header }