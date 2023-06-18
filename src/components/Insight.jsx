import React from 'react'
import { InsightPic, Support, Conversation, Risks, Speed } from '../utilities'
import Section from './Section'


function Insight() {
    return (
        <Section>
            <div className='flex flex-col bg-white px-6 py-6 md:py-9 mb-12 rounded w-full'>
                <div className="flex flex-col items-center mb-5 md:mb-10">
                    <div className="flex justify-center scale-75 md:scale-100">
                        <img src={InsightPic} alt="/" className='' />
                    </div>
                    <h1 className='text-center text-xl md:text-3xl font-bold text-black'>Insights For Selling To Mohammad</h1>
                </div>

                <div className="flex flex-col items-center w-full">
                    <div className="flex justify-center bg-[#EAF0FF] border-x-4 border-[#C1D0F0] mb-4">
                        <h3 className='text-base md:text-2xl font-bold py-2 px-3 text-[#113D94]'>While Negotiating and Closing</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
                        <div className="bg-[#FCFCFF] border-b-2 border-[#C1D0F0] px-4 md:w-1/2">
                            <div className="flex items-center my-3">
                                <img src={Support} alt="" className='mr-2' />
                                <h4 className='font-medium md:font-semibold text-sm md:text-lg'>The Secret To Closing fast with Mohammad Is</h4>
                            </div>
                            <p className='text-xs md:text-sm font-light md:font-normal md:ml-10 mb-5'>Relationships and rapport matter to them, but so does the value of the product.</p>
                        </div>
                        <div className="bg-[#FCFCFF] border-b-2 border-[#C1D0F0] px-4 md:w-1/2">
                            <div className="flex items-center my-3">
                                <img src={Conversation} alt="" className='mr-2' />
                                <h4 className='font-medium md:font-semibold text-sm md:text-lg'>Will You ever get a clear Answer?</h4>
                            </div>
                            <p className='text-xs md:text-sm font-light md:font-normal md:ml-10 mb-5'>Relationships and rapport matter to them, but so does the value of the product.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center mt-7 md:mt-12 md:md:mb-16">
                    <div className="flex justify-center bg-[#E7FAEF] border-x-4 border-[#BCF0D2] mb-4">
                        <h3 className='text-base md:text-2xl font-bold py-2 px-20 md:px-28 text-[#08853A]'>Deal Planning</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
                        <div className="bg-[#FCFCFF] border-b-2 border-[#BCF0D2] px-4 md:w-1/2">
                            <div className="flex items-center my-3">
                                <img src={Speed} alt="" className='mr-2' />
                                <h4 className='font-medium md:font-semibold text-sm md:text-lg'>How Fast/Slow Mohammad will move?</h4>
                            </div>
                            <p className='text-xs md:text-sm font-light md:font-normal md:ml-10 mb-5'>They are not the ones to make fast decisions, even while they stay committed.</p>
                        </div>
                        <div className="bg-[#FCFCFF] border-b-2 border-[#BCF0D2] px-4 md:w-1/2">
                            <div className="flex items-center my-3">
                                <img src={Risks} alt="" className='mr-2' />
                                <h4 className='font-medium md:font-semibold text-sm md:text-lg'>Can Mohammad Take Some Risk Or Not?</h4>
                            </div>
                            <p className='text-xs md:text-sm font-light md:font-normal md:ml-10 mb-5'>If it seems really necessary, they can take small risks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export { Insight }