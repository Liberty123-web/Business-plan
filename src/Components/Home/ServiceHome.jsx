import img4 from '../../Images/img4.png'
import { Link } from "react-router-dom";

function ServiceHome() {
    return (
        <>
            <section className="servicspot flex flex-col justify-center items-center w-full mb-10">

                <div className="w-full flex flex-col justify-center items-center gap-8 sm:gap-10">

                    <div className="text-center">
                        <h5 className="text-blue-800 text-base sm:text-lg">
                            To compliment your ideas
                        </h5>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            Services we can provide
                        </h3>
                    </div>

                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 sm:px-6 gap-6 place-items-center">

                        <Link to="/services" className="w-full max-w-sm">
                            <div className="w-full h-full min-h-75 flex flex-col pt-8 items-center justify-center rounded-r-2xl  outline-1 outline-gray-400 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                <i className="bi bi-cloud-lightning text-3xl text-blue-700"></i>
                                <h3 className="text-center text-lg sm:text-xl font-bold mt-3">
                                    Marketing strategies
                                </h3>
                                <p className="text-center text-gray-600 mt-4 px-4 text-sm sm:text-base">
                                    We develop tailored marketing strategies to help your business reach its target audience effectively.
                                </p>
                            </div>
                        </Link>

                        <Link to="/services" className="w-full max-w-sm">
                            <div className="w-full h-full min-h-75 flex flex-col pt-8 items-center justify-center rounded-r-2xl outline-1 outline-gray-400 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                <i className="bi bi-graph-up-arrow text-3xl text-blue-700 mb-3"></i>
                                <h3 className="text-center text-lg sm:text-xl font-bold">
                                    Consulting and analysis
                                </h3>
                                <p className="text-center text-gray-600 mt-4 px-4 text-sm sm:text-base">
                                    Our experts provide in-depth consulting and analysis to help you make informed business decisions.
                                </p>
                            </div>
                        </Link>

                        <Link to="/services" className="w-full max-w-sm">
                            <div className="w-full h-full min-h-75 flex flex-col pt-8 items-center justify-center rounded-r-2xl outline-1 outline-gray-400 transform transition-transform duration-500 ease-in-out hover:scale-105">
                                <i className="bi bi-display text-3xl text-blue-700"></i>
                                <h3 className="text-center text-lg sm:text-xl font-bold mt-3">
                                    Business plan development
                                </h3>
                                <p className="text-center text-gray-600 mt-4 px-4 text-sm sm:text-base">
                                    We create comprehensive business plans that outline your vision, strategy, and financial projections.
                                </p>
                            </div>
                        </Link>

                    </div>
                </div>
                <a
                    href="https://www.youtube.com/watch?v=9VlvbpXwLJs"
                    className="flex w-full mt-12 relative"
                >
                    <div
                        className="videoSec w-full h-75 sm:h-100 lg:h-130 bg-cover bg-center bg-no-repeat relative flex items-center justify-center "
                        style={{ backgroundImage: `url(${img4})` }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>

                        <div className="absolute text-center text-white px-4">
                            <i className="bi bi-play-fill text-white text-5xl sm:text-6xl lg:text-7xl"></i>
                            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-semibold mt-4">
                                Video introduction
                            </h1>
                            <p className="mt-2 text-sm sm:text-lg">
                                To compliment your ideas
                            </p>
                        </div>
                    </div>
                </a>


            </section>
        </>
    );
}

export default ServiceHome;
