import { Card, Carousel } from "../ui/apple-cards-carousel";

const cardsData = [
    {
        src: "/assets/089A0394-1.JPG", // Path to the image
        title: "UI/UX Design",
        category: "Our best",
        content: <p>This is a beautiful landscape description.</p>, // You can pass any JSX
    },
    {
        src: "/assets/kero.webp",
        title: "Frontend Developer",
        category: "Our best",
        content: <p>Kerlos , the team lead of all projects and the leader of the team.</p>,
    },
    {
        src: "/assets/ziad.png",
        title: "Backend Developer",
        category: "Our best",
        content: <p>Enjoy an exciting mountain adventure!</p>,
    },
    {
        src: "/assets/felox.jpeg",
        title: "Markting",
        category: "Our best",
        content: <p>Philopater , the team lead of all projects and the leader of the team.</p>,
    },
];

// Convert the card data into JSX elements
const cards = cardsData.map((card, index) => (
    <Card key={index} card={card} index={index} layout />
));


export default function TheirdSection() {
    return (
        <div
            className="w-full bg-white text-black mt-32">
            <div className="container mx-auto flex flex-col">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-3 mb-1">
                            <h1 className="text-5xl font-bold font-clash">CREATIVE</h1>
                            <div className="p-1 rounded-full bg-mainColor text-white">
                                <h1 className="text-3xl font-bold font-clash p-1 border-dashed border-white border-[1px] rounded-full px-4">SOLUTION</h1>
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold font-clash">JUST FOR YOU</h1>
                    </div>
                    <div className="w-[30%] flex flex-col justify-start items-start">
                        <span className="">
                            {`At CapsCode, we bring your ideas to life with a splash of creativity and innovation. Whether it's web development, mobile apps, or stunning UI/UX designs, we've got the skills to turn your vision into reality—effortlessly and with a bit of flair!`}
                        </span>
                        <button className="bg-white text-black shadow-md shadow-black font-bold font-clash px-4 py-2 rounded-full mt-4">VIEW ALL</button>
                    </div>
                </div>
                <Carousel items={cards} />
            </div>
        </div>
    )
}
