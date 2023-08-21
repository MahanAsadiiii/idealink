import React from 'react'
import { Object } from '../utilities/Index'
import {Section} from "../components/index"


const Information = () => {
    return (
        <Section>
            <div className='flex flex-col w-full justify-between mt-14 lg:mt-28'>
                <div className="flex flex-col">
                    <h1 className='font-bold text-xl lg:text-4xl text-[#0C1743] mb-3 lg:mb-6 text-center'>Know your prospects even before your meetings!</h1>
                    <p className='font-medium text-[10px] lg:text-base text-[#787771] px-7 lg:px-0 text-center'>AI-Personality Analysis gives you a personality-based guide to understanding your prospects’</p>
                </div>
                <div className="flex flex-col lg:flex-row text-center mt-3 lg:mt-10 place-content-around ">
                    <div className="flex justify-center lg:basis-1/2 lg:p-10">
                        <img src={Object} alt="/" className='scale-75 lg:scale-100' />
                    </div>
                    <div className="text-left basis-1/2 flex flex-col justify-evenly px-5 lg:px-12">
                        <div className="flex my-2 lg:my-0">
                            <div><div className="flex justify-center h-full w-1.5  bg-[#1A9DAE] mr-3 lg:mr-6 rounded-xl"></div> </div>
                            <h4 className='flex justify-center text-xs lg:text-base  text-[#0C1744] font-light lg:font-medium mb-0 '>Discover what drives your prospects and create targeted campaigns</h4>
                        </div>
                        <div className="flex my-2 lg:my-0">
                            <div><div className="flex justify-center h-full w-1.5  bg-[#BEC7E6] mr-3 lg:mr-6 rounded-xl"></div> </div>
                            <h4 className='flex justify-center text-xs lg:text-base  text-[#0C1744] font-light lg:font-medium mb-0'>Unlock the secrets of your prospects and tailor your approach accordingly </h4>
                        </div>
                        <div className="flex my-2 lg:my-0">
                            <div><div className="flex justify-center h-full w-1.5  bg-[#1A9DAE] mr-3 lg:mr-6 rounded-xl"></div> </div>
                            <h4 className='flex justify-center text-xs lg:text-base  text-[#0C1744] font-light lg:font-medium mb-0'>Gain insight into your prospects’ preferences and create more engaging content</h4>
                        </div>
                        <div className="flex my-2 lg:my-0">
                            <div><div className="flex justify-center h-full w-1.5  bg-[#BEC7E6] mr-3 lg:mr-6 rounded-xl"></div> </div>
                            <h4 className='flex justify-center text-xs lg:text-base  text-[#0C1744] font-light lg:font-medium mb-0 '>Stop shooting in the dark and start understanding their communication styles</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export { Information }