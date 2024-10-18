import FormContactUs from '@/components/formContact/formContact';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL("https://caps-code.vercel.app/en/contact-us"),
    title: {
        default: "CapsCode",
        template:
            "%s | Contact Us ",
    },
    description:
        "Welcome to Caps Code, your ultimate destination for insightful coding tutorials, web development tips, and cutting-edge programming resources. Whether you're a beginner or an experienced developer, our carefully curated content helps you elevate your skills and stay updated with the latest trends in technology. Join our community and unlock the potential of coding with Caps Code!",
    openGraph: {
        title: "CapsCode",
        description:
            "Welcome to Caps Code, your ultimate destination for insightful coding tutorials, web development tips, and cutting-edge programming resources. Whether you're a beginner or an experienced developer, our carefully curated content helps you elevate your skills and stay updated with the latest trends in technology. Join our community and unlock the potential of coding with Caps Code!",
        type: "website",
        locale: "en_US",
        url: "https://caps-code.vercel.app/en",
        siteName: "CapsCode",
    },
    icons: {
        icon: "/assets/withoutWards.png",
        shortcut: "/assets/withoutWards.png",
    },
};

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
