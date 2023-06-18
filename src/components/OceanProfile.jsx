import React from 'react'
import { Diagram2 } from '../utilities'
import Section from './Section'

const OceanProfile = () => {

    return (
        <Section>
        <div className='flex flex-col justify-center w-full bg-white px-7 py-4 rounded-lg mb-12 md:pb-32 '>
            <div className="pt-5 md:pt-12 md:px-6">
                <div className="flex items-center">
                    <h1 className='text-xl md:text-3xl font-bold font-[inter]'>Ocean Profile:</h1>
                    <h2 className='text-xl md:text-3xl font-bold ml-2 font-[Inter] text-[#1A3EBA]'>O, N, E</h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-12">
                <div className="basis-1/2">
                    <h3 className='font-medium text-sm md:text-xl font-[Inter] md:px-6 mt-6 md:mb-20 mb-10'>Open, Somewhat Balanced, Extroverted</h3>
                    <img src={Diagram2} alt="/" className=''/>
                </div>
                <div className="basis-1/2 flex flex-col justify-center">
                    <div className="">
                        <div className="flex items-center my-4 mx-6">
                            <h1 className='bg-[#FCF5FF] px-5 py-2 mr-4 text-base md:text-2xl font-extrabold font-[Inter] text-[#A96AC0] rounded-md'>O</h1>
                            <h2 className='text-sm md:text-xl font-semibold font-[Inter]'>OPENNESS</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="w-1 bg-[#A96AC0] h-20 md:h-40"></div>
                            </div>
                            <p className='text-sm md:text-lg font-normal font-[Inter] ml-6'>Sometimes called intellect or imagination, this represents the willingness to try new things and think outside the box. Traits include insightfulness, originality and curiosity.</p>
                        </div>
                    </div>
                    <div className="mt-[28px]">
                        <div className="flex items-center my-4 mx-6">
                            <h1 className='bg-[#FFEBEB] px-5 py-2 mr-4 text-base md:text-2xl font-extrabold font-[Inter] text-[#DF6868] rounded-md'>E</h1>
                            <h2 className='text-sm md:text-xl font-semibold font-[Inter]'>EXTROVERSION</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="bg-[#DF6C6C] h-20 md:h-40 w-1"></div>
                            </div>
                            <p className='text-sm md:text-lg font-normal font-[Inter] ml-6'>A state where an individual draws energy from others and seeks social connections or interaction, as opposed to being alone (introversion). Traits include being outgoing, energetic and confident.</p>
                        </div>
                    </div>
                    <div className="mt-[28px]">
                        <div className="flex items-center my-4 mx-6">
                            <h1 className='bg-[#E9F9FC] px-5 py-2 mr-4 text-base md:text-2xl font-extrabold font-[Inter] text-[#39B3C1] rounded-md'>N</h1>
                            <h2 className='text-sm md:text-xl font-semibold font-[Inter]'>NEUROTICISM</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className='h-20 md:h-40 bg-[#39B3C1] w-1'></div>
                            </div>
                            <p className='text-sm md:text-lg font-normal font-[Inter] ml-6'>A tendency towards negative personality traits, emotional instability and self-destructive thinking. Traits include pessimism, anxiety, insecurity and fearfulness.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </Section>
    )
}

export { OceanProfile }