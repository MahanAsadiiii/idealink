import React from 'react'
import { ImageProfile } from '../utilities'
import { FaLinkedin } from "react-icons/fa"

const Profile = () => {
    return (
        <div className='flex mx-auto w-[60vw] bg-white rounded-lg py-[32px] mb-[24px] justify-evenly'>
            <img src={ImageProfile} alt="/" className='w-[150px] h-[150px] mx-5' />
            <div className="flex flex-col ml-4 ">
                <h2 className='text-[40px] font-bold mb-2'>Mohammad Eskini</h2>
                <div className="flex">
                    <FaLinkedin color='#0077B5' size={25} className='mr-3 my-auto' />
                    <a href="/" className='underline text-base font-medium'>https://www.linkedin.com/in/mohammad-eskini-7282381a4</a>
                </div>
                <div className="flex mt-6 mb-[30px] ">
                    <div className="bg-[#D9E6FF]  px-3.5 py-2 rounded text-[#003497] text-sm font-semibold">Consensus Focused</div>
                    <div className="bg-[#E3DBFF] mx-4 px-3.5 py-2 rounded text-[#6147BA] text-sm font-semibold">Non-Confrontational</div>
                    <div className="bg-[#DBFFE6] px-3.5 py-2 rounded text-[#076F27] text-sm font-semibold">Amiable & Agreeable</div>
                </div>
                <div className="">
                    <ul className='ml-7 mb-[41px]'>
                        <li className='list-disc text-base font-medium mb-3'>They are more about building relationships than just cutting deals.</li>
                        <li className='list-disc text-base font-medium mb-3'>They agree with others often, so exercise caution when relying on their word.</li>
                        <li className='list-disc text-base font-medium mb-3'>Unlike D or C types, they are convinced more by stories and testimonials.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Profile }