import img1 from '../../Images/Img1.png'

function Hemo() {
    return (
        <div className="bg-gray-900/60 text-white overflow-hidden relative z-20 w-full flex items-center justify-center h-screen">

            {/* Content */}
            <div className="container mx-auto px-4 text-center z-10">
                <h1 className="font-bold mb-4
                    text-3xl   
                    sm:text-4xl 
                    md:text-5xl 
                    lg:text-6xl
                ">
                    Perfect Business Planing
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl lg:text-xl">
                    We help businesses grow and succeed in competitive markets.
                </p>
            </div>

            {/* Background Image */}
            <img 
                src={img1} 
                alt="Business Plan"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />

        </div>
    )
}

export default Hemo;
