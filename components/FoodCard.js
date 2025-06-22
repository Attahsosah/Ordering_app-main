import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from './context/AppContext';

function FoodCard({ food }) {
    const [cart, setCart] = useContext(CartContext);
    
    const {
        id,
        name = "Delicious Burger",
        description = "A mouthwatering burger with fresh ingredients",
        price = "12.99",
        image = "https://images.unsplash.com/photo-1504674900240-9c2916b9d4e8?w=400&h=300&fit=crop",
        Type = "Burgers"
    } = food || {};

    const addToCart = () => {
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            // If item exists, increase quantity
            setCart(prevCart => 
                prevCart.map(item => 
                    item.id === id 
                        ? { ...item, quantity: (item.quantity || 1) + 1 }
                        : item
                )
            );
        } else {
            // If item doesn't exist, add it with quantity 1
            setCart(prevCart => [...prevCart, { ...food, quantity: 1 }]);
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5 }
        },
        hover: {
            y: -5,
            transition: { duration: 0.2 }
        }
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
        >
            {/* Food Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        {Type}
                    </span>
                </div>
                <div className="absolute bottom-3 left-3">
                    <span className="bg-black/70 text-yellow-400 px-3 py-1 rounded-full text-sm font-bold">
                        ${price}
                    </span>
                </div>
            </div>

            {/* Food Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                    {name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Add to Cart Button */}
                <motion.button
                    onClick={addToCart}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                    <span>+</span>
                    <span>Add to Cart</span>
                </motion.button>
            </div>
        </motion.div>
    );
}

export default FoodCard;