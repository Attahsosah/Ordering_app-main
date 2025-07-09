import { useState } from 'react';

function ServiceArea() {
    const [selectedArea, setSelectedArea] = useState('westlands');

    const serviceAreas = [
        {
            id: 'westlands',
            name: 'Westlands',
            deliveryTime: '15-20 min',
            coverage: '100%',
            color: 'from-yellow-500 to-yellow-600',
            neighborhoods: ['Westlands', 'Parklands', 'Kilimani', 'Lavington']
        },
        {
            id: 'cbd',
            name: 'CBD',
            deliveryTime: '20-25 min',
            coverage: '95%',
            color: 'from-yellow-400 to-yellow-500',
            neighborhoods: ['Nairobi CBD', 'Upperhill', 'Hurlingham', 'Yaya']
        },
        {
            id: 'eastlands',
            name: 'Eastlands',
            deliveryTime: '25-30 min',
            coverage: '90%',
            color: 'from-yellow-300 to-yellow-400',
            neighborhoods: ['Buruburu', 'Donholm', 'Embakasi', 'South B']
        },
        {
            id: 'southlands',
            name: 'Southlands',
            deliveryTime: '30-35 min',
            coverage: '85%',
            color: 'from-yellow-200 to-yellow-300',
            neighborhoods: ['Karen', 'Langata', 'South C', 'Kikuyu']
        }
    ];

    const pickupLocations = [
        {
            name: 'Westlands Hub',
            address: 'Westlands Mall, Westlands',
            hours: '24/7',
            features: ['Self-Pickup', 'Contactless', 'Drive-Thru']
        },
        {
            name: 'CBD Express',
            address: 'Nairobi CBD, Kimathi Street',
            hours: '6AM-12AM',
            features: ['Quick Pickup', 'Mobile Orders', 'Curbside']
        },
        {
            name: 'Kilimani Station',
            address: 'Kilimani Mall, Kilimani',
            hours: '7AM-11PM',
            features: ['Parking Available', 'Indoor Seating', 'WiFi']
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
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
                        From downtown to uptown, we&apos;ve got you covered with lightning-fast delivery 
                        and convenient pickup locations across the city.
                    </p>
                </div>

                {/* Service Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {serviceAreas.map((area, index) => (
                        <div
                            key={area.id}
                            className={`relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                                selectedArea === area.id ? 'ring-2 ring-yellow-500' : ''
                            }`}
                            onClick={() => setSelectedArea(area.id)}
                        >
                            <div className={`bg-gradient-to-br ${area.color} p-6 rounded-2xl text-white relative overflow-hidden transition-all duration-300`}>
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
                                    <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-yellow-600 text-sm">✓</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Interactive Map-like Display */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
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
                                            <div
                                                key={area.id}
                                                className={`bg-gradient-to-br ${area.color} rounded-lg relative transition-all duration-300 hover:scale-105 ${
                                                    selectedArea === area.id ? 'ring-2 ring-white' : ''
                                                }`}
                                                onClick={() => setSelectedArea(area.id)}
                                            >
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-white font-bold text-sm">{area.name}</span>
                                                </div>
                                                <div className="absolute top-1 right-1 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                            </div>
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
                                <div
                                    key={area.id}
                                    className={`mb-4 p-4 rounded-lg border transition-all duration-300 ${
                                        selectedArea === area.id 
                                            ? 'border-yellow-500 bg-yellow-500/10 opacity-100' 
                                            : 'border-white/10 bg-white/5 opacity-30'
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pickup Locations */}
                <div className="text-center">
                    <h3 className="text-3xl font-Koulen text-white mb-8">Pickup Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {pickupLocations.map((location, index) => (
                            <div
                                key={location.name}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
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
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
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
                            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 hover:scale-105">
                                Check Delivery
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceArea; 