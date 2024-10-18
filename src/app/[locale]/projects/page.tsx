import OurBestWorks from '@/components/projectsPage/ourBestWork/ourBestWork'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    metadataBase: new URL("https://caps-code.vercel.app/en/projects"),
    title: {
        default: "CapsCode",
        template:
            "%s | Projects - Our Projects",
    },
    description:
        "Explore the innovative projects showcased on Caps Code, where creativity meets technology. From dynamic web applications to engaging user interfaces, our portfolio highlights a range of projects that demonstrate our expertise in coding and design. Discover the processes, technologies, and challenges behind each project and get inspired for your own development journey!",
    openGraph: {
        title: "CapsCode",
        description:
            "Explore the innovative projects showcased on Caps Code, where creativity meets technology. From dynamic web applications to engaging user interfaces, our portfolio highlights a range of projects that demonstrate our expertise in coding and design. Discover the processes, technologies, and challenges behind each project and get inspired for your own development journey!",
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

export default function Projects() {
    return (
        <>
            <OurBestWorks />
        </>
    )
}
