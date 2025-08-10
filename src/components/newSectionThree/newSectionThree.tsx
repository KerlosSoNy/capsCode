'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function NewSectionThree() {
    const cards = [
        {
            title: "Design & User Experience",
            description:
                "We craft intuitive and visually appealing UI/UX designs that focus on user needs, ensuring every interaction is smooth, engaging, and aligned with your brand identity."
        },
        {
            title: "Mobile & Web Develop",
            description:
                "Our team develops high-performance mobile applications and responsive websites that work seamlessly across devices, delivering speed, security, and a flawless user experience."
        },
        {
            title: "Backend & DevOps",
            description:
                "We build scalable backend systems and implement DevOps practices to ensure secure, efficient, and automated deployment, helping your business grow without technical limits."
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const imageAnim = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className='flex flex-col items-center justify-center w-full pb-8 md:pb-[50px] overflow-hidden'>
            {/* Hero Image with animation */}
            <motion.div
                className='w-full h-auto'
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageAnim}
            >
                <Image
                    src={'/assets/mainImage.png'}
                    width={1440}
                    height={470}
                    className="!w-full h-auto object-cover"
                    style={{
                        height: 'auto',
                        maxHeight: '470px'
                    }}
                    alt='logo'
                    loading='lazy'
                />
            </motion.div>

            {/* Cards Container with staggered animations */}
            <motion.div
                className='flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-[24px] w-full max-w-[1400px] -mt-10 lg:-mt-16 px-4'
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                {cards?.map((card, index) => (
                    <motion.div
                        key={index}
                        className='flex flex-col relative justify-between w-full lg:w-[412px] h-[322px] lg:min-h-[400px] lg:h-[522px] bg-mainColor text-white p-6 md:p-[26px] hover:shadow-xl transition-shadow duration-300'
                        variants={item}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className='shrink-0 flex flex-col gap-4 w-full'>
                            <motion.div
                                className='h-fit w-full relative flex items-end flex-row'
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 * index + 0.5, duration: 0.5 }}
                            >
                                <span className='text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-bold text-white leading-tight md:leading-[72px]'>
                                    {card.title}
                                </span>
                            </motion.div>
                        </div>
                        <motion.span
                            className="text-base sm:text-lg md:text-[18px] font-medium text-white shrink-0 h-auto md:h-[132px] line-clamp-5"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 * index + 0.7, duration: 0.5 }}
                        >
                            {card.description}
                        </motion.span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}