import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";
import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://caps-code.vercel.app/en/services"),
    title: {
        default: "CapsCode",
        template:
            "%s | Services - Our Services",
    },
    description:
        "At Caps Code, we offer a comprehensive range of web development services tailored to meet your business needs. From custom website design and e-commerce solutions to responsive applications and SEO optimization, our expert team is dedicated to delivering high-quality, user-friendly solutions that drive results. Partner with us to transform your digital presence and achieve your goals!",
    openGraph: {
        title: "CapsCode",
        description:
            "At Caps Code, we offer a comprehensive range of web development services tailored to meet your business needs. From custom website design and e-commerce solutions to responsive applications and SEO optimization, our expert team is dedicated to delivering high-quality, user-friendly solutions that drive results. Partner with us to transform your digital presence and achieve your goals!",
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


export default function page() {
    const items = [
        {
            title: 'Web Development',
            description: 'Custom web development solutions using the latest technologies like React, Next.js, and Tailwind CSS.',
            link: '/services/web-development',
        },
        {
            title: 'Mobile App Development',
            description: 'Building high-quality, cross-platform mobile apps using React Native and Flutter.',
            link: '/services/mobile-app-development',
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive and engaging user experiences with modern design techniques.',
            link: '/services/ui-ux-design',
        },
        {
            title: 'E-commerce Solutions',
            description: 'Developing scalable e-commerce platforms to boost your online business presence.',
            link: '/services/ecommerce-solutions',
        },
        {
            title: 'Cloud Solutions',
            description: 'Helping businesses transition to the cloud with AWS, Google Cloud, and Azure integrations.',
            link: '/services/cloud-solutions',
        },
        {
            title: 'Marketing',
            description: 'Comprehensive digital marketing services to grow your brand, from SEO to social media management.',
            link: '/services/marketing',
        },
        {
            title: 'Plans',
            description: 'Explore our service plans, from basic packages to enterprise solutions, tailored to your business needs.',
            link: '/services/plans',
        },
    ];

    const wordsArray = ["Web App", "Mobile App", "UI/UX", "E-commerce", "Planes", "Marketing", "Cloud"];

    return (
        <div className="bg-mainColor">
            <div className="flex flex-row w-full justify-center py-10 items-center">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <h1 className="font-bold text-3xl md:text-6xl text-white">Our Company Services!</h1>
                    <div className="flex flex-col justify-center items-center md:flex-row gap-1 mx-auto">
                        <h1 className="text-lg md:text-3xl text-white font-bold">We Will Help You To Build </h1>
                        <FlipWords words={wordsArray} duration={2000} className="text-3xl font-bold" />
                    </div>
                </div>
            </div>
            <HoverEffect items={items} className="my-custom-class" />
        </div>
    )
}
