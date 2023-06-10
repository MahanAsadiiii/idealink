import React from 'react'
import { Email } from '../utilities'

const EmailSuggestions = () => {
    return (
        <div className='flex flex-col bg-white rounded px-[10px] w-[1032px] mx-auto mb-[58px]'>

            <div className="mx-auto mt-8 mb-[40px]">
                <img src={Email} alt="" className='mx-auto mb-4' />
                <h1 className='text-[32px] font-bold '>When Writing An Email To Mohammad</h1>
            </div>

            <div className="flex justify-evenly mb-[67px]">
                <div className="basis-[48%] pl-4 bg-[#F9F8FE] rounded-lg pt-3">
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl'>Subject:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#000000]'>Personalized, catchy</h5>
                        </div>
                        <div className="flex">
                            <h6 className='font-medium text-[13px] text-[#787771] italic mr-2 my-auto' >Example:</h6>
                            <p className='font-medium text-[13px] text-[#787771] italic' >Something like 'Mohammad, how about a chat tomorrow?', 'How can we increase your sales conversion together' etc.</p>
                        </div>
                    </div>
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl'>Salution:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#3AAB27]'>Yes (Something casual)</h5>
                        </div>
                        <div className="flex">
                            <h6 className='font-medium text-[13px] text-[#787771] italic mr-2 my-auto' >Example:</h6>
                            <p className='font-medium text-[13px] text-[#787771] italic' >Use 'Hi', 'Hey' etc. (along with the first name)</p>
                        </div>
                    </div>
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl'>Greeting:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#3AAB27]'>Yes (Say something interesting/unusual)</h5>
                        </div>
                        <div className="flex">
                            <h6 className='font-medium text-[13px] text-[#787771] italic mr-2 my-auto' >Example:</h6>
                            <p className='font-medium text-[13px] text-[#787771] italic' >Use unusual lines, like 'This has been quite a week', 'What a game yesterday' etc.</p>
                        </div>
                    </div>
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl'>Emojie/Gifs:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#000000]'>Recommended</h5>
                        </div>
                        <div className="flex">
                            {/* <h6></h6> <p></p> */}
                        </div>
                    </div>
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl'>Bullet Points:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#000000]'>Avoid</h5>
                        </div>
                        <div className="flex">
                            {/* <h6></h6> <p></p> */}
                        </div>
                    </div>
                </div>
                <div className="basis-[48%] pl-4 bg-[#F9F8FE] rounded-lg pt-3">
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl'>Closing Line:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#000000]'>Build excitement</h5>
                        </div>
                        <div className="flex">
                            <h6 className='font-medium text-[13px] text-[#787771] italic mr-2 my-auto' >Example:</h6>
                            <p className='font-medium text-[13px] text-[#787771] italic' >Something like 'So Mohammad, lets get the ball rolling?'</p>
                        </div>
                    </div>
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl'>Tone Of Word:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#000000'>Friendly, first-person</h5>
                        </div>
                        <div className="flex">
                            {/* <h6></h6> <p></p> */}
                        </div>
                    </div>
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl basis-[60%]'>Overall Messaging:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#000000]'>Focused on the person and relationship</h5> </div>
                        <div className="flex">
                            {/* <h6></h6> <p></p> */}
                        </div>
                    </div>
                    <div className="my-[10px]">
                        <div className="flex mb-1">
                            <h4 className='mr-[10px] font-medium text-xl'>Length Of Mail:</h4>
                            <h5 className='my-auto text-sm font-normal text-[#000000]'>Long</h5>
                        </div>
                        <div className="flex">
                            <h6 className='font-medium text-[13px] text-[#787771] italic mr-2 my-auto' >Example:</h6>
                            <p className='font-medium text-[13px] text-[#787771] italic' >Maximum up to 200-250 words</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { EmailSuggestions }