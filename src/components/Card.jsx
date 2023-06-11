import React from 'react'
import { SolutionPic1, SolutionPic2, SolutionPic3 } from '../utilities'
import Section from './Section'

const Card = () => {
    return (
        <Section>
            <div className='flex flex-col mt-[106px] mb-[97px] justify-center w-full'>
                <div className="flex mx-auto ">
                    <h1 className='font-bold text-[32px] leadeing-[22px] text-[#0c1744]'>Our Solution is</h1>
                </div>
                <div className="mt-[50px] flex justify-between">
                    <div className="">
                        <img src={SolutionPic1} alt="/" className='mx-auto ' />
                        <h3 className='font-semibold text-[18px] text-[#0c1744] text-center mt-[25px]'>Personalized</h3>
                        <p className='text-center  w-[269px] mt-[11px] font-normal text-[16px] leading-[22px]'>Say goodbye to generic solutions and hello to a truly personalized experience
                        </p>
                    </div>
                    <div className="">
                        <img src={SolutionPic2} alt="/" className='mx-auto' />
                        <h3 className='font-semibold text-[18px] text-[#0c1744] text-center mt-[25px]'>AI-Based</h3>
                        <p className='text-center w-[269px] mt-[11px] font-normal text-[16px] leading-[22px]'>Our AI-Model gives you accurate analysis based on your prospects' LinkedIn profiles</p>
                    </div>
                    <div className="">
                        <img src={SolutionPic3} alt="/" className='mx-auto' />
                        <h3 className='font-semibold text-[18px] text-[#0c1744] text-center mt-[25px]'>Behavior-driven</h3>
                        <p className='text-center w-[269px] mt-[11px] font-normal text-[16px] leading-[22px]'>Build more meaningful relationships and learn what really matters to your prospects</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export { Card }