import React from 'react'
import ParallaxImage from '../parallexImages/parallexImages'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'

export default async function Footer() {
    const locale = await getLocale()
    return (
        <div className='bg-mainColor relative overflow-hidden flex flex-col gap-20 pb-40'>
            <div className='font-light py-2'>
                <ParallaxImage
                    images={[
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png',
                        '/assets/Logo.png', '/assets/Logo.png']}
                    baseVelocity={4}
                    bg="bg-mainColor"
                />
            </div>
            <div className="flex flex-col gap-4 items-start ps-10 md:ps-0 justify-around flex-wrap md:flex-row">
                <div className='flex flex-row items-start justify-start gap-6 text-white'>
                    <h1 className='text-2xl font-bold text-white'>Get in touch :</h1>
                    <div className='flex flex-col gap-3 pt-1'>
                        <span>{'123 Maadi , Cairo ,EG'}</span>
                        <Link href="mailto:capscodeeg.info@gmail.com">CapsCodeEG@gmail.com</Link>
                        <Link href="tel:+201010811806">+20 101 081 1806</Link>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-6 text-white'>
                    <h1 className='text-2xl font-bold text-white'>Special Links :</h1>
                    <div className='flex flex-col gap-3 pt-1'>
                        <Link className='hover:cursor-pointer' href='#topOfPage'>Home</Link>
                        <Link className='hover:cursor-pointer' href={`/${locale}/services`}>Service</Link>
                        <Link className='hover:cursor-pointer' href={`/${locale}/about-us`}>About us</Link>
                    </div>
                </div>
                <div className='flex flex-row gap-6 text-white'>
                    <h1 className='text-2xl font-bold '>Company :</h1>
                    <div className='flex flex-col pt-1 gap-3'>
                        <Link href='https://www.facebook.com/p/capscode-61567515213356/' target='_blank'>Facebook</Link>
                        <Link href='https://www.instagram.com/capscode.eg/' target='_blank'>Instagram</Link>
                        <Link href='https://www.linkedin.com/company/capscodeeg' target='_blank'>LinkedIn</Link>
                        <Link href='mailto:capscodeeg.info@gmail.com' target='_blank'>E-Mail</Link>
                    </div>
                </div>
            </div>
            <div className='flex absolute justify-center flex-row text-[19.5vw] font-bold -bottom-16 sm:-bottom-24 md:-bottom-28 lg:-bottom-40 2xl:-bottom-64'>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-mainColor to-neutral-300 border-white'>CAPS</h1>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-mainColor to-neutral-300 border-white'>CO</h1>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-b from-mainColor to-neutral-300 border-white'>DE</h1>
            </div>
        </div>
    )
}
