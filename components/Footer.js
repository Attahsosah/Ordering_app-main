import Image from 'next/image';
import Link from 'next/link';

function Footer() {
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
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Top Section - Compact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                <span className="text-xl">🍔</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-Koulen text-white">FoodHub</h3>
                                <p className="text-yellow-400 text-sm mb-4 leading-relaxed">
                                    Bringing the world&apos;s finest cuisines to your doorstep. 
                                    From sizzling burgers to gourmet pizzas, we&apos;ve got your cravings covered.
                                </p>
                            </div>
                        </div>
                        
                        {/* Newsletter Signup - Compact */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Stay updated with our newsletter"
                                    className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 text-sm"
                                />
                                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-r-lg font-semibold transition-all duration-300 text-sm hover:scale-105 active:scale-95">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-Koulen text-white mb-4 flex items-center">
                            <span className="w-6 h-0.5 bg-yellow-500 mr-2"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group text-sm"
                                    >
                                        <div className="flex items-center">
                                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {link.name}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-lg font-Koulen text-white mb-4 flex items-center">
                            <span className="w-6 h-0.5 bg-yellow-500 mr-2"></span>
                            Legal
                        </h4>
                        <ul className="space-y-2">
                            {legalLinks.map((link, index) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center group text-sm"
                                    >
                                        <div className="flex items-center">
                                            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                            {link.name}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stats Section - Compact */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center group transition-transform duration-200 hover:scale-105">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            <span>50K+</span>
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Happy Customers</div>
                    </div>
                    <div className="text-center group transition-transform duration-200 hover:scale-105">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            <span>100+</span>
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Restaurant Partners</div>
                    </div>
                    <div className="text-center group transition-transform duration-200 hover:scale-105">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            <span>15min</span>
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Avg Delivery</div>
                    </div>
                    <div className="text-center group transition-transform duration-200 hover:scale-105">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                            <span>24/7</span>
                        </div>
                        <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">Support</div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            className="w-10 h-10 bg-white/10 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        >
                            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                                {social.icon}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © 2024 FoodHub. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>Made with ❤️ for food lovers</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
