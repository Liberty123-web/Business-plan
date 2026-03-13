import img4 from "../Images/img4.png";
import { Link } from "react-router-dom";

function Pricing() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="bg-gray-900/60 text-white overflow-hidden relative z-20 w-full flex items-center justify-center h-[60vh] md:h-[70vh]">

                {/* Content */}
                <div className="container mx-auto px-4 text-center z-10">
                    <h1 className="font-bold mb-4
                                text-3xl   
                                sm:text-4xl 
                                md:text-5xl 
                                lg:text-6xl
                            ">
                        Take The Perfect Pricing Pattern
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl lg:text-xl">
                        We help businesses grow and succeed in competitive markets.
                    </p>
                </div>

                {/* Background Image */}
                <img
                    src={img4}
                    alt="Business Plan"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />

            </div>

            <div className="w-full max-w-7xl flex flex-col px-6 lg:flex-row gap-20 justify-center items-center py-20">

                {/* Startup card*/}
    
                  <div className="flex-1 outline-1 justify-center items-center outline-gray-200 rounded-2xl p-10 flex flex-col">

                    <h1 className="text-2xl font-bold mt-5">
                        Startup
                    </h1>

                    <h3 className="text-6xl text-blue-700 mt-5">
                        $58
                    </h3>

                    <div className="w-full h-0.5 bg-gray-300 mt-6"></div>

                    <span className="flex flex-col gap-2 mt-10">
                        <h4>. Picture library</h4>
                        <h4>. 24h support</h4>
                        <h4>. 24h support</h4>
                        <h4>. Template library</h4>
                        <h4>. 400 GB cloud storage</h4>
                    </span>

                    <Link to="/contact" className="mt-auto">
                        <button className="mt-8 outline-2 outline-blue-700 text-blue-700 font-bold px-15 py-2 rounded-lg">
                            Choose startup
                        </button>
                    </Link>
                </div>

                {/* Pricing Card 1 */}
                <div className="flex-1 bg-gray-100 justify-center outline-2 outline-blue-700 items-center rounded-2xl p-10 flex flex-col">
                    <h1 className="text-xl font-bold mt-5 text-white  text-center w-50 rounded-2xl bg-blue-700">
                         Most popular
                    </h1>

                    <h3 className="text-6xl text-blue-700 mt-5">
                        $99
                    </h3>

                    <div className="w-full h-0.5 bg-gray-300 mt-6"></div>

                    <span className="flex flex-col gap-2 mt-10">
                        <h4>. Everything in startup</h4>
                        <h4>. Priority support</h4>
                        <h4>. Advanced analytics</h4>
                        <h4>. 1 TB cloud storage</h4>
                    </span>

                    <Link to="/contact" className="mt-auto">
                        <button className="mt-8 outline-2 text-white bg-blue-700 font-bold px-15 py-2 rounded-lg">
                            Choose Business
                        </button>
                    </Link>
                </div>

                {/* Pricing Card 2 */}
                <div className="flex-1 shadow-sm outline-1 outline-gray-300 rounded-2xl p-10 flex flex-col">
                    <h1 className="text-2xl font-bold mt-5">
                        Enterprise
                    </h1>

                    <h3 className="text-6xl text-blue-700 mt-5">
                        $199
                    </h3>

                    <div className="w-full h-0.5 bg-gray-300 mt-6"></div>

                    <span className="flex flex-col gap-2 mt-10">
                        <h4>. Everything in Business</h4>
                        <h4>. Dedicated manager</h4>
                        <h4>. Customer integration</h4>
                        <h4>. unlimited storage</h4>
                    </span>

                    <Link to="/contact" className="mt-auto">
                        <button className="mt-8 bg-blue-700 text-white font-bold px-6 py-2 rounded-lg">
                            Choose Enterprise
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Pricing;