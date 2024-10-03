import React from 'react'
import { TextGenerateEffect } from '../ui/text-generate-effect'

export default function FourthSection() {
    return (
        <div className='w-full flex bg-[#0053C6] py-32'>
            <div className='container mx-auto'>
                <TextGenerateEffect words="OUR EXPERT TEAM TRANSFORMS YOUR CONCEPTS TO STUNNING WIREFRAMES THAT ENGAGE. WHETHER YOU ARE A BEGINNER OR AN EXPERT, WE CAN HELP YOU CREATE THE FUTURE." duration={1} filter={true} />
            </div>
        </div>
    )
}
