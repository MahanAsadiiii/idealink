import React from 'react'
import { ImageProfile, Arrow ,ReverseArrow  } from '../utilities/Index'
import { FaLinkedin } from "react-icons/fa"
import Section from './Section'

const Profile = () => {
    return (
        <Section>
        <div className='flex px-4 flex-col lg:flex-row justify-center bg-white rounded-lg lg:py-8 mb-6 lg:justify-evenly w-full relative'>
            <img src={Arrow} alt="Arrow" className='absolute bottom-0 left-0 scale-100'/>
            <img src={ReverseArrow } alt="Reverse-arrow" className='absolute top-0 right-0 scale-100 lg:'/>
            <div className="py-5">
            <img src={ImageProfile} alt="Profile-pic" className='h-24 lg:h-40 lg:scale-100' />
            </div>
            <div className="flex flex-col lg:px-0 basis-4/6">
                <h2 className='text-2xl lg:text-4xl font-bold mb-2 lg:mb-4'>Mohammad Eskini</h2>
                <div className="flex">
                    <FaLinkedin color='#0077B5' size={25} className='mr-3' />
                    <a href="/" className='underline text-xs lg:text-base font-medium'>https://www.linkedin.com/in/mohammad-eskini-7282381a4</a>
                </div>
                <div className="flex flex-col lg:flex-row my-7">
                    <div className="bg-[#D9E6FF] flex justify-center px-3.5 py-2 rounded text-[#003497] text-xs lg:text-sm font-semibold mb-4 lg:mb-0">Consensus Focused</div>
                    <div className="bg-[#E3DBFF] flex justify-center lg:mx-4 px-3.5 py-2 rounded text-[#6147BA] text-xs lg:text-sm font-semibold mb-4 lg:mb-0">Non-Confrontational</div>
                    <div className="bg-[#DBFFE6] flex justify-center px-3.5 py-2 rounded text-[#076F27] text-xs lg:text-sm font-semibold lg:mb-0">Amiable & Agreeable</div>
                </div>
                <div className="">
                    <ul className='ml-6 mb-[41px]'>
                        <li className='list-disc text-xs lg:text-base font-medium mb-3'>They are more about building relationships than just cutting deals.</li>
                        <li className='list-disc text-xs lg:text-base font-medium mb-3'>They agree with others often, so exercise caution when relying on their word.</li>
                        <li className='list-disc text-xs lg:text-base font-medium mb-3'>Unlike D or C types, they are convinced more by stories and testimonials.</li>
                    </ul>
                </div>
            </div>
        </div>
        </Section>
    )
}

export { Profile }