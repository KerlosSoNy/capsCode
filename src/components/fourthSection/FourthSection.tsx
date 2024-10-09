import React from 'react'
import { TextGenerateEffect } from '../ui/text-generate-effect'

export default function FourthSection() {
    return (
        <div className='w-full flex bg-[#0053C6] py-32'>
            <div className='w-[99%] md:w-full lg:container mx-auto'>
                <TextGenerateEffect words="OUR EXPERT TEAM TRANSFORMS" duration={1} gap='4' filter={true} />
                <TextGenerateEffect words="YOUR  CONCEPTS  TO  STUNNING " gap='4' duration={1} filter={true} />
                <TextGenerateEffect words="WIREFRAMES THAT ENGAGE ◘" duration={1} gap='10' filter={true} />
                <TextGenerateEffect words="WHETHER YOU ARE A BEGINNER " duration={1} filter={true} />
                <TextGenerateEffect words="OR AN EXPERT, WE CAN HELP" duration={1} filter={true} />
                <TextGenerateEffect words="YOU CREATE THE FUTURE.☻" duration={1} filter={true} />
            </div>
        </div>
    )
}
