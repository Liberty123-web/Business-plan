import { Link } from "react-router-dom";
import img5 from '../../Images/img5.png';

function PriceHome() {
    return (
        <section className="flex w-full h-auto flex-col justify-center items-center ">

            <div className="w-full max-w-7xl flex flex-col px-6 lg:flex-row gap-20 justify-center items-stretch mb-32">

                {/* Intro Card */}
                <div className="flex-1 shadow-sm flex flex-col justify-center items-center rounded-2xl p-10">
                    <h1 className="text-4xl font-bold text-center text-gray-800">
                        Check out our most popular choises
                    </h1>

                    <p className="text-gray-600 text-md text-center mt-4 max-w-md">
                        Check out our most popular choices, carefully selected to deliver outstanding quality,
                        reliable performance, modern design, and exceptional value for every customer.
                    </p>
                </div>

                {/* Pricing Card 1 */}
                <div className="flex-1 bg-gray-100 rounded-2xl p-10 flex flex-col">
                    <h1 className="text-2xl font-bold mt-5">
                        Startup
                    </h1>

                    <h3 className="text-6xl text-blue-700 mt-5">
                        $58
                    </h3>

                    <p className="text-md mt-5 text-gray-600">
                        We offer a range of pricing plans to suit your needs, whether you're a startup, small business, or enterprise.
                    </p>

                    <div className="w-full h-0.5 bg-gray-300 mt-6"></div>

                    <span className="flex flex-col gap-2 mt-10">
                        <h4>. Picture library</h4>
                        <h4>. 24h support</h4>
                        <h4>. 24h support</h4>
                        <h4>. Template library</h4>
                        <h4>. 400 GB cloud storage</h4>
                    </span>

                    <Link to="/pricing" className="mt-auto">
                        <button className="mt-8 outline-2 outline-blue-700 text-blue-700 font-bold px-6 py-2 rounded-lg">
                            Choose pricing
                        </button>
                    </Link>
                </div>

                {/* Pricing Card 2 */}
                <div className="flex-1 outline-3 outline-blue-700 rounded-2xl p-10 flex flex-col">
                    <h1 className="text-2xl font-bold mt-5">
                        Startup
                    </h1>

                    <h3 className="text-6xl text-blue-700 mt-5">
                        $58
                    </h3>

                    <p className="text-md mt-5 text-gray-600">
                        We offer a range of pricing plans to suit your needs, whether you're a startup, small business, or enterprise.
                    </p>

                    <div className="w-full h-0.5 bg-gray-300 mt-6"></div>

                    <span className="flex flex-col gap-2 mt-10">
                        <h4>. Picture library</h4>
                        <h4>. 24h support</h4>
                        <h4>. 24h support</h4>
                        <h4>. Template library</h4>
                        <h4>. 400 GB cloud storage</h4>
                    </span>

                    <Link to="/pricing" className="mt-auto">
                        <button className="mt-8 bg-blue-700 text-white font-bold px-6 py-2 rounded-lg">
                            Choose pricing
                        </button>
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            <div
                className="w-full h-105 lg:h-125 bg-cover bg-center bg-no-repeat relative flex items-center justify-center mb-10"
                style={{ backgroundImage: `url(${img5})` }}>

                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative text-center text-white flex flex-col items-center gap-5 px-6 max-w-4xl">
                    <h5 className="text-blue-200 text-2xl">
                        To compliment your idea
                    </h5>

                    <h2 className="text-white text-4xl">
                        Perfect business template that you will love with all heart
                    </h2>

                    <Link to="/contact">
                        <button className="mt-5 text-white px-10 py-3 outline-2 outline-blue-700 rounded-lg">
                            contact us
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default PriceHome;
