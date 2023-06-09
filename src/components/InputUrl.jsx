import React from 'react'

const IputUrl = (props) => {
    return (
        <div>
            <div className={`bg-[#ffffff] flex flex-col px-8 py-6 rounded-lg mx-auto ${props.className}`}>
                <h5 className='bg-white font-normal text-base'>Enter LinkedIn Profile URL</h5>
                <div className='flex justify-between mt-2 bg-white'>
                    <input type="email" placeholder='https://www.linkedin.com/in/profilename' className='border bg-white border-[#e7e7e7] basis-[85%] px-[0.5rem] rounded text-normal text-sm ' />
                    <button className='bg-[#1A9DAE] rounded text-white text-[16px] font-semibold px-8 py-3'>Analyze</button>
                </div>
            </div>
        </div>
    )
}

export default IputUrl