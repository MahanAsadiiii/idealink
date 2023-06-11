import React from 'react'
import { Object } from '../utilities'
import Section from './Section'


const Information = () => {
    return (
        <Section>
        <div className='flex flex-col w-full justify-between mt-28'>
            <div className="flex flex-col">
                <h1 className='font-bold text-[32px] text-[#0C1743] mb-[19px] text-center leading-[30px]'>Know your prospects even before your meetings!</h1>
                <p className='font-medium text-base text-[#787771] leading-[30px] text-center'>AI-Personality Analysis gives you a personality-based guide to understanding your prospects’</p>
            </div>
            <div className="flex flex-row text-center mt-[40px] place-content-around ">
                <div className="basis-1/2 p-10">
                    <img src={Object} alt="/" />
                </div>
                <div className="text-left basis-1/2 flex flex-col justify-center p-10">
                    <div className="flex">
                        <div className="h-[33px] w-[4px] mt-2 bg-[#1A9DAE] mr-[24px] rounded-xl "></div>
                        <h4 className='text-[15px] text-[#0C1744] font-medium leading-[22px] pb-[24px] '>Discover what drives your prospects and create targeted campaigns</h4>
                        </div>
                    <div className="flex">
                        <div className="h-[33px] w-[4px] mt-2 bg-[#BEC7E6] mr-[24px] rounded-xl "></div>
                        <h4 className='text-[15px] text-[#0C1744] font-medium leading-[22px] pb-[24px]'>Unlock the secrets of your prospects and tailor your approach accordingly </h4>
                        </div>
                    <div className="flex">
                        <div className="h-[33px] w-[4px] mt-2 bg-[#1A9DAE] mr-[24px] rounded-xl "></div>
                        <h4 className='text-[15px] text-[#0C1744] font-medium leading-[22px] pb-[24px]'>Gain insight into your prospects’ preferences and create more engaging content</h4>
                        </div>
                    <div className="flex">
                        <div className="h-[33px] w-[4px] mt-2 bg-[#BEC7E6] mr-[24px] rounded-xl "></div>
                        <h4 className='text-[15px] text-[#0C1744] font-medium leading-[22px] '>Stop shooting in the dark and start understanding their communication styles</h4>
                        </div>
                </div>
            </div>
        </div>
        </Section>
    )
}

export { Information }