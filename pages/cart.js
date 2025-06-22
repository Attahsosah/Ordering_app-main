import { useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { CartContext } from '../components/context/AppContext';
import ShoppingCart from '../components/ShoppingCart';

function Cart() {
  const [cart] = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Shopping Cart - Food Ordering App</title>
        <meta name="description" content="Your shopping cart" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Modern Header */}
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <Link href="/">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                    <span className="text-black font-bold text-lg">←</span>
                  </div>
                  <span className="text-white font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                    Back to Menu
                  </span>
                </div>
              </Link>
              
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white">Your Cart</h1>
                <p className="text-gray-400 text-sm">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">🛒</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <ShoppingCart />
        </div>
      </div>
    </>
  );
}

export default Cart;
