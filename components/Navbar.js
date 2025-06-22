import { ChangeContext, CartContext } from "./context/AppContext";
import { useContext, useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";

function Navbar() {
    const [clicked, setClicked] = useContext(ChangeContext);
    const [cart] = useContext(CartContext);
    const [scrolled, setScrolled] = useState(false);

    const scrollChange = () => {
        if (window.scrollY > 60) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollChange);
        return () => {
            window.removeEventListener("scroll", scrollChange);
        };
    }, []);

    const getCartItemCount = () => {
        return cart.reduce((count, item) => count + (item.quantity || 1), 0);
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
                scrolled 
                    ? "bg-black/90 backdrop-blur-sm h-16" 
                    : "bg-yellow-700/20 h-24"
            }`}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center"
                >
                    <Link href="#home" className="group">
                        <Image
                            src="/img/logo_transparent.png"
                            alt="Food Ordering App Logo"
                            width={250}
                            height={100}
                            className="transition-transform duration-300 group-hover:scale-105 object-contain h-16 md:h-20"
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Navigation Links */}
                <motion.div
                    variants={itemVariants}
                    className="hidden md:flex items-center space-x-8"
                >
                    <Link href="#offer">
                        <span className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer font-medium">
                            Offers
                        </span>
                    </Link>
                    <Link href="#menu">
                        <span className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer font-medium">
                            Our Menu
                        </span>
                    </Link>
                    <span className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer font-medium">
                        Blog
                    </span>
                    <span className="text-white hover:text-yellow-400 transition-colors duration-200 cursor-pointer font-medium">
                        Contact
                    </span>
                </motion.div>

                {/* Shopping Cart */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center"
                >
                    <Link href="/cart">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative p-2"
                        >
                            <div className="relative">
                                <span className="text-2xl text-white hover:text-yellow-400 transition-colors duration-200">
                                    🛒
                                </span>
                                {getCartItemCount() > 0 && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                                    >
                                        {getCartItemCount() > 99 ? '99+' : getCartItemCount()}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    );
}

export default Navbar;
