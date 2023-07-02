import React from 'react'
import InputUrl from './InputUrl'
import { BackgroundImage } from '../utilities/Index'
import Section from './Section'

const Header = () => {
  return (
    <div>
      <img src={BackgroundImage} alt="" className='hidden lg:block lg:absolute lg:top-0 lg:left-0 z-[-999] lg:mt-4' />
      <Section>
        <div className='flex w-full flex-col mt-12 lg:mt-56 justify-center relative'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-black text-xl lg:text-4xl font-bold flex flex-col lg:flex-row items-center justify-center'>Sell Smarter <span className='text-base mx-2 lg:mx-4 lg:text-2xl '>with</span> <span className='text-[#1A9DAE] lg:text-4xl'>AI-Personality Analysis</span></h2>
            <p className='text-center text-[10px] lg:text-base font-medium mt-[1rem]'>Don’t judge your prospects at the first glance</p>
            <p className='text-center text-[10px] lg:text-base font-medium'>Leverage our AI Model to get a complete picture of them</p>
          </div>
          <InputUrl className='mt-10 lg:mt-8' />
        </div>
      </Section>
    </div>

  )
}

export { Header }