
import Navbar from '@/components/navbar/Navbar';
import SecondSection from '@/components/secondSection.tsx/secondSection';
import FourthSection from '@/components/fourthSection/FourthSection';
import TheirdSection from '@/components/theirdSection.tsx/theirdSection';
import FifthSection from '@/components/fifthSection/fifthSection';
import AchiveYourPurpose from '@/components/achiveYourPurpose/achiveYourPurpose';
import LastSection from '@/components/lastSection/lastSection';
import Footer from '@/components/footer/footer';


export default function HomePage() {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <SecondSection />
            <TheirdSection />
            <FourthSection />
            <FifthSection />
            <AchiveYourPurpose />
            <LastSection />
            <Footer />
        </div>
    );
}


