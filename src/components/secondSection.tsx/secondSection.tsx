import Image from "next/image";
import ParallaxText from "../sweaper/Sweaper";
import FloatingComponent from "../floatingComponent/floatingComponent";
import Link from "next/link";

export default function SecondSection() {
    return (
        <div
            className="flex relative flex-col h-fit w-full overflow-hidden bg-mainColor items-start"
        >
            <div className="flex flex-col relative items-center justify-center h-fit mx-auto">
                <div className="text-white font-bold flex flex-row items-center justify-evenly">
                    <h1 className="text-[14vw] font-bold font-clash">CAPSCODE</h1>
                    <Image src='/assets/withoutWards.svg' width={50} height={50} alt="logo" className="w-[13vw]  h-[140px]" />
                </div>
                <FloatingComponent>
                    <div className=" text-start shadow-2xl h-[45px] sm:h-[80px] md:h-[135px] 2xl:h-[200px] shadow-black p-1 md:p-2 rounded-full  bg-white -rotate-[20deg]">
                        <div className="w-[22vw] text-[3.5vw] h-[37px] sm:h-[70px] md:h-[120px] 2xl:h-[185px] text-start ps-0 md:ps-1 pe-3 text-black bg-white border-[1px] border-black border-dashed rounded-full font-bold flex flex-col items-center justify-evenly">
                            <h1 className="w-full text-start ps-3 sm:ps-6 md:ps-8">BEAST</h1>
                            <h1 className="w-full text-start ps-3 sm:ps-6 md:ps-8 -mt-2 sm:-mt-6 md:-mt-7">DESIGN</h1>
                        </div>
                    </div>
                </FloatingComponent >
                <h1 className="text-[11.7vw] -mt-16 md:-mt-20 lg:-mt-32 font-bold font-clash text-white">WITHCREATIVE</h1>
            </div>
            <p className="w-[90%] md:w-[60%] lg:w-[58%] text-white ms-3 md:ms-10 lg:ms-10">Welcome to CapsCode, where innovation meets creativity to deliver vibrant web and mobile UI/UX solutions. With over 3 years of experience, join us on a journey to discover the magic of unforgettable software development.</p>
            <Link href="mailto:capscodeeg.info@gmail.com"
                className="bg-white relative gap-4 mt-8 mb-4 text-black flex flex-row items-center justify-center w-[200px] h-[50px] rounded-full ms-10 shadow-md shadow-black"
            >
                <h1 className=" font-bold font-clash text-black">GET STARTED</h1>
                <Image src='/assets/start.svg' width={50} height={50} alt="logo" className="w-[25px]  h-[140px] " />
            </Link>
            <div className="relative overflow-hidden w-[110vw] md:w-[101vw] -rotate-2 z-10 flex flex-row">
                <ParallaxText baseVelocity={1}>
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    JavaScript &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Framer Motion &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    React.js &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Next.js &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    HTML  &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    CSS &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    JavaScript &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Framer Motion &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    React.js &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Next.js &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    HTML  &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    CSS &nbsp;&nbsp;&nbsp;&nbsp;
                </ParallaxText>
            </div>
            <div className="absolute -bottom-10 flex flex-row">
                <ParallaxText baseVelocity={1}>
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    JavaScript &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Framer Motion &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    React.js &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Next.js &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    HTML  &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    CSS &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    JavaScript &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Framer Motion &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    React.js &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    Next.js &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    HTML  &nbsp;&nbsp;&nbsp;&nbsp;
                    | &nbsp;&nbsp;&nbsp;&nbsp;
                    CSS &nbsp;&nbsp;&nbsp;&nbsp;
                </ParallaxText>
            </div>
        </div>
    )
}
