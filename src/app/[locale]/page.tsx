
import Navbar from '@/components/navbar/Navbar';
import SecondSection from '@/components/secondSection.tsx/secondSection';
import { Card, Carousel } from '@/components/ui/apple-cards-carousel';
import { useTranslations } from 'next-intl';

const cardData = [
    {
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Card Title 1",
        category: "Category 1",
        content: <p>This is the content for card 1.</p>,
    },
    {
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Card Title 2",
        category: "Category 2",
        content: <p>This is the content for card 2.</p>,
    },
    {
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Card Title 3",
        category: "Category 3",
        content: <p>This is the content for card 3.</p>,
    },
    {
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Card Title 4",
        category: "Category 4",
        content: <p>This is the content for card 4.</p>,
    },
    {
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Card Title 5",
        category: "Category 5",
        content: <p>This is the content for card 5.</p>,
    },
    // Add more cards as needed
];

const items = cardData.map((card, index) => (
    <Card key={index} card={card} index={index} layout />
));


export default function HomePage() {
    const t = useTranslations("Home");

    return (
        <div className=''>
            <Navbar />
            <SecondSection />
            {/* <h1 data-color='red' className='bg-red-500'>{t("hello")}</h1> */}
            {/* <Carousel items={items} /> */}
        </div>
    );
}


