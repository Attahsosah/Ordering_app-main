import { useState, useEffect } from 'react';
import Head from 'next/head';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

export default function Admin() {
  const [foods, setFoods] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingFood, setEditingFood] = useState(null);
  const [editingOffer, setEditingOffer] = useState(null);
  const [activeTab, setActiveTab] = useState('food'); // 'food' or 'offers'
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    Type: '',
    image: '',
    description: ''
  });
  const [offerFormData, setOfferFormData] = useState({
    title: '',
    originalPrice: '',
    discountedPrice: '',
    discount: '',
    image: '',
    description: '',
    badge: '',
    timeLeft: '',
    category: ''
  });

  useEffect(() => {
    fetchFoods();
    fetchOffers();
  }, []);

  const fetchFoods = async () => {
    try {
      const foodSnapshot = await getDocs(collection(db, "Food"));
      const foodList = foodSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setFoods(foodList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching foods:", error);
      setLoading(false);
    }
  };

  const fetchOffers = async () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingFood) {
        await updateDoc(doc(db, "Food", editingFood.id), formData);
      } else {
        await addDoc(collection(db, "Food"), formData);
      }
      setShowModal(false);
      setEditingFood(null);
      resetForm();
      fetchFoods();
    } catch (error) {
      console.error("Error saving food:", error);
    }
  };

  const handleOfferSubmit = async (e) => {
    e.preventDefault();
    try {
      const offerData = {
        ...offerFormData,
        originalPrice: parseFloat(offerFormData.originalPrice),
        discountedPrice: parseFloat(offerFormData.discountedPrice),
        discount: parseFloat(offerFormData.discount)
      };

      if (editingOffer) {
        await updateDoc(doc(db, "Offers", editingOffer.id), offerData);
      } else {
        await addDoc(collection(db, "Offers"), offerData);
      }
      setShowModal(false);
      setEditingOffer(null);
      resetOfferForm();
      fetchOffers();
    } catch (error) {
      console.error("Error saving offer:", error);
    }
  };

  const handleEdit = (food) => {
    setEditingFood(food);
    setFormData({
      name: food.name || '',
      price: food.price || '',
      Type: food.Type || '',
      image: food.image || '',
      description: food.description || ''
    });
    setShowModal(true);
  };

  const handleEditOffer = (offer) => {
    setEditingOffer(offer);
    setOfferFormData({
      title: offer.title || '',
      originalPrice: offer.originalPrice || '',
      discountedPrice: offer.discountedPrice || '',
      discount: offer.discount || '',
      image: offer.image || '',
      description: offer.description || '',
      badge: offer.badge || '',
      timeLeft: offer.timeLeft || '',
      category: offer.category || ''
    });
    setShowModal(true);
  };

  const handleDelete = async (foodId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteDoc(doc(db, "Food", foodId));
        fetchFoods();
      } catch (error) {
        console.error("Error deleting food:", error);
      }
    }
  };

  const handleDeleteOffer = async (offerId) => {
    if (window.confirm('Are you sure you want to delete this offer?')) {
      try {
        await deleteDoc(doc(db, "Offers", offerId));
        fetchOffers();
      } catch (error) {
        console.error("Error deleting offer:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      Type: '',
      image: '',
      description: ''
    });
  };

  const resetOfferForm = () => {
    setOfferFormData({
      title: '',
      originalPrice: '',
      discountedPrice: '',
      discount: '',
      image: '',
      description: '',
      badge: '',
      timeLeft: '',
      category: ''
    });
  };

  const openAddModal = () => {
    setEditingFood(null);
    setEditingOffer(null);
    resetForm();
    resetOfferForm();
    setShowModal(true);
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard - Food Ordering App</title>
        <meta name="description" content="Admin dashboard for managing food items and offers" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <button
                onClick={openAddModal}
                className="flex items-center px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                <span className="mr-2 text-xl">+</span>
                Add {activeTab === 'food' ? 'Food Item' : 'Offer'}
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/5 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('food')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors duration-300 ${
                  activeTab === 'food'
                    ? 'border-yellow-500 text-yellow-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                Food Items
              </button>
              <button
                onClick={() => setActiveTab('offers')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors duration-300 ${
                  activeTab === 'offers'
                    ? 'border-yellow-500 text-yellow-400'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                Special Offers
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
            </div>
          ) : (
            <>
              {/* Food Items Tab */}
              {activeTab === 'food' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {foods.map((food) => (
                    <div
                      key={food.id}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="relative mb-4">
                        <img
                          src={food.image || 'https://images.unsplash.com/photo-1504674900240-9c2916b9d4e8?w=400&h=300&fit=crop'}
                          alt={food.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{food.name}</h3>
                      <p className="text-yellow-400 font-bold mb-2">${food.price}</p>
                      <p className="text-gray-400 text-sm mb-4">{food.Type}</p>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(food)}
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                          <span className="mr-1">✏️</span>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(food.id)}
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                        >
                          <span className="mr-1">🗑️</span>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Offers Tab */}
              {activeTab === 'offers' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {offers.map((offer) => (
                    <div
                      key={offer.id}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="relative mb-4">
                        <img
                          src={offer.image || 'https://images.unsplash.com/photo-1504674900240-9c2916b9d4e8?w=400&h=300&fit=crop'}
                          alt={offer.title}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                            -{offer.discount}%
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-white mb-2">{offer.title}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-yellow-400 font-bold">${offer.discountedPrice}</span>
                        <span className="text-gray-500 line-through text-sm">${offer.originalPrice}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{offer.category}</p>
                      <p className="text-yellow-400 text-xs mb-4">⏰ {offer.timeLeft}</p>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditOffer(offer)}
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                        >
                          <span className="mr-1">✏️</span>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteOffer(offer.id)}
                          className="flex-1 flex items-center justify-center px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                        >
                          <span className="mr-1">🗑️</span>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">
                  {activeTab === 'food' 
                    ? (editingFood ? 'Edit Food Item' : 'Add New Food Item')
                    : (editingOffer ? 'Edit Offer' : 'Add New Offer')
                  }
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              {activeTab === 'food' ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Price
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={formData.Type}
                      onChange={(e) => setFormData({...formData, Type: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Burgers">Burgers</option>
                      <option value="Pizza">Pizza</option>
                      <option value="Pasta">Pasta</option>
                      <option value="Salads">Salads</option>
                      <option value="Desserts">Desserts</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Sides">Sides</option>
                      <option value="Offers">Offers</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Image URL
                    </label>
                    <input
                      type="url"
                      value={formData.image}
                      onChange={(e) => setFormData({...formData, image: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows="3"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                    >
                      <span className="mr-2">✓</span>
                      {editingFood ? 'Update' : 'Create'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleOfferSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      value={offerFormData.title}
                      onChange={(e) => setOfferFormData({...offerFormData, title: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Original Price
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={offerFormData.originalPrice}
                        onChange={(e) => setOfferFormData({...offerFormData, originalPrice: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Discounted Price
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={offerFormData.discountedPrice}
                        onChange={(e) => setOfferFormData({...offerFormData, discountedPrice: e.target.value})}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Discount Percentage
                    </label>
                    <input
                      type="number"
                      value={offerFormData.discount}
                      onChange={(e) => setOfferFormData({...offerFormData, discount: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={offerFormData.category}
                      onChange={(e) => setOfferFormData({...offerFormData, category: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Burgers">Burgers</option>
                      <option value="Pizza">Pizza</option>
                      <option value="Pasta">Pasta</option>
                      <option value="Salads">Salads</option>
                      <option value="Desserts">Desserts</option>
                      <option value="Drinks">Drinks</option>
                      <option value="Sides">Sides</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Badge Text
                    </label>
                    <input
                      type="text"
                      value={offerFormData.badge}
                      onChange={(e) => setOfferFormData({...offerFormData, badge: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      placeholder="🔥 HOT DEAL"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Time Left
                    </label>
                    <input
                      type="text"
                      value={offerFormData.timeLeft}
                      onChange={(e) => setOfferFormData({...offerFormData, timeLeft: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      placeholder="Limited Time"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Image URL
                    </label>
                    <input
                      type="url"
                      value={offerFormData.image}
                      onChange={(e) => setOfferFormData({...offerFormData, image: e.target.value})}
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      value={offerFormData.description}
                      onChange={(e) => setOfferFormData({...offerFormData, description: e.target.value})}
                      rows="3"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                    >
                      <span className="mr-2">✓</span>
                      {editingOffer ? 'Update' : 'Create'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
} 