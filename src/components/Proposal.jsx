import React from 'react'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import Section from './Section'

const Proposal = () => {
    return (
        <Section>
            <div className='flex w-full flex-col justify-between md:flex-row mb-8 gap-3'>
                
                <div className="bg-[#F5FFFC] px-6 py-8 rounded border-b-2 border-[#81E09D] md:w-1/2">
                    <div className="items-center flex mb-4">
                        <AiOutlineCheckCircle color='#4CAF4F' size={30} className='my-auto' />
                        <h2 className='md:text-2xl font-bold text-[#0C792B] pl-3.5'>What To Say</h2>
                    </div>
                    <div className="">
                        <ul className='list-disc ml-7'>
                            <li className='font-medium text-xs md:text-base text-[#0C792B] mb-3'>Refer to interesting customer testimonials and stress on great customer experience.</li>
                            <li className='font-medium text-xs md:text-base text-[#0C792B] mb-3'>Ask them how their day is going or exchange some other pleasantries.</li>
                            <li className='font-medium text-xs md:text-base text-[#0C792B] mb-3'>Give them the opportunity to lead the conversation where possible.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[#fef3f3] px-6 py-8 rounded border-b-2 border-[#EEA1A2] md:w-1/2">
                    <div className="items-center flex mb-4 ">
                        <AiOutlineCloseCircle color='#F44336' size={30} className='my-auto' />
                        <h2 className='md:text-2xl font-bold text-[#9B0C0C] pl-3.5'>What To Avoid</h2>
                    </div>
                    <div className="">
                        <ul className='list-disc ml-7'>
                            <li className='font-medium text-xs md:text-base text-[#9B0C0C] mb-3'>Don’t be too formal with them, they trust informality more</li>
                            <li className='font-medium text-xs md:text-base text-[#9B0C0C] mb-3'>Don’t be excessively objective, be like a storyteller with them.</li>
                            <li className='font-medium text-xs md:text-base text-[#9B0C0C] mb-3'>Avoid overloading them with too much information.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export { Proposal }