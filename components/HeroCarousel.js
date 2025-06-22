import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { motion } from "framer-motion";
import Link from 'next/link';

function HeroCarousel() {
    const carouselSettings = {
        autoPlay: true,
        autoFocus: true,
        emulateTouch: true,
        transitionTime: 1000,
        showThumbs: false,
        showStatus: false,
        infiniteLoop: true,
        swipeAnimationHandler: true,
        swipeable: true,
        interval: 5000,
        stopOnHover: true,
    };

    const slideVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
                duration: 1.2,
                ease: "easeOut"
            } 
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.8,
                delay: 0.3
            } 
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6,
                delay: 0.6
            } 
        }
    };

    const heroSlides = [
        {
            id: 1,
            title: "Delicious Food",
            subtitle: "Delivered to Your Door",
            description: "Experience the finest cuisine crafted with passion and delivered with care. From gourmet burgers to artisanal pizzas, every bite tells a story.",
            image: "https://images.unsplash.com/photo-1504674900240-9c2916b9d4e8?w=1600&h=900&fit=crop",
            cta: "Order Now",
            ctaLink: "#menu"
        },
        {
            id: 2,
            title: "Fresh & Fast",
            subtitle: "Quality You Can Taste",
            description: "Fresh ingredients, expert chefs, and lightning-fast delivery. Your perfect meal is just a click away.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1600&h=900&fit=crop",
            cta: "Explore Menu",
            ctaLink: "#menu"
        },
        {
            id: 3,
            title: "Special Offers",
            subtitle: "Save While You Savor",
            description: "Exclusive deals and discounts on your favorite dishes. Great food shouldn't break the bank.",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&h=900&fit=crop",
            cta: "View Offers",
            ctaLink: "#offer"
        }
    ];

    return (
        <div className="relative w-full mb-16">
            <Carousel
                {...carouselSettings}
                className="z-10 w-full mx-auto"
            >
                {heroSlides.map((slide) => (
                    <motion.div
                        key={slide.id}
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden"
                    >
                        {/* Background Image with Overlay */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <motion.div
                                variants={textVariants}
                                className="mb-6"
                            >
                                <h2 className="text-yellow-400 text-lg md:text-xl font-semibold mb-2 tracking-wider uppercase">
                                    {slide.subtitle}
                                </h2>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-Koulen text-white mb-6 tracking-wider">
                                    {slide.title}
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                                    {slide.description}
                                </p>
                            </motion.div>

                            <motion.div
                                variants={buttonVariants}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                            >
                                <Link href={slide.ctaLink}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                                    >
                                        {slide.cta}
                                    </motion.button>
                                </Link>
                                <Link href="/cart">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                                    >
                                        View Cart
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-10 left-10 opacity-20">
                            <motion.div
                                animate={{ 
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-6xl"
                            >
                                🍔
                            </motion.div>
                        </div>

                        <div className="absolute top-20 right-20 opacity-20">
                            <motion.div
                                animate={{ 
                                    y: [0, 10, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{ 
                                    duration: 4, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-5xl"
                            >
                                🍕
                            </motion.div>
                        </div>

                        <div className="absolute bottom-20 left-20 opacity-20">
                            <motion.div
                                animate={{ 
                                    y: [0, -15, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{ 
                                    duration: 3.5, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-4xl"
                            >
                                🍟
                            </motion.div>
                        </div>

                        <div className="absolute bottom-10 right-10 opacity-20">
                            <motion.div
                                animate={{ 
                                    y: [0, 8, 0],
                                    rotate: [0, -8, 0]
                                }}
                                transition={{ 
                                    duration: 2.8, 
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="text-5xl"
                            >
                                🥤
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </Carousel>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-yellow-400 text-2xl"
                >
                    ↓
                </motion.div>
                <p className="text-yellow-400 text-sm mt-2 text-center">Scroll to explore</p>
            </motion.div>
        </div>
    );
}

export default HeroCarousel;
