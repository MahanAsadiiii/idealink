import React from 'react'

const OceanProfile = () => {
    return (
        <div className='mx-auto w-[1032px] bg-white rounded-lg pl-[29px] pb-[106px] mb-[194px] '>
            <div className="pt-[56px] pl-[27px]">
                <div className="flex">
                    <h1 className='text-[32px] font-bold font-[inter] pr-[10px]'>Ocean Profile:</h1>
                    <h2 className='font-[inter] text-[32px] font-bold text-[#1A3EBA]'>O, N, E</h2>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="mt-6 basis-[48%]">
                    <h3 className='font-medium font-[inter] text-[22px] pl-[27px]'>Open, Somewhat Balanced, Extroverted</h3>

                </div>
                <div className="mt-6 basis-[48%] pr-4">
                    <div className="">
                        <div className="flex mb-[6px] ml-6">
                            <h1 className='bg-[#FCF5FF] px-[15px] py-[10px] mr-4 text-2xl font-extrabold font-[Inter] text-[#A96AC0] rounded-md'>O</h1>
                            <h2 className='text-[22px] font-semibold font-[Inter] my-auto'>OPENNESS</h2>
                        </div>
                        <div className="flex">
                            <div className="basis-[1%]">
                                <div className="w-1 bg-[#A96AC0] h-[152px] "></div>
                            </div>
                            <p className='text-lg font-normal font-[Inter] my-auto ml-6'>Sometimes called intellect or imagination, this represents the willingness to try new things and think outside the box. Traits include insightfulness, originality and curiosity.</p>
                        </div>
                    </div>
                    <div className="mt-[28px]">
                        <div className="flex mb-[6px] ml-6">
                            <h1 className='bg-[#FFEBEB] px-[15px] py-[10px] mr-4 text-2xl font-extrabold font-[Inter] text-[#DF6868] rounded-md'>E</h1>
                            <h2 className='text-[22px] font-semibold font-[Inter] my-auto'>EXTROVERSION</h2>
                        </div>
                        <div className="flex">
                            <div className="basis-[1%]">
                                <div className="bg-[#DF6C6C] w-1 h-[152px] "></div>
                            </div>
                            <p className='text-lg font-normal font-[Inter] my-auto ml-6'>A state where an individual draws energy from others and seeks social connections or interaction, as opposed to being alone (introversion). Traits include being outgoing, energetic and confident.</p>
                        </div>
                    </div>
                    <div className="mt-[28px]">
                        <div className="flex mb-[6px] ml-6">
                            <h1 className='bg-[#E9F9FC] px-[15px] py-[10px] mr-4 text-2xl font-extrabold font-[Inter] text-[#39B3C1] rounded-md'>N</h1>
                            <h2 className='text-[22px] font-semibold font-[Inter] my-auto'>NEUROTICISM</h2>
                        </div>
                        <div className="flex justify-between">
                            <div className="basis-[1%]">
                                <div className='h-[152px] bg-[#39B3C1] w-1'></div>
                            </div>
                            <p className='text-lg font-normal font-[Inter] my-auto ml-6 basis-[90%]'>A tendency towards negative personality traits, emotional instability and self-destructive thinking. Traits include pessimism, anxiety, insecurity and fearfulness.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export { OceanProfile }