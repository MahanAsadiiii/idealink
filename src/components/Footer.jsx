import React from 'react'
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin  } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='flex w-full mx-auto bg-[#333333] text-white px-[150px] pb-[92px] pt-[45px] justify-evenly'>

            <div className="flex flex-col bg-[#f3f3f3] px-[29px] py-[20px] rounded-lg basis-1/4">
                <form action="">
                    <div>
                        <div className="flex ">
                            <div className='h-[18px] w-[2px] bg-[#1A9DAE] mr-[8px] my-auto'></div>
                            <h3 className='text-[20px] font-bold text-[#0C1744] text-xl'>Contact us</h3>
                        </div>
                        <h6 className='text-[#333333] text-xs mb-[16px]'>Get the latest product updates and more.</h6>
                    </div>
                    <div className="flex flex-col">
                        <input type="text" placeholder='Enter your name' className='text-black w-[313px] mb-[13px] rounded py-[8px] px-[5px] text-xs' />
                        <input type="email" placeholder='Enter your email' className='text-black w-[313px] rounded py-[8px] px-[5px] mb-[19px] text-xs' />

                    </div>
                    <div className='flex justify-end'>
                        <button className='bg-[#1A9DAE] px-[13px] py-[5px] rounded text-sm font-medium'>Subscribe</button>
                    </div>
                </form>
            </div>

            <div className="flex basis-1/3">
                <div className='basis-1/5 px-[30px]'>
                    <div className="flex">
                        <div className="h-[18px] w-[2px] bg-[#1A9DAE] mr-[8px] my-auto"></div>
                        <h6 className='text-sm font-bold'>Solutions</h6>
                    </div>
                    <ul>
                        <li className='py-2 text-xs'>Al Nector</li>
                        <li className='py-2 text-xs'>Al Memory</li>
                        <li className='py-2 text-xs'>Al Harvest</li>
                        <li className='py-2 text-xs'>Behavioral Profile</li>
                    </ul>
                </div>
                <div className='basis-1/5 px-[30px]'>
                    <div className="flex">
                        <div className="h-[18px] w-[2px] bg-[#1A9DAE] mr-[8px] my-auto"></div>
                        <h6 className='text-sm font-bold'>Company</h6>
                    </div>
                    <ul>
                        <li className='py-2 text-xs'>About us</li>
                        <li className='py-2 text-xs'>Careers</li>
                        <li className='py-2 text-xs'>Case Studies</li>
                        <li className='py-2 text-xs'>FAQ</li>
                    </ul>
                </div>
                <div className='basis-1/5 px-[30px]'>
                    <div className="flex">
                        <div className="h-[18px] w-[2px] bg-[#1A9DAE] mr-[8px] my-auto"></div>
                        <h6 className='text-sm font-bold'>Packages</h6>
                    </div>
                    <ul>
                        <li className='py-2 text-xs'>Overview</li>
                        <li className='py-2 text-xs'>ROYAL JELLY</li>
                        <li className='py-2 text-xs'>SPASAKA Growth</li>
                        <li className='py-2 text-xs'>SPASAKA Growth Platform</li>
                    </ul>
                </div>
                <div className='basis-1/5 px-[30px]'>
                    <div className="flex">
                        <div className="h-[18px] w-[2px] bg-[#1A9DAE] mr-[8px] my-auto"></div>
                        <h6 className='text-sm font-bold'>Resources</h6>
                    </div>
                    <ul>
                        <li className='py-2 text-xs'>Founder Series</li>
                        <li className='py-2 text-xs'>Articles</li>
                    </ul>
                </div>
            </div>

            <div className=" flex flex-col basis-[25%]">
                <div className="flex flex-col mb-10 text-center">
                    <a href="/" className='text-xs mb-[15px]'>+1 415 707 3470</a>
                    <a href="/" className='text-xs mb-[15px]'>sales@ai-bees.io</a>
                    <a href="/" className='text-xs'>support@ai-bees.io</a>
                </div>
                <div className="">
                    <div className='flex justify-evenly '>
                        <FaFacebook size={27} />
                        <FaLinkedin size={27} />
                        <FaTwitter size={27} />
                        <FaYoutube size={27} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer }