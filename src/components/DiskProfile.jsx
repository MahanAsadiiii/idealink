import React from 'react'
import { Diagram1 } from '../utilities'
import Section from './Section'

const DiskProfile = () => {
    return (
        <Section>
        <div className='mx-auto w-full bg-white pl-[29px] rounded-lg mb-12 pb-[136px] pr-4'>
            <div className="pt-[56px] pl-7">
                <div className="flex ">
                    <h1 className='text-[32px] font-bold font-[inter]'>Disk Profile:</h1>
                    <h2 className='text-[#1A3EBA] text-[32px] font-bold ml-[10px] font-[Inter]'>I</h2>
                </div>
                
            </div>
            <div className="flex justify-between gap-12">
                <div className="basis-1/2 mt-6">
                    <h5 className='font-medium text-[22px] mb-[79px] font-[Inter] pl-7'>Medium Influence</h5>
                    <img src={Diagram1} alt="/" className='mt-24' />
                </div>
                <div className="basis-1/2 flex flex-col justify-center"> 
                    <div className="flex mb-[6px] ml-6">
                        <h1 className='bg-[#F2FFEE] px-[20px] py-[10px] mr-4 text-2xl font-extrabold font-[Inter] text-[#87DF68] rounded-md'>I</h1>
                        <h2 className='text-[22px] font-semibold font-[Inter] my-auto'>Influence</h2>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div className="h-[152px] w-1 bg-[#8ADF6C]"></div>
                        </div>
                        <p className='text-lg font-normal font-[Inter] my-auto basis-[90%]'>A person in this DiSC quadrant places emphasis on influencing or persuading others. They tend to be enthusiastic, optimistic, open, trusting, and energetic.</p>
                    </div>
                </div>
            </div>
        </div>
        </Section>
    )
}

export { DiskProfile }