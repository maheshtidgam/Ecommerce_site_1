
import React from "react";
import BannerImg from "../../assets/banner.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { FaPercent } from "react-icons/fa";

const Banner = () => {


    const features = [
        { icon: <GrSecure className="text-violet-600" />, text: "Quality Products", bgColor: "bg-violet-100 dark:bg-violet-400/30" },
        { icon: <IoFastFood className="text-orange-500" />, text: "Fast Delivery", bgColor: "bg-orange-100 dark:bg-orange-400/30" },
        { icon: <GiFoodTruck className="text-green-500" />, text: "Easy Payment Methods", bgColor: "bg-green-100 dark:bg-green-400/30" },
        { icon: <FaPercent className="text-red-500" />, text: "Get Offers", bgColor: "bg-red-100 dark:bg-red-400/30" },
        
    ];

    return (
        <div className="relative min-h-screen flex justify-center items-center py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Background decorative elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-200 dark:bg-orange-700/20 rounded-full filter blur-3xl opacity-30"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image Section */}
                    <div
                        className="order-1 lg:order-1 transform transition-all duration-500 hover:scale-105"
                        data-aos="fade-right"

                    >
                        <div className="relative  mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/50 to-orange-500/20 rounded-2xl transform rotate-3 scale-105"></div>
                            <img
                                className="relative max-w-full h-auto md:max-w-lg mx-auto object-cover rounded-2xl shadow-xl"
                                src={BannerImg}
                                alt="Winter Sale Banner"
                            />
                            <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg transform rotate-3 font-bold">
                                50% OFF
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1  flex flex-col justify-center gap-6 md:gap-8" data-aos="fade-left">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full">
                                Limited Time Offer
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-orange-600 text-transparent bg-clip-text">
                                Winter Sale Up To 50% Off
                            </h1>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-lg">
                                Discover incredible deals on our premium collection. We're offering top-quality products at unbeatable prices for a limited time. Don't miss out on these exclusive winter offers!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-3 rounded-xl transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm"
                                    data-aos="fade-up"
                                    data-aos-delay={100 * index}
                                >
                                    <div className={`flex-shrink-0 h-12 w-12 ${feature.bgColor} rounded-full flex items-center justify-center shadow-sm`}>
                                        {React.cloneElement(feature.icon, { className: "text-xl" })}
                                    </div>
                                    <p className="font-medium">{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        <button className="mt-4 w-full sm:w-auto bg-gradient-to-r from-violet-600 to-orange-500 text-white font-medium py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
