import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <div className="mt-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We can't find that page</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, the page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link 
            to="/"
            className="inline-flex items-center bg-airbnb-red text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition shadow-md"
          >
            <Home size={20} className="mr-2" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;