import AchievementStory from '@/components/achiveOurStory/achiveOurStory';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    metadataBase: new URL("https://caps-code.vercel.app/en/about-us"),
    title: {
        default: "CapsCode",
        template:
            "%s | About Us - A Software Company",
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

export default function AboutUS() {
    return (
        <div className="flex flex-col items-center justify-center">
            <AchievementStory />
        </div>
    )
}
