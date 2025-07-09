import React, { useContext, useEffect, useState } from 'react';
import { SelectedContext, TypeContext, HoverContext, ChangeContext, StagedContext, CartContext } from './context/AppContext';
import { db } from '../firebase';
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { genericFoodImages } from '../food_placeholder_images';

function NewMenu({ Type, Clicked, id, name, price }) {
  const [over, setOver] = useContext(HoverContext);
  const [clicked, setClicked] = useContext(ChangeContext);
  const [foods, setFoods] = useState([]);
  const [offers, setOffers] = useState([]);
  const [selected, setSelected] = useContext(SelectedContext);
  const [staged, setStaged] = useContext(StagedContext);
  const [picked, setPicked] = useState(false);
  const [cart, setCart] = useContext(CartContext);

  const uniqueFood = Array.from(new Set(foods.map(food => food.Type)))
    .map(type => foods.find(food => food.Type === type));

  const addToCart = (food) => {
    setCart([...cart, food]);
    console.log("Added", food);
  }

  const addOfferToCart = (offer) => {
    // Convert offer to food item format for cart
    const foodItem = {
      id: offer.id,
      name: offer.title,
      price: offer.discountedPrice.toString(),
      Type: offer.category,
      image: offer.image,
      description: offer.description,
      quantity: 1,
      isOffer: true,
      originalPrice: offer.originalPrice,
      discount: offer.discount
    };
    
    setCart(prevCart => [...prevCart, foodItem]);
    console.log("Added offer", foodItem);
  }

  useEffect(() => {
    const getFood = async () => {
      const foodSnapshot = await getDocs(collection(db, "Food"));
      const foodList = foodSnapshot.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setFoods(foodList);
    };

    const getOffers = async () => {
      try {
        const offersSnapshot = await getDocs(collection(db, "Offers"));
        const offersList = offersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setOffers(offersList);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    onSnapshot(query(collection(db, 'Food')), (snapshot) => {
      setFoods(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    onSnapshot(query(collection(db, 'Offers')), (snapshot) => {
      setOffers(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    getFood();
    getOffers();
  }, [db]);

  // Get all unique categories including offers
  const allCategories = [
    ...Array.from(new Set(foods.map(food => food.Type))),
    ...(offers.length > 0 ? ['Offers'] : [])
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-4">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-yellow-400 font-Koulen tracking-wide">
        Our Menu
      </h2>
      
      <div className="max-w-7xl mx-auto lg:flex gap-12">
        {/* Food Type Selection Sidebar */}
        <div className='lg:w-64 mb-12 lg:mb-0'>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Categories</h3>
            <div className="space-y-3">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelected(category)}
                  onPointerOver={() => setSelected(category)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    selected === category 
                      ? 'bg-yellow-500 text-black shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category === 'Offers' ? '🎁 Special Offers' : category || <Skeleton />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Show regular food items */}
            {selected !== 'Offers' && foods.filter(food => food.Type === selected).map((food, index) => (
              <div
                key={food.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-yellow-400/50 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={food.image || genericFoodImages.default}
                    alt={food.name}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {food.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-400">
                      ${food.price}
                    </span>
                    <button 
                      onClick={() => addToCart(food)}
                      className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Show offers */}
            {selected === 'Offers' && offers.map((offer, index) => (
              <div
                key={offer.id}
                className="group bg-white/5 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-yellow-400/50 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={offer.image || genericFoodImages.default}
                    alt={offer.title}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{offer.discount}%
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {offer.category}
                    </span>
                  </div>

                  {/* Special Badge */}
                  {offer.badge && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-1 rounded-full text-xs font-bold">
                        {offer.badge}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {offer.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-yellow-400">
                        ${offer.discountedPrice}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        ${offer.originalPrice}
                      </span>
                    </div>
                    <button 
                      onClick={() => addOfferToCart(offer)}
                      className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Add to Cart
                    </button>
                  </div>

                  {/* Time Left */}
                  {offer.timeLeft && (
                    <div className="text-yellow-400 text-sm font-medium">
                      ⏰ {offer.timeLeft}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Show message when no items in selected category */}
            {selected !== 'Offers' && foods.filter(food => food.Type === selected).length === 0 && (
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🍽️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No items in this category</h3>
                <p className="text-gray-400">
                  Check back soon for new menu items!
                </p>
              </div>
            )}

            {selected === 'Offers' && offers.length === 0 && (
              <div className="col-span-full text-center py-16">
                <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🎁</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">No Special Offers Available</h3>
                <p className="text-gray-400">
                  Check back soon for amazing deals and discounts!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMenu;
