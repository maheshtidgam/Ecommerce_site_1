import React from "react";
import BannerImg from "../../assets/banner.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { FaPercent } from "react-icons/fa";

const Banner = () => {
    const features = [
        { 
            icon: <GrSecure className="text-violet-600 dark:text-violet-400 group-hover:scale-125 transition-transform duration-300" />, 
            text: "Quality Products", 
            bgColor: "bg-violet-100 dark:bg-violet-900/40 group-hover:bg-violet-200 dark:group-hover:bg-violet-800/50",
            borderColor: "border-violet-200 dark:border-violet-700/50 group-hover:border-violet-300 dark:group-hover:border-violet-600" 
        },
        { 
            icon: <IoFastFood className="text-orange-500 dark:text-orange-400 group-hover:scale-125 transition-transform duration-300" />, 
            text: "Fast Delivery", 
            bgColor: "bg-orange-100 dark:bg-orange-900/40 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50",
            borderColor: "border-orange-200 dark:border-orange-700/50 group-hover:border-orange-300 dark:group-hover:border-orange-600" 
        },
        { 
            icon: <GiFoodTruck className="text-green-500 dark:text-green-400 group-hover:scale-125 transition-transform duration-300" />, 
            text: "Easy Payment Methods", 
            bgColor: "bg-green-100 dark:bg-green-900/40 group-hover:bg-green-200 dark:group-hover:bg-green-800/50",
            borderColor: "border-green-200 dark:border-green-700/50 group-hover:border-green-300 dark:group-hover:border-green-600" 
        },
        { 
            icon: <FaPercent className="text-red-500 dark:text-red-400 group-hover:scale-125 transition-transform duration-300" />, 
            text: "Get Offers", 
            bgColor: "bg-red-100 dark:bg-red-900/40 group-hover:bg-red-200 dark:group-hover:bg-red-800/50",
            borderColor: "border-red-200 dark:border-red-700/50 group-hover:border-red-300 dark:group-hover:border-red-600" 
        },
    ];

    return (
        <div className="relative min-h-screen flex justify-center items-center py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
            {/* Enhanced background decorative elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-200 dark:bg-purple-700/30 rounded-full filter blur-3xl opacity-30 dark:opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-200 dark:bg-orange-600/30 rounded-full filter blur-3xl opacity-30 dark:opacity-40"></div>
            
            {/* Dark mode only decorative lights */}
            <div className="hidden dark:block absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_5px_rgba(96,165,250,0.5)] animate-pulse"></div>
            <div className="hidden dark:block absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_20px_8px_rgba(192,132,252,0.5)] animate-pulse"></div>
            <div className="hidden dark:block absolute top-1/2 left-1/4 w-2 h-2 bg-green-400 rounded-full shadow-[0_0_15px_5px_rgba(74,222,128,0.5)] animate-pulse"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image Section with enhanced effects */}
                    <div
                        className="order-1 lg:order-1 transform transition-all duration-500 hover:scale-105 relative group"
                        data-aos="fade-right"
                    >
                        <div className="relative mx-auto overflow-hidden rounded-2xl">
                            {/* Enhanced color overlay for dark mode with hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/50 to-orange-500/20 dark:from-purple-600/60 dark:to-orange-600/30 rounded-2xl transform rotate-3 scale-105 dark:shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500"></div>
                            
                            <img
                                className="relative max-w-full h-auto md:max-w-lg mx-auto object-cover rounded-2xl shadow-xl dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)] dark:border dark:border-gray-700/50 group-hover:shadow-2xl transition-shadow duration-300"
                                src={BannerImg}
                                alt="Winter Sale Banner"
                            />
                            
                            {/* Enhanced sale badge with glow effect in dark mode - hover animation */}
                            <div className="absolute bottom-2 right-1 md:bottom-6 md:right-6 bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-600 dark:to-orange-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg dark:shadow-[0_0_15px_rgba(239,68,68,0.5)] transform rotate-3 font-bold group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl dark:group-hover:shadow-[0_0_20px_rgba(239,68,68,0.7)] transition-all duration-300">
                                <span className="dark:animate-pulse">50% OFF</span>
                            </div>
                        </div>
                        
                        {/* New: Hover visible glowing orbs */}
                        <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-400/40 rounded-full filter blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-orange-400/40 rounded-full filter blur-xl opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                    </div>

                    {/* Content Section with dark mode enhancements */}
                    <div className="order-1 flex flex-col justify-center gap-6 md:gap-8" data-aos="fade-left">
                        <div className="space-y-4">
                            <div className="inline-block px-4 py-1 bg-orange-100 dark:bg-orange-950/70 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-full border border-orange-200 dark:border-orange-700/50 dark:shadow-[0_0_10px_rgba(249,115,22,0.2)] hover:bg-orange-200 dark:hover:bg-orange-900/80 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                                Limited Time Offer
                            </div>
                            
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-orange-600 dark:from-violet-400 dark:to-orange-400 text-transparent bg-clip-text drop-shadow-sm hover:from-violet-500 hover:to-orange-500 dark:hover:from-violet-300 dark:hover:to-orange-300 transition-all duration-300">
                                Winter Sale Up To 50% Off
                            </h1>
                            
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-lg hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                                Discover incredible deals on our premium collection. We're offering top-quality products at unbeatable prices for a limited time. Don't miss out on these exclusive winter offers!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`group flex items-center gap-4 p-3 rounded-xl transform transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:-translate-y-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border ${feature.borderColor} hover:bg-white dark:hover:bg-gray-800`}
                                    data-aos="fade-up"
                                    data-aos-delay={100 * index}
                                >
                                    <div className={`flex-shrink-0 h-12 w-12 ${feature.bgColor} rounded-full flex items-center justify-center shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.2)] group-hover:shadow-md transition-all duration-300`}>
                                        {React.cloneElement(feature.icon, { className: "text-xl" })}
                                    </div>
                                    <p className="font-medium dark:text-gray-200 group-hover:font-semibold group-hover:scale-105 transition-all duration-300">{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        <button className="mt-4 w-full sm:w-auto bg-gradient-to-r from-violet-600 to-orange-500 dark:from-violet-500 dark:to-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg dark:shadow-[0_4px_20px_rgba(124,58,237,0.5)] transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:hover:shadow-[0_8px_25px_rgba(124,58,237,0.6)] relative overflow-hidden group">
                            <span className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                            <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">Shop Now</span>
                            {/* New: Add hover effect dots that appear on button hover */}
                            <span className="absolute w-2 h-2 rounded-full bg-white/70 -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="absolute w-2 h-2 rounded-full bg-white/70 -bottom-1 -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;