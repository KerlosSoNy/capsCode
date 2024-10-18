import React from 'react'
import ParallaxText from '../sweaper/Sweaper'
import Image from 'next/image'
import Link from 'next/link'

export default function LastSection() {
    return (
        <div className='w-full flex flex-col mb-32 -mt-40 overflow-hidden overflow-y-hidden'>
            <div className='z-[-99] h-fit shadow-md -rotate-2'>
                <ParallaxText baseVelocity={1}>
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Mobile App &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Web Development &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    UI/UX &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Mobile App &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Web Development  &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    UI/UX &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Mobile App &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Web Developmen &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    UI/UX &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Mobile App &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Web Developmen  &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    UI/UX &nbsp;&nbsp;&nbsp;&nbsp;
                </ParallaxText>
            </div>
            <div className='flex flex-row mx-auto text-[10.5vw] font-bold text-mainColor 
            pe-20 sm:pe-52 md:pe-60 
            mt-[-15px] sm:mt-[-25px] md:mt-[-40px] lg:-mt-16'>
                <h1>C</h1>
                <h1 className='z-[-100]'>O</h1>
                <h1>L</h1>
                <h1 className='z-[-100]'>L</h1>
                <h1 className='z-[-100]'>A</h1>
                <h1>B</h1>
                <h1>O</h1>
            </div>
            <h1 className='text-[10.5vw] font-bold text-black 
            mt-[-35px] sm:mt-[-65px] md:mt-[-60px] lg:-mt-28 mx-auto ps-4 md:ps-32'>
                RATIONS
            </h1>
            <div className='flex flex-row ps-0 lg:ps-24 -mt-6 lg:-mt-20 mx-auto items-center justify-center'>
                <h1 className='text-[5vw] my-auto font-bold text-black'>
                    TOGETHER
                </h1>
                <Link href="mailto:capscodeeg.info@gmail.com"
                    type='button'
                    className="bg-white relative gap-4 mt-4 md:mt-8 mb-4 text-black flex flex-row items-center justify-center w-[200px] h-[50px] rounded-full ms-10 shadow-md shadow-black text-sm"
                >
                    <h1 className=" font-bold font-clash text-black">GET STARTED</h1>
                    <Image src='/assets/start.svg' width={50} height={50} alt="logo" className="w-[25px]  h-[140px] " />
                </Link>
            </div>
        </div>
    )
}
