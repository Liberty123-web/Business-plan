
import Img1 from '../Images/Img1.png';
import Img2 from '../Images/Img2.jpg';
import Img3 from '../Images/Img3.jpg';

function About() {
    return (
        <div className="w-full flex flex-col gap-20 justify-center items-center py-0 bg-gray-100">

            {/* Hero Section */}
            <div className="bg-gray-800/90 text-white overflow-hidden relative z-20 w-full flex items-center justify-center h-[60vh] md:h-[70vh]">

                <div className="container mx-auto px-4 text-center z-10">

                    <h1 className="font-bold mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        About Our Business
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl lg:text-xl">
                        We help businesses grow and succeed in competitive markets.
                    </p>
                </div>
                
                <img src={Img3} alt="About" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" />
            </div>

            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 px-4">

                <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-start">
                    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl mb-4 text-gray-800">
                        Who We Are
                    </h2>
                    <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-600 mb-4">
                        We specialize in creating comprehensive business plans that help startups and established businesses alike to strategize and achieve their goals. Our team brings years of experience and a passion for helping clients succeed.
                    </p>
                    <div className="flex justify-center md:justify-start gap-8 mt-4">
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2d1dff]">20+</h1>
                            <h5 className="font-bold text-sm md:text-md">Investors</h5>
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#2d1dff]">15k</h1>
                            <h5 className="font-bold text-sm md:text-md">Projects</h5>
                        </div>
                    </div>
                </div>
                {/* Image Column */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img src={Img2} alt="About Us" className="w-full h-auto rounded-lg shadow-lg object-cover" />
                </div>
            </div>

            {/* About Details Section 2 */}
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 px-4">

                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img src={Img3} alt="Business Planning" className="w-full h-auto rounded-lg shadow-lg object-cover" />
                </div>
                
                {/* Text Column */}
                <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-start">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-gray-800">
                        Our Mission
                    </h2>
                    <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-4">
                        We are dedicated to providing tailored solutions that drive growth and success. Our mission is to empower businesses with the tools and strategies they need to thrive in any market environment.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default About;