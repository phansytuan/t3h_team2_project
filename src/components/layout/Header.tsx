import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Menu, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled || !isHomePage 
          ? 'bg-white shadow-sm border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-airbnb-red">
              <svg width="102" height="32" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16 3c2.988 0 5.47 2.162 6 5.001A8.005 8.005 0 0 1 15.6 15.6 8.005 8.005 0 0 1 8.999 9C9.529 6.162 12.012 3 16 3zm0 2c-2.525 0-4.374 2.11-4.928 4.333a5.994 5.994 0 0 0 4.693 4.93 5.994 5.994 0 0 0 4.93-4.693C20.311 7.011 18.525 5 16 5zm0 10c3.866 0 7 3.134 7 7a1 1 0 0 1-2 0c0-2.762-2.238-5-5-5a1 1 0 0 1 0-2zm-10 7c0-2.251.875-4.368 2.467-5.96a1 1 0 0 1 1.415 1.414A6.964 6.964 0 0 0 8 22a1 1 0 0 1-2 0zm2.192-9.192a1 1 0 0 1 0 1.414 9.95 9.95 0 0 0-2.868 5.85 9.954 9.954 0 0 0 2.868 7.072 9.954 9.954 0 0 0 7.072 2.868 9.95 9.95 0 0 0 5.85-2.868 1 1 0 0 1 1.414 1.415 11.952 11.952 0 0 1-7.025 3.442c-3.038.455-6.177-.12-8.833-1.918C2.56 26.95 0 22.527 0 17.724c0-4.097 1.955-7.835 5.132-10.202a1 1 0 0 1 1.414 0 9.95 9.95 0 0 0 2.868 5.85 1 1 0 0 1-1.415 1.415z" />
              </svg>
            </div>
            <span className={`ml-2 text-xl font-bold ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'}`}>
              airbnb
            </span>
          </Link>

          {/* Search Bar */}
          <div className={`hidden md:flex items-center justify-center ${
            isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
          }`}>
            <button className="border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition duration-200 ease-in-out flex items-center space-x-3 bg-white text-gray-700">
              <span className="font-medium">Anywhere</span>
              <span className="border-l border-gray-300 h-5"></span>
              <span className="font-medium">Any week</span>
              <span className="border-l border-gray-300 h-5"></span>
              <span className="text-gray-500">Add guests</span>
              <div className="bg-airbnb-red p-2 rounded-full ml-2 text-white">
                <Search size={16} />
              </div>
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center">
            <button className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-gray-100 transition ${
              isScrolled || !isHomePage ? 'text-gray-700' : 'text-white hover:text-gray-700'
            }`}>
              <span>Become a Host</span>
            </button>
            
            <button className={`ml-2 p-2 rounded-full hover:bg-gray-100 transition ${
              isScrolled || !isHomePage ? 'text-gray-700' : 'text-white hover:text-gray-700'
            }`}>
              <Globe size={20} />
            </button>
            
            <div className="relative ml-3">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 bg-white shadow-sm hover:shadow-md transition"
              >
                <Menu size={18} />
                <div className="bg-gray-500 text-white rounded-full">
                  <User size={18} />
                </div>
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign up</Link>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log in</Link>
                  <div className="border-t border-gray-100"></div>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Host your home</Link>
                  <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Help</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;