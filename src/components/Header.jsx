import React from 'react'
// import { BackgroundImage } from '../utilities'

const Header=() => {
  return (
    <div className='flex flex-col my-0 mx-auto w-[1032px]'>
        <div className='flex flex-col mt-[233px] w-[803px] mx-auto'>
            <h2 className='text-black text-[40px] font-bold'>Sell Smarter <span className='text-[24px] pb-[7px]'>with</span> <span className='text-[#1A9DAE] text-[40px]'>AI-Personality Analysis</span></h2>
            <p className='text-center text-[16px] font-medium mt-[1rem]'>Don’t judge your prospects at the first glance</p>
            <p className='text-center text-[16px] font-medium'>Leverage our AI Model to get a complete picture of them</p>
        </div>
        <div className='bg-[#ffffff] flex flex-col mt-9 px-8 py-6 rounded-lg'>
            <h5 className='bg-white font-normal text-base'>Enter LinkedIn Profile URL</h5>
            <div className='flex justify-between mt-2 bg-white'>
                <input type="email" placeholder='https://www.linkedin.com/in/profilename' className='border bg-white border-[#e7e7e7] w-[780px] px-[0.5rem] rounded text-normal text-sm ' />
                <button className='bg-[#1A9DAE] rounded text-white text-[16px] font-semibold px-8 py-3'>Analyze</button>
            </div>
        </div>
    </div>
  )
}

export {Header}