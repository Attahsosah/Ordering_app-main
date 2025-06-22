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

    onSnapshot(query(collection(db, 'Food')), (snapshot) => {
      setFoods(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    getFood();
  }, [db]);

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
              {uniqueFood.map((food) => (
                <button
                  key={food.id}
                  onClick={() => setSelected(food.Type)}
                  onPointerOver={() => setSelected(food.Type)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                    selected === food.Type 
                      ? 'bg-yellow-500 text-black shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {food.Type || <Skeleton />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {foods.filter(food => food.Type === selected).map((food, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMenu;
