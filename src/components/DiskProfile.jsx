import React from 'react'
import { Diagram1 } from '../utilities/Index'
import Section from './Section'

const DiskProfile = () => {
    return (
        <Section>
            <div className='flex flex-col justify-center w-full bg-white px-7 py-10 rounded-lg mb-12 lg:pb-32'>
                <div className="pt-5 lg:pt-12 lg:px-6">
                    <div className="flex items-center">
                        <h1 className='text-xl lg:text-3xl font-bold font-[inter]'>Disk Profile:</h1>
                        <h2 className='text-[#1A3EBA] text-xl lg:text-3xl font-bold ml-2 font-[Inter]'>I</h2>
                    </div>

                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    <div className="basis-1/2 ">
                        <h5 className='font-medium text-sm lg:text-xl font-[Inter] lg:px-6 mt-6 lg:mb-20 mb-10'>Medium Influence</h5>
                        <div>
                            <img src={Diagram1} alt="/" className='' />
                        </div>
                    </div>
                    <div className="basis-1/2 flex flex-col justify-center">
                        <div className="flex items-center my-4 mx-6">
                            <h1 className='bg-[#F2FFEE] px-5 py-2 mr-4 text-base lg:text-2xl font-extrabold font-[Inter] text-[#87DF68] rounded-lg'>I</h1>
                            <h2 className='text-sm lg:text-xl font-semibold font-[Inter]'>Influence</h2>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="h-20 lg:h-40 w-1 bg-[#8ADF6C]"></div>
                            </div>
                            <p className='text-sm lg:text-lg font-normal font-[Inter] ml-6'>A person in this DiSC quadrant places emphasis on influencing or persuading others. They tend to be enthusiastic, optimistic, open, trusting, and energetic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export { DiskProfile }