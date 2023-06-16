import React from 'react'

const IputUrl = (props) => {
    return (
            <div className={`bg-[#ffffff] flex flex-col px-4 py-3 md:px-8 md:py-6 rounded-lg md:w-full  ${props.className}`}>
                <h5 className='bg-white font-normal text-xs md:text-base'>Enter LinkedIn Profile URL</h5>
                <div className='flex justify-between mt-2 bg-white '>
                    <input type="email" placeholder='https://www.linkedin.com/in/profilename' className='border bg-white border-[#e7e7e7] px-2 py-2 rounded text-[10px] basis-3/4 md:basis-4/5  md:text-normal md:text-sm ' />
                    <a href="/reports" className='bg-[#1A9DAE] rounded flex justify-center text-white text-xs md:text-base md:font-semibold px-3 py-2 md:basis-1/6 md:px-8 md:py-3'>Analyze</a>
                </div>
            </div>
    )
}

export default IputUrl