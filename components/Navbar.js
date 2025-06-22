import { ChangeContext, CartContext } from "./context/AppContext";
import { useContext, useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';

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

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
                scrolled 
                    ? "bg-black/90 backdrop-blur-sm h-16" 
                    : "bg-yellow-700/20 h-24"
            }`}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
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
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
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
                </div>

                {/* Shopping Cart */}
                <div className="flex items-center">
                    <Link href="/cart">
                        <div className="relative p-2 transition-transform duration-200 hover:scale-110 active:scale-95">
                            <div className="relative">
                                <span className="text-2xl text-white hover:text-yellow-400 transition-colors duration-200">
                                    🛒
                                </span>
                                {getCartItemCount() > 0 && (
                                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {getCartItemCount() > 99 ? '99+' : getCartItemCount()}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
