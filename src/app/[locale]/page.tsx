
import Navbar from '@/components/navbar/Navbar';
import SecondSection from '@/components/secondSection.tsx/secondSection';
import FourthSection from '@/components/fourthSection/FourthSection';
import TheirdSection from '@/components/theirdSection.tsx/theirdSection';
import FifthSection from '@/components/fifthSection/fifthSection';


export default function HomePage() {

    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <SecondSection />
            <TheirdSection />
            <FourthSection />
            <FifthSection />
        </div>
    );
}


