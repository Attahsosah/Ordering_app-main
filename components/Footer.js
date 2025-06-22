import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const socialLinks = [
        { name: 'Facebook', icon: '📘', href: '#' },
        { name: 'Twitter', icon: '🐦', href: '#' },
        { name: 'Instagram', icon: '📷', href: '#' },
        { name: 'TikTok', icon: '🎵', href: '#' }
    ];

    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Our Menu', href: '/menu' },
        { name: 'Contact', href: '/contact' },
        { name: 'Help', href: '/help' }
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Main Footer Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
                {/* Top Section - Compact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                <span className="text-xl">🍔</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-Koulen text-white">FoodHub</h3>
                                <p className="text-yellow-400 text-sm">Delicious Delivered</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Bringing the world's finest cuisines to your doorstep. 
                            From sizzling burgers to gourmet pizzas, we've got your cravings covered.
                        </p>
                        
                        {/* Newsletter Signup - Compact */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Stay updated with our newsletter"
                                    className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 text-sm"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-r-lg font-semibold transition-colors duration-300 text-sm"
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-Koulen text-white mb-4 flex items-center">
                            <span className="w-6 h-0.5 bg-yellow-500 mr-2"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group text-sm"
                                    >
                                        <div className="flex items-center">
                                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {link.name}
                                        </div>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-Koulen text-white mb-4 flex items-center">
                            <span className="w-6 h-0.5 bg-yellow-500 mr-2"></span>
                            Legal
                        </h4>
                        <ul className="space-y-2">
                            {legalLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group text-sm"
                                    >
                                        <div className="flex items-center">
                                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {link.name}
                                        </div>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Stats Section - Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
                >
                    <motion.div 
                        className="text-center group"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                50K+
                            </motion.span>
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Happy Customers</div>
                    </motion.div>
                    <motion.div 
                        className="text-center group"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                100+
                            </motion.span>
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Restaurant Partners</div>
                    </motion.div>
                    <motion.div 
                        className="text-center group"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                15min
                            </motion.span>
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Average Delivery</div>
                    </motion.div>
                    <motion.div 
                        className="text-center group"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                24/7
                            </motion.span>
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Customer Support</div>
                    </motion.div>
                </motion.div>

                {/* Social Media Section - Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-6"
                >
                    <h4 className="text-lg font-Koulen text-white mb-4 flex items-center justify-center">
                        <span className="w-6 h-0.5 bg-yellow-500 mr-2"></span>
                        Follow Us
                        <span className="w-6 h-0.5 bg-yellow-500 ml-2"></span>
                    </h4>
                    <div className="flex justify-center space-x-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-lg hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 group overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                ></motion.div>
                                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    {social.icon}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Section - Compact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="border-t border-white/10 pt-6"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-xs">
                                © 2024 FoodHub. All rights reserved. Made with ❤️ for food lovers everywhere
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 text-xs">
                            <motion.span 
                                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                🌍 English
                            </motion.span>
                            <motion.span 
                                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                💳 Secure Payment
                            </motion.span>
                            <motion.span 
                                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                🚚 Fast Delivery
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Floating Elements - Smaller */}
            <div className="absolute top-8 right-8 opacity-5">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-2 border-yellow-500 rounded-full"
                ></motion.div>
            </div>
            <div className="absolute bottom-8 left-8 opacity-5">
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-yellow-400 rounded-full"
                ></motion.div>
            </div>
        </footer>
    );
}

export default Footer;
