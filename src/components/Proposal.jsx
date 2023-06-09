import React from 'react'

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"

const Proposal = () => {
    return (
        <div className='flex justify-between w-[60vw] mx-auto mb-8'>

            <div className="bg-[#F5FFFC] px-6 py-8 basis-[48%] rounded border-b-2 border-[#81E09D]">
                <div className="flex mb-[16px]">
                    <AiOutlineCheckCircle color='#4CAF4F' size={31} className='my-auto'/>
                    <h2 className='text-2xl font-bold text-[#0C792B] pl-3.5'>What To Say</h2>
                </div>
                <div className="">
                    <ul className='list-disc ml-7'>
                        <li className='font-medium text-base text-[#0C792B] mb-3'>Refer to interesting customer testimonials and stress on great customer experience.</li>
                        <li className='font-medium text-base text-[#0C792B] mb-3'>Ask them how their day is going or exchange some other pleasantries.</li>
                        <li className='font-medium text-base text-[#0C792B] mb-3'>Give them the opportunity to lead the conversation where possible.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-[#fef3f3] px-6 py-8 basis-[48%] rounded border-b-2 border-[#EEA1A2]">
                <div className="flex mb-[16px] ">
                    <AiOutlineCloseCircle color='#F44336' size={31} className='my-auto'/>
                    <h2 className='text-2xl font-bold text-[#9B0C0C] pl-3.5'>What To Avoid</h2>
                </div>
                <div className="">
                    <ul className='list-disc ml-7'>
                        <li className='font-medium text-base text-[#9B0C0C] mb-3'>Don’t be too formal with them, they trust informality more</li>
                        <li className='font-medium text-base text-[#9B0C0C] mb-3'>Don’t be excessively objective, be like a storyteller with them.</li>
                        <li className='font-medium text-base text-[#9B0C0C] mb-3'>Avoid overloading them with too much information.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Proposal }