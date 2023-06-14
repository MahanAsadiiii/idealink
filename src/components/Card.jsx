import React from 'react'
import { SolutionPic1, SolutionPic2, SolutionPic3 } from '../utilities'
import Section from './Section'

const Card = () => {
    return (
        <Section>
            <div className='flex flex-col mt-20 mb-16 md:mt-28 md:mb-24 justify-center w-full'>
                <div className="flex mx-auto ">
                    <h1 className='font-bold text-lg md:text-4xl text-[#0c1744]'>Our Solution is</h1>
                </div>
                <div className="mt-3 md:mt-12 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-12">
                        <img src={SolutionPic1} alt="/" className='scale-75 md:scale-100' />
                        <h3 className='font-semibold md:text-lg text-[#0c1744] text-center md:mt-6'>Personalized</h3>
                        <p className='text-center px-8 mt-3 font-normal text-xs md:text-base'>Say goodbye to generic solutions and hello to a truly personalized experience
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-12">
                        <img src={SolutionPic2} alt="/" className='scale-75 md:scale-100' />
                        <h3 className='font-semibold md:text-lg text-[#0c1744] text-center md:mt-6'>AI-Based</h3>
                        <p className='text-center px-8 mt-3 font-normal text-xs md:text-base'>Our AI-Model gives you accurate analysis based on your prospects' LinkedIn profiles</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-12">
                        <img src={SolutionPic3} alt="/" className='scale-75 md:scale-100' />
                        <h3 className='font-semibold md:text-lg text-[#0c1744] text-center md:mt-6'>Behavior-driven</h3>
                        <p className='text-center px-8 mt-3 font-normal text-xs md:text-base'>Build more meaningful relationships and learn what really matters to your prospects</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export { Card }