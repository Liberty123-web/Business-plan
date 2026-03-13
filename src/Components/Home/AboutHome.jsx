import { Link } from "react-router-dom";
import Img2 from '../../Images/img2.jpg';
import Img3 from '../../Images/img3.jpg';

function AboutHome() {
  return (
    <div className="w-full flex flex-col gap-20 justify-center items-center py-20 px-4">

      {/* First Section */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Text Column */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-start">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl mb-4 text-gray-800">
            About Our Business Planning Services
          </h2>

          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-gray-600 mb-4">
            We specialize in creating comprehensive business plans that help startups and established businesses alike to strategize and achieve their goals.
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
          <img 
            src={Img2} 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg object-cover" 
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* Image Column */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            src={Img3} 
            alt="Business Planning" 
            className="w-full h-auto rounded-lg shadow-lg object-cover" 
          />
        </div>

        {/* Text Column */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-gray-800">
            When you put your mind to it
          </h2>

          <p className="text-base sm:text-lg md:text-lg text-gray-600 mb-4">
            We specialize in creating comprehensive business plans that help startups and established businesses alike to strategize and achieve their goals.
          </p>

          <Link to="/about">
            <button className="bg-[#2d1dff] text-white px-6 py-3 rounded-md mt-4">
              Read more
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default AboutHome;
