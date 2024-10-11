"use client";
import React from 'react'
import { ContainerScroll } from '../ui/container-scroll-animation';
import FloatingComponent from '../floatingComponent/floatingComponent';
import { CardStack } from '../ui/card-stack';

export default function AchiveYourPurpose() {
    const cardItems = [
        {
            id: 1,
            name: "John Doe",
            designation: "CEO",
            content: <p>John is the visionary leader of the company.</p>,
        },
        {
            id: 2,
            name: "Jane Smith",
            designation: "CTO",
            content: <p>Jane oversees all tech operations and innovation.</p>,
        },
        {
            id: 3,
            name: "Michael Johnson",
            designation: "Lead Developer",
            content: <p>Michael leads the development team on all projects.</p>,
        },
        {
            id: 4,
            name: "Sara Williams",
            designation: "Product Manager",
            content: <p>Sara is responsible for guiding the product roadmap.</p>,
        },
    ];
    return (
        <div className="relative">
            <ContainerScroll titleComponent={<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-mainColor to-neutral-300">CREATE YOUR  INTERACTION IDEA</h1>}>
                {/* Content inside the card */}
                <div className="text-center flex flex-col justify-between items-center text-lg p-4">
                    <div className='flex flex-row justify-between w-full flex-wrap'>
                        <p className='uppercase text-[6vw] leading-[4.5vw] font-bold text-start w-full lg:w-[30%]'>{'What They’re!'}</p>
                        <FloatingComponent>
                            <div className=" text-start shadow-2xl h-[40px] sm:h-[80px] md:h-[115px] shadow-black p-1 md:p-2 rounded-full  bg-white -rotate-[20deg]">
                                <div className="w-[22vw] text-[3.5vw] h-[33px] sm:h-[70px] md:h-[100px] text-start ps-0 md:ps-1 pe-3 text-black bg-white border-[1px] border-black border-dashed rounded-full font-bold flex flex-col items-center justify-evenly">
                                    <h1 className="w-full text-start ps-3 sm:ps-6 md:ps-8 uppercase">Saying</h1>
                                </div>
                            </div>
                        </FloatingComponent >
                    </div>
                    <div className='relative mt-36 md:mt-44 lg:mt-32'>
                        <CardStack items={cardItems} offset={12} scaleFactor={0.08} />
                    </div>
                </div>
            </ContainerScroll>

        </div>)
}
