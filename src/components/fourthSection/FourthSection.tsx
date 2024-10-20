import React from 'react'
import { TextGenerateEffect } from '../ui/text-generate-effect'

export default function FourthSection() {
    return (
        <div className='w-full flex bg-[#0053C6] py-32'>
            <div className='w-[95%] sm:w-[60%]  md:w-full lg:container ps-8 sm:ps-0 mx-auto'>
                <TextGenerateEffect words="OUR EXPERT TEAM TRANSFORMS" duration={1} filter={true} />
                <TextGenerateEffect words="YOUR  CONCEPTS  TO  STUNNING " duration={1} filter={true} />
                <TextGenerateEffect words="WIREFRAMES THAT ENGAGE ◘" duration={1} filter={true} />
                <TextGenerateEffect words="WHETHER YOU ARE A BEGINNER " duration={1} filter={true} />
                <TextGenerateEffect words="OR AN EXPERT, WE CAN HELP" duration={1} filter={true} />
                <TextGenerateEffect words="YOU CREATE THE FUTURE.☻" duration={1} filter={true} />
            </div>
        </div>
    )
}
