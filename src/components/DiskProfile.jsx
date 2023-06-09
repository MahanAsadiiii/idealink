import React from 'react'

const DiskProfile = () => {
    return (
        <div className='mx-auto w-[60vw] bg-white pl-[56px] rounded-lg mb-12 pb-[136px] pr-4'>
            <div className="pt-[56px] ">
                <div className="flex ">
                    <h1 className='text-[32px] font-bold font-[inter]'>Disk Profile:</h1>
                    <h2 className='text-[#1A3EBA] text-[32px] font-bold ml-[10px] font-[Inter]'>I</h2>
                </div>
                
            </div>
            <div className="flex justify-between">
                <div className="basis-[48%] mt-6">
                    <h5 className='font-medium text-[22px] mb-[79px] font-[Inter]'>Medium Influence</h5>
                </div>
                <div className="basis-[48%] mt-6"> 
                    <div className="flex mb-[6px] ml-6">
                        <h1 className='bg-[#F2FFEE] px-[20px] py-[10px] mr-4 text-2xl font-extrabold font-[Inter] text-[#87DF68] rounded-md'>I</h1>
                        <h2 className='text-[22px] font-semibold font-[Inter] my-auto'>Influence</h2>
                    </div>
                    <div className="flex">
                        <div className="h-[152px] w-2 bg-[#8ADF6C] mr-6"></div>
                        <p className='text-lg font-normal font-[Inter] my-auto'>A person in this DiSC quadrant places emphasis on influencing or persuading others. They tend to be enthusiastic, optimistic, open, trusting, and energetic.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DiskProfile }