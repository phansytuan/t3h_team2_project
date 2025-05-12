import React, { useState } from 'react';
import Categories from '../components/home/Categories';
import PropertyCard from '../components/home/PropertyCard';
import { properties } from '../data/properties';
import { Search, MapPin, CalendarDays, Users, Sliders } from 'lucide-react';

const Home = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [showSearchPanel, setShowSearchPanel] = useState(false);

  return (
    <div>
      {/* Hero Section - Only shown when no search is active */}
      <div className="relative bg-gray-900 text-white">
        <img 
          src="https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Beautiful villa with pool" 
          className="w-full h-[70vh] object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/40 flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Find your place in the world
            </h1>
            <p className="text-xl mb-8">
              Discover unique homes, experiences, and places around the world.
            </p>
            <button 
              onClick={() => setShowSearchPanel(true)}
              className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-200 flex items-center space-x-2 mx-auto"
            >
              <Search size={20} />
              <span>Search destinations</span>
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Search Panel */}
      {showSearchPanel && (
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-5xl mx-auto -mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1 border border-gray-300 rounded-lg p-3 hover:shadow-md transition">
              <label className="block text-xs font-bold text-gray-700 mb-1">WHERE</label>
              <div className="flex items-center">
                <MapPin size={18} className="text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search destinations" 
                  className="w-full focus:outline-none text-gray-700"
                  value={searchLocation}
                  onChange={e => setSearchLocation(e.target.value)}
                />
              </div>
            </div>
            
            <div className="md:col-span-1 border border-gray-300 rounded-lg p-3 hover:shadow-md transition">
              <label className="block text-xs font-bold text-gray-700 mb-1">CHECK-IN</label>
              <div className="flex items-center">
                <CalendarDays size={18} className="text-gray-500 mr-2" />
                <input 
                  type="date" 
                  className="w-full focus:outline-none text-gray-700"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
            
            <div className="md:col-span-1 border border-gray-300 rounded-lg p-3 hover:shadow-md transition">
              <label className="block text-xs font-bold text-gray-700 mb-1">CHECK-OUT</label>
              <div className="flex items-center">
                <CalendarDays size={18} className="text-gray-500 mr-2" />
                <input 
                  type="date" 
                  className="w-full focus:outline-none text-gray-700"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
            
            <div className="md:col-span-1 flex items-center">
              <div className="flex-1 border border-gray-300 rounded-lg p-3 hover:shadow-md transition mr-2">
                <label className="block text-xs font-bold text-gray-700 mb-1">GUESTS</label>
                <div className="flex items-center">
                  <Users size={18} className="text-gray-500 mr-2" />
                  <select className="w-full focus:outline-none text-gray-700 bg-transparent">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                    <option>5+ guests</option>
                  </select>
                </div>
              </div>
              
              <button className="bg-airbnb-red text-white p-3 rounded-full shadow-md hover:bg-opacity-90 transition">
                <Search size={20} />
              </button>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <button className="flex items-center text-gray-700 hover:text-gray-900">
              <Sliders size={18} className="mr-2" />
              <span>More filters</span>
            </button>
            
            <button 
              onClick={() => setShowSearchPanel(false)}
              className="text-gray-700 hover:text-gray-900 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Categories */}
      <Categories />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;