import React from 'react'
import { InsightPic,} from '../utilities'
//  Risks, Speed, Conversation, Support 

function Insight() {
    return (
        <div className='flex flex-col w-[60vw] mx-auto px-auto bg-white px-6 mb-12'>
            <div className="mx-auto mt-8 mb-[56px]">
                <img src={InsightPic}  alt="/" className='mx-auto mb-4 ' />
                <h1 className='text-[32px] font-bold text-black '>Insights For Selling To Mohammad</h1>
            </div>

            <div className="">
                <div className="flex mx-auto bg-[#EAF0FF] max-w-[50%] justify-center border-x-4 border-[#C1D0F0] mb-[10px]">
                    <h3 className='text-[26px] font-bold py-[9px] text-[#113D94]'>While Negotiating and Closing</h3>
                </div>
                <div className="flex justify-between">
                    <div className="bg-[#FCFCFF] border-b-2 border-[#C1D0F0] basis-[48%] pl-4 ">
                        <div className="flex">
                            {/* <img src={Support } alt="" /> */}
                            <h4 className='font-semibold text-lg mb-[7px] mt-[24px]'>The Secret To Closing fast with Mohammad Is</h4>
                        </div>
                        <p className='text-sm font-normal mb-[31px]'>Relationships and rapport matter to them, but so does the value of the product.</p>
                    </div>
                    <div className="bg-[#FCFCFF] border-b-2 border-[#C1D0F0] basis-[48%] pl-4 ">
                        <div className="flex">
                            {/* <img  src={ Conversation } alt="" /> */}
                            <h4 className='font-semibold text-lg mb-[7px] mt-[24px]'>Will You ever get a clear Answer?</h4>
                        </div>
                        <p className='text-sm font-normal mb-[31px]'>Relationships and rapport matter to them, but so does the value of the product.</p>
                    </div>
                </div>
            </div>

            <div className="mt-[48px] mb-[56px]">
                <div className=" flex mx-auto bg-[#E7FAEF] max-w-[50%] justify-center border-x-4 border-[#BCF0D2] mb-[10px]">
                    <h3 className='text-[26px] font-bold py-[9px] text-[#08853A]'>Deal Planning</h3>
                </div>
                <div className="flex justify-between">
                    <div className="bg-[#FCFCFF] border-b-2 border-[#BCF0D2] basis-[48%] pl-4 ">
                        <div className="flex">
                            {/* <img src={ Speed } alt="" /> */}
                            <h4 className='font-semibold text-lg mb-[7px] mt-[24px]'>How Fast/Slow Mohammad will move?</h4>
                        </div>
                        <p className='text-sm font-normal mb-[31px]'>They are not the ones to make fast decisions, even while they stay committed.</p>
                    </div>
                    <div className="bg-[#FCFCFF] border-b-2 border-[#BCF0D2] basis-[48%] pl-4 ">
                        <div className="flex">
                            {/* <img src={ Risks } alt="" /> */}
                            <h4 className='font-semibold text-lg mb-[7px] mt-[24px]'>Can Mohammad Take Some Risk Or Not?</h4>
                        </div>
                        <p className='text-sm font-normal mb-[31px]'>If it seems really necessary, they can take small risks.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export { Insight }