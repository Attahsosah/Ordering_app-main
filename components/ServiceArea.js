import { motion } from 'framer-motion';
import { useState } from 'react';

function ServiceArea() {
    const [selectedArea, setSelectedArea] = useState('downtown');

    const serviceAreas = [
        {
            id: 'downtown',
            name: 'Downtown',
            deliveryTime: '15-20 min',
            coverage: '100%',
            color: 'from-yellow-500 to-yellow-600',
            neighborhoods: ['Financial District', 'Chinatown', 'Little Italy', 'SoHo']
        },
        {
            id: 'midtown',
            name: 'Midtown',
            deliveryTime: '20-25 min',
            coverage: '95%',
            color: 'from-yellow-400 to-yellow-500',
            neighborhoods: ['Times Square', 'Chelsea', 'Gramercy', 'Murray Hill']
        },
        {
            id: 'uptown',
            name: 'Uptown',
            deliveryTime: '25-30 min',
            coverage: '90%',
            color: 'from-yellow-300 to-yellow-400',
            neighborhoods: ['Upper East Side', 'Upper West Side', 'Harlem', 'Washington Heights']
        },
        {
            id: 'brooklyn',
            name: 'Brooklyn',
            deliveryTime: '30-35 min',
            coverage: '85%',
            color: 'from-yellow-200 to-yellow-300',
            neighborhoods: ['Williamsburg', 'DUMBO', 'Park Slope', 'Brooklyn Heights']
        }
    ];

    const pickupLocations = [
        {
            name: 'Downtown Hub',
            address: '123 Main St, Downtown',
            hours: '24/7',
            features: ['Self-Pickup', 'Contactless', 'Drive-Thru']
        },
        {
            name: 'Midtown Express',
            address: '456 Broadway, Midtown',
            hours: '6AM-12AM',
            features: ['Quick Pickup', 'Mobile Orders', 'Curbside']
        },
        {
            name: 'Uptown Station',
            address: '789 Central Park West',
            hours: '7AM-11PM',
            features: ['Parking Available', 'Indoor Seating', 'WiFi']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-4 mb-6">
                        <div className="w-16 h-1 bg-yellow-500"></div>
                        <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                            Service Areas
                        </span>
                        <div className="w-16 h-1 bg-yellow-500"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-Koulen text-white mb-4">
                        We Deliver Everywhere
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        From downtown to uptown, we've got you covered with lightning-fast delivery 
                        and convenient pickup locations across the city.
                    </p>
                </motion.div>

                {/* Service Areas Grid */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {serviceAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group cursor-pointer ${
                                selectedArea === area.id ? 'ring-2 ring-yellow-500' : ''
                            }`}
                            onClick={() => setSelectedArea(area.id)}
                        >
                            <div className={`bg-gradient-to-br ${area.color} p-6 rounded-2xl text-white relative overflow-hidden`}>
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white rounded-full"></div>
                                    <div className="absolute bottom-2 left-2 w-6 h-6 border-2 border-white rounded-full"></div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-2">{area.name}</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Delivery:</span>
                                            <span className="font-semibold">{area.deliveryTime}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Coverage:</span>
                                            <span className="font-semibold">{area.coverage}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Neighborhoods */}
                                    <div className="mt-4 pt-3 border-t border-white/20">
                                        <p className="text-xs opacity-90 mb-2">Popular Areas:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {area.neighborhoods.slice(0, 2).map((neighborhood, idx) => (
                                                <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                                    {neighborhood}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Selection Indicator */}
                                {selectedArea === area.id && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                                    >
                                        <span className="text-yellow-600 text-sm">✓</span>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Interactive Map-like Display */}
                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Map Visualization */}
                        <div className="relative">
                            <h3 className="text-2xl font-Koulen text-white mb-6">Delivery Coverage</h3>
                            <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden">
                                {/* Map-like Grid */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="grid grid-cols-8 grid-rows-6 h-full">
                                        {Array.from({ length: 48 }).map((_, i) => (
                                            <div key={i} className="border border-white/10"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Coverage Zones */}
                                <div className="absolute inset-0 p-4">
                                    <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                                        {serviceAreas.map((area, index) => (
                                            <motion.div
                                                key={area.id}
                                                className={`bg-gradient-to-br ${area.color} rounded-lg relative ${
                                                    selectedArea === area.id ? 'ring-2 ring-white' : ''
                                                }`}
                                                whileHover={{ scale: 1.02 }}
                                                onClick={() => setSelectedArea(area.id)}
                                            >
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-white font-bold text-sm">{area.name}</span>
                                                </div>
                                                <motion.div
                                                    className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full"
                                                    animate={{ scale: [1, 1.2, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                ></motion.div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Delivery Icons */}
                                <div className="absolute top-4 left-4">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Area Details */}
                        <div>
                            <h3 className="text-2xl font-Koulen text-white mb-6">Area Details</h3>
                            {serviceAreas.map(area => (
                                <motion.div
                                    key={area.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ 
                                        opacity: selectedArea === area.id ? 1 : 0.3,
                                        x: selectedArea === area.id ? 0 : 20
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className={`mb-4 p-4 rounded-lg border ${
                                        selectedArea === area.id 
                                            ? 'border-yellow-500 bg-yellow-500/10' 
                                            : 'border-white/10 bg-white/5'
                                    }`}
                                >
                                    <h4 className="text-lg font-semibold text-white mb-2">{area.name}</h4>
                                    <div className="space-y-2 text-sm text-gray-300">
                                        <div className="flex justify-between">
                                            <span>Average Delivery Time:</span>
                                            <span className="text-yellow-400 font-semibold">{area.deliveryTime}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Coverage Area:</span>
                                            <span className="text-yellow-400 font-semibold">{area.coverage}</span>
                                        </div>
                                        <div className="mt-3">
                                            <span className="text-xs text-gray-400">Neighborhoods:</span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {area.neighborhoods.map((neighborhood, idx) => (
                                                    <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-full">
                                                        {neighborhood}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Pickup Locations */}
                <motion.div variants={itemVariants} className="text-center">
                    <h3 className="text-3xl font-Koulen text-white mb-8">Pickup Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pickupLocations.map((location, index) => (
                            <motion.div
                                key={location.name}
                                whileHover={{ scale: 1.05, y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">{location.name}</h4>
                                <p className="text-gray-400 text-sm mb-3">{location.address}</p>
                                <p className="text-yellow-400 text-sm font-semibold mb-4">{location.hours}</p>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {location.features.map((feature, idx) => (
                                        <span key={idx} className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mt-12"
                >
                    <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8">
                        <h3 className="text-2xl md:text-3xl font-Koulen text-white mb-4">
                            Ready to Order?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Enter your address to see delivery times and available restaurants in your area!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <input
                                type="text"
                                placeholder="Enter your delivery address"
                                className="flex-1 max-w-md bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                            >
                                Check Delivery
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default ServiceArea; 