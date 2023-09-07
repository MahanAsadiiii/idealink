import React from 'react'
import { Email } from '../utilities/Images'
import {Section} from "../components/index"

const EmailSuggestions = () => {
    return (
        <Section>
            <div className='flex flex-col bg-white rounded px-6 py-6 lg:py-9 mb-12 w-full'>

                <div className="flex flex-col justify-center mb-5 lg:mb-10">
                    <div className="flex justify-center scale-75 lg:scale-100">
                        <img src={Email} alt="" className='mb-4 ' />
                    </div>
                    <h1 className='text-xl lg:text-3xl font-bold flex justify-center'>When Writing An Email To Mohammad</h1>
                </div>

                <div className="flex flex-col lg:flex-row justify-evenly lg:mb-16 gap-6">
                    <div className="basis-1/2 px-4 bg-[#F9F8FE] rounded-lg py-3">
                        <div className="my-3">
                            <div className="flex items-center mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl'>Subject:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#000000]'>Personalized, catchy</h5>
                            </div>
                            <div className="flex">
                                <h6 className='font-light lg:font-medium text-xs text-[#787771] italic mr-2' >Example:</h6>
                                <p className='font-light lg:font-medium text-xs text-[#787771] italic' >Something like 'Mohammad, how about a chat tomorrow?', 'How can we increase your sales conversion together' etc.</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="flex items-center mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl'>Salution:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#3AAB27]'>Yes (Something casual)</h5>
                            </div>
                            <div className="flex items-start">
                                <h6 className='font-light lg:font-medium text-xs text-[#787771] italic mr-2 ' >Example:</h6>
                                <p className='font-light lg:font-medium text-xs text-[#787771] italic' >Use 'Hi', 'Hey' etc. (along with the first name)</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="flex items-center mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl'>Greeting:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#3AAB27]'>Yes (Say something interesting/unusual)</h5>
                            </div>
                            <div className="flex">
                                <h6 className='font-light lg:font-medium text-xs text-[#787771] italic mr-2' >Example:</h6>
                                <p className='font-light lg:font-medium text-xs text-[#787771] italic' >Use unusual lines, like 'This has been quite a week', 'What a game yesterday' etc.</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="flex items-center mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl'>Emojie/Gifs:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#000000]'>Recommended</h5>
                            </div>
                            <div className="flex">
                                {/* <h6></h6> <p></p> */}
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="flex items-center mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl'>Bullet Points:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#000000]'>Avoid</h5>
                            </div>
                            <div className="flex">
                                {/* <h6></h6> <p></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 px-4 bg-[#F9F8FE] rounded-lg py-3">
                        <div className="my-3">
                            <div className="flex items-center mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl'>Closing Line:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#000000]'>Build excitement</h5>
                            </div>
                            <div className="flex">
                                <h6 className='font-light lg:font-medium text-xs text-[#787771] italic mr-2 ' >Example:</h6>
                                <p className='font-light lg:font-medium text-xs text-[#787771] italic' >Something like 'So Mohammad, lets get the ball rolling?'</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="flex items-center mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl'>Tone Of Word:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#000000]'>Friendly, first-person</h5>
                            </div>
                            <div className="flex">
                                {/* <h6></h6> <p></p> */}
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="flex items-start mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl w-1/2'>Overall Messaging:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#000000]'>Focused on the person and relationship</h5> </div>
                            <div className="flex">
                                {/* <h6></h6> <p></p> */}
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="flex items-center mb-1">
                                <h4 className='mr-2 font-medium text-base lg:text-xl'>Length Of Mail:</h4>
                                <h5 className='text-xs lg:text-sm font-normal text-[#000000]'>Long</h5>
                            </div>
                            <div className="flex">
                                <h6 className='font-light lg:font-medium text-xs text-[#787771] italic mr-2' >Example:</h6>
                                <p className='font-light lg:font-medium text-xs text-[#787771] italic' >Maximum up to 200-250 words</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export { EmailSuggestions }