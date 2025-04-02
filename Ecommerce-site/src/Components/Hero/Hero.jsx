import React from 'react'
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Upto 50% Off on all Men's Wear",
        description: "Get the best deals on men’s fashion with discounts up to 50%. Shop now and upgrade your wardrobe!",
        bgColor: "from-blue-400 to-violet-500"
    },
    {
        id: 2,
        img: Image2,
        title: "Upto 30% Off on all Women's Wear",
        description: "Refresh your style with the latest women's fashion trends at up to 30% off. Limited-time offer!",
        bgColor: "from-pink-400 to-rose-500"
    },
    {
        id: 3,
        img: Image3,
        title: "Upto 70% Off on all products sale",
        description: "Biggest sale of the season! Enjoy discounts of up to 70% on all products. Grab your favorites now!",
        bgColor: "from-amber-400 to-orange-500"
    }
]

const Hero = ({ handleOrderPopup }) => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    return (
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gradient-to-b from-gray-50 to-gray-100 flex justify-center dark:from-slate-900 dark:to-slate-950 dark:text-white duration-300'>

            <div className='absolute w-full h-full overflow-hidden'>
                <div className='absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
                <div className='absolute bottom-0 right-0 w-44 h-44 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3'></div>
                <div className='absolute top-1/3 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl'></div>
                <div className='absolute bottom-1/4 right-1/3 w-24 h-24 bg-secondary/20 rounded-full blur-xl'></div>
            </div>

            <div className='h-[700px] w-[700px] bg-gradient-to-r from-primary/40 to-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8] backdrop-blur-3xl'></div>


            <div className='container pb-8 sm:pb-0 z-10 mt-16 sm:mt-20'>
                <Slider {...settings}>
                    {ImageList.map((item, idx) => (
                        <div key={idx} className="px-4 py-8">
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                                {/* Text content */}
                                <div className='flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    {/* Discount badge */}
                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="600"
                                        data-aos-delay="200"
                                        className="self-start sm:self-start inline-block bg-white dark:bg-slate-800 px-4 py-1 rounded-full shadow-lg mb-2"
                                    >
                                        <span className={`bg-gradient-to-r ${item.bgColor} bg-clip-text text-transparent font-bold`}>
                                            LIMITED TIME OFFER
                                        </span>
                                    </div>

                                    {/* Title with text shadow */}
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className={`text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${item.bgColor} bg-clip-text text-transparent drop-shadow-md`}
                                    >
                                        {item.title}
                                    </h1>

                                    {/* Description */}
                                    <p
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        className='text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-md'
                                    >
                                        {item.description}
                                    </p>

                                    {/* Button with animation */}
                                    <div
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                        className="mt-2"
                                    >
                                        <button
                                            onClick={() => handleOrderPopup()}
                                            className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white rounded-full py-3 px-8 font-medium shadow-lg shadow-primary/30 relative overflow-hidden group'
                                        >
                                            <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                                            Order Now
                                        </button>
                                    </div>
                                </div>

                                {/* Image - fixed z-index and positioning */}
                                <div className='order-1 sm:order-2 flex items-center justify-center'>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        data-aos-duration="800"
                                        className='relative z-20 transition-all' // Increased z-index to ensure images appear above other elements
                                    >
                                        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                        <img
                                            src={item.img}
                                            alt={`Slider Image ${idx + 1}`}
                                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-contain mx-auto drop-shadow-xl transform transition-transform hover:scale-105 duration-700 relative z-30' // Made sure image has highest z-index
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero