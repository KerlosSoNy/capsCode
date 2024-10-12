'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MagneticComponent from '../Magnitc/Magnitc'
import { StartButton } from '../Buttons/start'
import { useLocale } from 'next-intl'

export default function Navbar() {
    const locale = useLocale()
    return (
        <div id='topOfPage' className='flex flex-col gap-2 bg-[#0053C6] '>
            <div className='container flex gap-3 md:gap-0 flex-row items-center justify-between h-[70px]'>
                <Link href='/' className='hidden md:flex'>
                    <Image src='/assets/Logo.png' width={130} height={50} className='w-[150px] !h-[40px]' alt='logo' />
                </Link>
                <Link href='/' className='flex md:hidden'>
                    <Image src='/assets/withoutWards.svg' width={130} height={50} className='w-[150px] !h-[40px]' alt='logo' />
                </Link>
                <div className='md:hidden hidden lg:flex flex-row items-center justify-between w-[30%]'>
                    <MagneticComponent >
                        <Link href='/about-us' className='text-white text-[15px] font-bold'>
                            ABOUT
                        </Link>
                    </MagneticComponent>
                    <MagneticComponent >
                        <Link href={`/${locale}/projects`} className='text-white text-[15px] font-bold'>
                            PROJECT
                        </Link>
                    </MagneticComponent>
                    <MagneticComponent >
                        <Link href='/contact-us' className='text-white text-[15px] font-bold'>
                            CONTACT US
                        </Link>
                    </MagneticComponent>
                </div>
                <StartButton />
            </div>
            <div className='md:flex flex lg:hidden flex-row items-center justify-between container'>
                <MagneticComponent >
                    <Link href='/about-us' className='text-white text-[15px] font-bold'>
                        ABOUT
                    </Link>
                </MagneticComponent>
                <MagneticComponent >
                    <Link href='/project' className='text-white text-[15px] font-bold'>
                        PROJECT
                    </Link>
                </MagneticComponent>
                <MagneticComponent >
                    <Link href='/contact-us' className='text-white text-[15px] font-bold'>
                        CONTACT US
                    </Link>
                </MagneticComponent>
            </div>
        </div>
    )
}
