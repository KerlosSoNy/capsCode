import FormContactUs from '@/components/formContact/formContact';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import React from 'react'

export default function ContactUs() {
    const words = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "CapsCode.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col overflow-x-hidden items-center justify-center gap-7 py-20 ">
            <p className="text-neutral-600 dark:text-neutral-200 text-base">
                The road to feature starts from here
            </p>
            <TypewriterEffect words={words} />
            <FormContactUs />
        </div>
    )
}
