'use client'

import { TbTopologyStarRing2 } from "react-icons/tb";
import { motion, useTime, useTransform } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

export default function FifthSection() {
    const time = useTime()
    const rotate = useTransform(
        time,
        [0, 4000], // For every 4 seconds...
        [0, 360], // ...rotate 360deg
        { clamp: false }
    )

    return (
        <div className="my-10 flex flex-col container mx-auto">
            <div className="flex flex-row  mb-5 items-center flex-wrap justify-center md:justify-between">
                <div className="text-[8vw] font-bold font-clash flex flex-row flex-wrap gap-2">
                    <span>OUR BEST</span>
                    <span className="text-mainColor">WORK</span>
                </div>
                <div className="flex flex-col w-[80%] md:w-[20%] gap-4 ">
                    <div className="flex flex-row justify-center md:justify-start    gap-2 flex-wrap">
                        <motion.div
                            className='w-[25px] h-[25px] relative'
                            style={{ rotate }}
                        >
                            <TbTopologyStarRing2 className="text-2xl" />
                        </motion.div>
                        <motion.div
                            className='w-[25px] h-[25px] relative'
                            style={{ rotate }}
                        >
                            <TbTopologyStarRing2 className="text-2xl" />
                        </motion.div>
                        <motion.div
                            className='w-[25px] h-[25px] relative'
                            style={{ rotate }}
                        >
                            <TbTopologyStarRing2 className="text-2xl" />
                        </motion.div>
                    </div>
                    <span className="text-center md:text-start">
                        Our portfolio showcases a
                        diverse range of projects
                        from stunning branding
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="https://www.behance.net/gallery/188091483/Egyptian-National-Railways-Website" target="_blank" className="w-full h-[350px] md:h-[450px] relative hover:scale-[1.02] duration-500">
                    <Image src={"/assets/firstProject.png"} alt="image" fill />
                </Link>
                <Link href="https://www.behance.net/gallery/200620167/General-Authority-of-Red-Sea-Ports" target="_blank" className="w-full h-[350px] md:h-[450px] relative hover:scale-[1.02] duration-500">
                    <Image src={"/assets/theirdProject.png"} alt="image" fill />
                </Link>
                <Link href="https://www.behance.net/gallery/200620167/General-Authority-of-Red-Sea-Ports" target="_blank" className="w-full h-[350px] md:h-[450px] relative hover:scale-[1.02] duration-500">
                    <Image src={"/assets/fourthProject.png"} alt="image" fill />
                </Link>
                <Link href="https://www.behance.net/gallery/187742719/Egyptian-National-Railways-Re-Design" target="_blank" className="w-full h-[350px] md:h-[455px] relative hover:scale-[1.02] duration-500">
                    <Image src={"/assets/secondProject.png"} alt="image" fill />
                </Link>
            </div>
        </div>
    )
}
