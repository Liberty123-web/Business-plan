import { Link } from "react-router-dom";

function FootHome() {
    return (
        <section className="w-full h-auto flex flex-col bg-black justify-center items-center px-4">

            <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-30 p-5">

                <div className="flex flex-col justify-center gap-3 w-full sm:w-80 h-auto lg:h-70">
                    <h1 className="text-white text-3xl lg:text-4xl font-bold">
                        LIBERTY
                    </h1>

                    <p className="text-gray-400 text-sm">
                        We are a business consulting company dedicated to helping businesses thrive in competitive markets.
                        Our team of experts provides tailored solutions to drive growth and success.
                    </p>
                </div>

                <div className="w-full sm:w-80 flex flex-col justify-center h-auto lg:h-70">
                    <b className="text-white text-lg">Important</b>

                    <ul className="text-gray-400 flex flex-col gap-2 mt-3">
                        <li>Timeline</li>
                        <li>News</li>
                        <li>Licensing</li>
                        <li>Insight</li>
                    </ul>
                </div>

                <div className="flex flex-col justify-center w-full sm:w-80 h-auto lg:h-70">
                    <b className="text-white text-lg">Categories</b>

                    <ul className="text-gray-400 flex flex-col gap-2 mt-3">
                        <li>Strategy</li>
                        <li>Terms & conditions</li>
                        <li>Services</li>
                        <li>FAQ</li>
                    </ul>
                </div>

            </div>

            <div className="w-full max-w-5xl h-0.5 bg-gray-500 mx-auto mb-10 lg:mb-20"></div>

            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-100 mb-10 lg:mb-20">
                <p className="text-gray-400 text-sm text-center">
                    Liberty 2026 Handles.
                </p>

                <span className="text-gray-400 text-sm text-center flex flex-wrap justify-center gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact</Link>
                </span>
            </div>

        </section>
    )
}

export default FootHome;
