import React from 'react'
import { SolutionPic1, SolutionPic2, SolutionPic3 } from '../utilities/Images'
import {Section} from "../components/index"

const Card = () => {
    return (
        <Section>
            <div className='flex flex-col mt-14 mb-16 lg:mt-28 lg:mb-36 justify-center w-full'>
                <div className="flex mx-auto ">
                    <h1 className='font-bold text-xl lg:text-4xl text-[#0c1744]'>Our Solution is</h1>
                </div>
                <div className=" lg:mt-12 flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col justify-center items-center mt-7 lg:mt-12">
                        <img src={SolutionPic1} alt="/" className='scale-75 lg:scale-100' />
                        <h3 className='font-semibold lg:text-lg text-[#0c1744] text-center lg:mt-6'>Personalized</h3>
                        <p className='text-center px-8 mt-3 font-extralight lg:font-normal text-xs lg:text-base'>Say goodbye to generic solutions and hello to a truly personalized experience
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-7 lg:mt-12">
                        <img src={SolutionPic2} alt="/" className='scale-75 lg:scale-100' />
                        <h3 className='font-semibold lg:text-lg text-[#0c1744] text-center lg:mt-6'>AI-Based</h3>
                        <p className='text-center px-8 mt-3 font-extralight lg:font-normal text-xs lg:text-base'>Our AI-Model gives you accurate analysis based on your prospects' LinkedIn profiles</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-7 lg:mt-12">
                        <img src={SolutionPic3} alt="/" className='scale-75 lg:scale-100' />
                        <h3 className='font-semibold lg:text-lg text-[#0c1744] text-center lg:mt-6'>Behavior-driven</h3>
                        <p className='text-center px-8 mt-3 font-extralight lg:font-normal text-xs lg:text-base'>Build more meaningful relationships and learn what really matters to your prospects</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export { Card }