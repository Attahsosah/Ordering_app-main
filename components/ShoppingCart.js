import React, { useContext } from 'react';
import { CartContext } from './context/AppContext';
import Link from 'next/link';

function ShoppingCart() {
  const [cart, setCart] = useContext(CartContext);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const quantity = item.quantity || 1;
      const price = parseFloat(item.price) || 0;
      return total + (quantity * price);
    }, 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  if (cart.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🛒</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
          <p className="text-gray-400 mb-6">
            Looks like you haven&apos;t added any delicious items to your cart yet. 
            Start exploring our menu to find something tasty!
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            <div className="flex items-center">
              <span className="mr-2">🍽️</span>
              Browse Menu
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Cart Items ({getItemCount()})</h2>
            
            <div className="space-y-4">
              {cart.map((item) => (
                <div 
                  key={item.id}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.image || 'https://images.unsplash.com/photo-1504674900240-9c2916b9d4e8?w=100&h=100&fit=crop'}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white truncate">{item.name}</h3>
                    <p className="text-gray-400 text-sm">{item.Type}</p>
                    {item.isOffer ? (
                      <div className="flex items-center space-x-2">
                        <p className="text-yellow-400 font-bold">${item.price}</p>
                        <p className="text-gray-500 line-through text-sm">${item.originalPrice}</p>
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          -{item.discount}%
                        </span>
                      </div>
                    ) : (
                      <p className="text-yellow-400 font-bold">${item.price}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      -
                    </button>
                    <span className="w-12 text-center text-white font-semibold">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="text-right">
                    {item.isOffer ? (
                      <div className="text-right">
                        <p className="text-yellow-400 font-bold">
                          ${((item.quantity || 1) * parseFloat(item.price)).toFixed(2)}
                        </p>
                        <p className="text-gray-500 line-through text-sm">
                          ${((item.quantity || 1) * parseFloat(item.originalPrice)).toFixed(2)}
                        </p>
                      </div>
                    ) : (
                      <p className="text-yellow-400 font-bold">
                        ${((item.quantity || 1) * parseFloat(item.price)).toFixed(2)}
                      </p>
                    )}
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal ({getItemCount()} items)</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Delivery Fee</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span className="text-yellow-400">${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-300 mb-4">
              Proceed to Checkout
            </button>
            
            <button 
              onClick={() => setCart([])}
              className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
            >
              Clear Cart
            </button>
            
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <div className="flex items-center space-x-2 text-yellow-400">
                <span>🚚</span>
                <span className="text-sm font-medium">Free delivery on orders over $25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart; 