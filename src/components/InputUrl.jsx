import React from 'react'

const IputUrl = (props) => {
    return (
            <div className={`bg-[#ffffff] flex flex-col px-2 py-2 lg:px-8 lg:py-6 rounded-lg w-full lg:w-full  ${props.className}`}>
                <h5 className='bg-white font-normal text-xs lg:text-base'>Enter LinkedIn Profile URL</h5>
                <div className='flex justify-between mt-2 bg-white '>
                    <input type="email" placeholder='https://www.linkedin.com/in/profilename' className='border bg-white border-[#e7e7e7] px-2 py-2 rounded text-[10px] mr-2 basis-3/4 md:basis-3/4 lg:basis-4/5 lg:text-normal lg:text-sm ' />
                    <a href="/reports" className='bg-[#1A9DAE] hover:text-[#1A9DAE] hover:bg-white hover:border-2 hover:text-sm hover:border-[#1A9DAE] rounded flex justify-center text-white text-xs lg:text-base lg:font-semibold px-3 py-2 lg:basis-1/6 lg:px-8 lg:py-3'>Analyze</a>
                </div>
            </div>
    )
}

export default IputUrl