import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState,useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/autoplay';
// import Swiper styles

import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCards, Autoplay, FreeMode, Pagination } from "swiper"

function Items() {
    const [scrolled, setScrolled] = useState(false)
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });

    const scrollChange = () => {
        if (window.scrollY > 60){
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", scrollChange)

        return () => {
            window.removeEventListener("scroll", scrollChange)
        }
    })
    useEffect(() => {
        AOS.init();
    },[])

    // Countdown timer effect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return { hours: 23, minutes: 59, seconds: 59 }; // Reset for demo
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const offers = [
        {
            id: 1,
            title: "Mega Burger Combo",
            originalPrice: 24.99,
            discountedPrice: 16.99,
            discount: 32,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
            description: "Double patty burger with fries & drink",
            badge: "🔥 HOT DEAL",
            timeLeft: "Limited Time",
            category: "Burgers"
        },
        {
            id: 2,
            title: "Pizza Party Pack",
            originalPrice: 39.99,
            discountedPrice: 29.99,
            discount: 25,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
            description: "2 large pizzas + garlic bread + soda",
            badge: "🎉 PARTY FAVORITE",
            timeLeft: "Weekend Special",
            category: "Pizza"
        },
        {
            id: 3,
            title: "Pasta Paradise",
            originalPrice: 18.99,
            discountedPrice: 12.99,
            discount: 32,
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&h=400&fit=crop",
            description: "Creamy carbonara with garlic bread",
            badge: "⭐ CUSTOMER CHOICE",
            timeLeft: "Flash Sale",
            category: "Pasta"
        },
        {
            id: 4,
            title: "Sweet Treats Bundle",
            originalPrice: 15.99,
            discountedPrice: 9.99,
            discount: 38,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
            description: "Chocolate cake + ice cream + coffee",
            badge: "🍰 DESSERT TIME",
            timeLeft: "Afternoon Special",
            category: "Desserts"
        },
        {
            id: 5,
            title: "Healthy Bowl",
            originalPrice: 22.99,
            discountedPrice: 17.99,
            discount: 22,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
            description: "Quinoa bowl with grilled chicken",
            badge: "🥗 HEALTHY CHOICE",
            timeLeft: "Lunch Special",
            category: "Salads"
        },
        {
            id: 6,
            title: "Drinks & Sides",
            originalPrice: 12.99,
            discountedPrice: 7.99,
            discount: 38,
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop",
            description: "Any drink + fries + onion rings",
            badge: "🥤 COMBO DEAL",
            timeLeft: "Happy Hour",
            category: "Sides"
        }
    ];

    return (
        <>
        <div className="items-center z-40 shadow-lg gradient from-black bg-gradient-to-b to-zinc-800   overflow-x-auto ">
            <Carousel
        
        autoPlay={true}
        delay={1000}
        autoFocus={true}
        emulateTouch={true}
        transitionTime={1000}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        swipeAnimationHandler={true}
        swipeable={true}
        

        className="z-10  lg:mx-44 bg-bg13  mb-28 "
       


        >   
        <div
         className="lg:mx-28 bg-no-repeat bg-blur bg-opacity-50 p-2 z-50 bg-yellow-600 transition-opacity duration-1000">

            <h1 className=" pl-11 font-bold  text-yellow-700 items-center justify-center text-9xl py-10 font-Koulen bg-bg10" >The best food in town</h1>
            </div>
            {/* <div className="bg-bg10 ">
                <div className="flex space-x-4 p-4">

                <div className="hover:scale-110  hover:w-96 w-96 hover:z-30 items-center border-r-2 border-gray-700 h-96  rounded-lg bg-bg6  bg-cover transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-red-900 p-10 ">The Slider</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  w-full   items-center border-r-2 border-gray-700 h-96  rounded-lg bg-bg2 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-gray-700 p-10 ">Denim Delight</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg3 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-green-900 p-10 ">The Slider</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>

                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer ">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>
                <div className="hover:scale-110 hover:pr-5  items-center border-r-2 border-gray-700 h-96 w-full rounded-lg bg-bg4 transition transform duration-1000 ease-out bg-transparent hover:cursor-pointer">
                    <h1 className="font-bold shadow-lg bg-purple-900 p-10 text-xl">The Royal Flush</h1>
                </div>

                
               
            </div>
        
        </div> */}
        </Carousel>
        </div>

        <section id="offer" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-600 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-16 h-1 bg-yellow-500"></div>
                        <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            Special Offers
                        </span>
                        <div className="w-16 h-1 bg-yellow-500"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-Koulen text-white mb-4">
                        Amazing Deals
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Limited time offers that will make your taste buds dance! 
                        Don't miss out on these incredible savings.
                    </p>

                    {/* Countdown Timer */}
                    <div
                        className="flex justify-center items-center space-x-4 mt-8"
                    >
                        <div className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-4">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-400">
                                    {timeLeft.hours.toString().padStart(2, '0')}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}
                                </div>
                                <div className="text-sm text-gray-400">Time Remaining</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offers Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="group relative"
                        >
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={offer.image}
                                        alt={offer.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    
                                    {/* Discount Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            -{offer.discount}%
                                        </span>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                            {offer.category}
                                        </span>
                                    </div>

                                    {/* Special Badge */}
                                    <div className="absolute bottom-4 left-4">
                                        <span className="bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-bold">
                                            {offer.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                                        {offer.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm mb-4">
                                        {offer.description}
                                    </p>

                                    {/* Pricing */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl font-bold text-yellow-400">
                                                ${offer.discountedPrice}
                                            </span>
                                            <span className="text-gray-500 line-through">
                                                ${offer.originalPrice}
                                            </span>
                                        </div>
                                        <span className="text-green-400 text-sm font-semibold">
                                            Save ${(offer.originalPrice - offer.discountedPrice).toFixed(2)}
                                        </span>
                                    </div>

                                    {/* Time Left */}
                                    <div className="text-yellow-400 text-sm font-medium mb-4">
                                        ⏰ {offer.timeLeft}
                                    </div>

                                    {/* CTA Button */}
                                    <button
                                        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/25"
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8">
                        <h3 className="text-2xl md:text-3xl font-Koulen text-white mb-4">
                            Hungry for More?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Join our loyalty program and get exclusive offers, early access to deals, 
                            and special member-only discounts!
                        </p>
                        <button
                            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                        >
                            Join Now - It's Free!
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Items
