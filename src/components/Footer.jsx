import React from 'react'
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa"
import Section from './Section'

const Footer = () => {
    return (
        <div className='w-full bg-[#333333]'>
            <div className='flex md:justify-center flex-col md:flex-row text-white py-11 px-8'>
                
                <div className="flex flex-col bg-[#f3f3f3] px-4 py-3 md:px-7 md:py-5 rounded-lg mb-8 md:mx-0 md:basis-1/4">
                    <form action="">
                        <div>
                            <div className="flex ">
                                <div className='h-5 w-0.5 bg-[#1A9DAE] mr-2 my-auto'></div>
                                <h3 className='font-bold text-[#0C1744] text-lg md:text-xl'>Contact us</h3>
                            </div>
                            <h6 className='text-[#333333] text-xs md:text-xs mt-2 mb-4'>Get the latest product updates and more.</h6>
                        </div>
                        <div className="flex flex-col">
                            <input type="text" placeholder='Enter your name' className='text-black mb-3 rounded py-2 px-1 text-xs' />
                            <input type="email" placeholder='Enter your email' className='text-black rounded py-2 px-1 mb-5 text-xs' />

                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-[#1A9DAE] px-3 py-1 md:py-2 md:px-4 rounded text-sm font-medium'>Subscribe</button>
                        </div>
                    </form>
                </div>

                <div className="flex flex-wrap justify-evenly md:basis-1/3 md:ml-3 md:mt-3">
                    <div className='basis-1/5 px-3'>
                        <div className="flex">
                            <div className="h-5 w-0.5 bg-[#1A9DAE] mr-2"></div>
                            <h6 className='text-sm font-bold'>Solutions</h6>
                        </div>
                        <ul>
                            <li className='py-2 text-xs'>
                                <a href="*">Al Nector</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">Al Memory</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">Al Harvest</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">Behavioral Profile</a>
                            </li>
                        </ul>
                    </div>
                    <div className='basis-1/5 px-3'>
                        <div className="flex">
                            <div className="h-5 w-0.5 bg-[#1A9DAE] mr-2"></div>
                            <h6 className='text-sm font-bold'>Company</h6>
                        </div>
                        <ul>
                            <li className='py-2 text-xs'>
                                <a href="*">About us</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">Careers</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">Case Studies</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className='basis-1/5 px-3 mt-7'>
                        <div className="flex">
                            <div className="h-5 w-0.5 bg-[#1A9DAE] mr-2"></div>
                            <h6 className='text-sm font-bold'>Packages</h6>
                        </div>
                        <ul>
                            <li className='py-2 text-xs'>
                                <a href="*">Overview</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">ROYAL JELLY</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">SPASAKA Growth</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">SPASAKA Growth Platform</a>
                            </li>
                        </ul>
                    </div>
                    <div className='basis-1/5 px-3 mt-7'>
                        <div className="flex">
                            <div className="h-5 w-0.5 bg-[#1A9DAE] mr-2"></div>
                            <h6 className='text-sm font-bold'>Resources</h6>
                        </div>
                        <ul>
                            <li className='py-2 text-xs'>
                                <a href="*">Founder Series</a>
                            </li>
                            <li className='py-2 text-xs'>
                                <a href="*">Articles</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" flex flex-col md:basis-1/5  mt-9 md:mt-8">
                    <div className="flex justify-evenly md:flex-col mb-7 md:mb-10 text-center">
                        <a href="*" className='text-[10px]'>+1 415 707 3470</a>
                        <a href="*" className='text-[10px]'>sales@ai-bees.io</a>
                        <a href="*" className='text-[10px]'>support@ai-bees.io</a>
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
        </div>
    )
}

export { Footer }