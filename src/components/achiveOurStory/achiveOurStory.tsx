import Image from 'next/image';

const AchievementStory = () => {
    return (
        <section className="py-16 bg-white ms-0 md:ms-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Left Section: Text */}
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-blue-600">The Tale of Our Achievement Story</h2>
                    <p className="mt-4 text-gray-600">
                        Our achievement story is a testament to teamwork and perseverance. Together, we have overcome challenges,
                        celebrated victories, and created a narrative of progress and success.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">2+ Years</h3>
                            <p className="text-sm text-gray-600">Influencing Digital Landscapes Together</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">11+ Projects</h3>
                            <p className="text-sm text-gray-600">Excellence Achieved Through Success</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">8+ Awards</h3>
                            <p className="text-sm text-gray-600">Our Dedication to Innovation Wins Understanding</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <h3 className="text-2xl font-semibold text-gray-800">99% Happy Clients</h3>
                            <p className="text-sm text-gray-600">Mirrors our Focus on Client Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="mt-8 md:mt-0 md:ml-8">
                    <Image
                        src="/assets/fourthProject.png" // replace with your actual image path
                        alt="Teamwork Image"
                        width={500}
                        height={500}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AchievementStory;
