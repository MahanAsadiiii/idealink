import React from 'react'
import InputUrl from './InputUrl'
import { BackgroundImage } from '../utilities'
import Section from './Section'

const Header = () => {
  return (
    <div>
      <img src={BackgroundImage} alt="" className='hidden md:block md:absolute md:top-0 md:left-0 z-[-999] md:mt-4' />
      <Section>
        <div className='flex w-full flex-col mt-12 md:mt-56 justify-center relative'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-black text-xl md:text-4xl font-bold flex flex-col md:flex-row items-center justify-center'>Sell Smarter <span className='text-base mx-2 md:mx-4 md:text-2xl '>with</span> <span className='text-[#1A9DAE] md:text-4xl'>AI-Personality Analysis</span></h2>
            <p className='text-center text-[10px] md:text-base font-medium mt-[1rem]'>Don’t judge your prospects at the first glance</p>
            <p className='text-center text-[10px] md:text-base font-medium'>Leverage our AI Model to get a complete picture of them</p>
          </div>
          <InputUrl className='mt-10 md:mt-8' />
        </div>
      </Section>
    </div>

  )
}

export { Header }