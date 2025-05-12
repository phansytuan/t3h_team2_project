import React from 'react';
import { Globe, Facebook, Twitter, Instagram, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Back to top button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer main content */}
        <div className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Safety information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Cancellation options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Our COVID-19 Response</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Supporting people with disabilities</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Community</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Disaster relief housing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Support refugees</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Celebrating diversity & belonging</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Combating discrimination</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Try hosting</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">AirCover: protection for Hosts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Explore hosting resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Visit our community forum</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">How to host responsibly</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Newsroom</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Learn about new features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Letter from our founders</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 hover:underline">Investors</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-600">© 2025 Airbnb, Inc.</p>
            <div className="hidden md:flex">
              <span className="mx-2 text-gray-500">·</span>
              <a href="#" className="text-sm text-gray-600 hover:underline">Privacy</a>
              <span className="mx-2 text-gray-500">·</span>
              <a href="#" className="text-sm text-gray-600 hover:underline">Terms</a>
              <span className="mx-2 text-gray-500">·</span>
              <a href="#" className="text-sm text-gray-600 hover:underline">Sitemap</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="flex items-center text-gray-800 hover:text-gray-600">
              <Globe size={18} className="mr-1" />
              <span className="text-sm font-medium">English (US)</span>
            </button>
            <button className="text-gray-800 hover:text-gray-600 text-sm font-medium">$ USD</button>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-800 hover:text-gray-600"><Facebook size={18} /></a>
              <a href="#" className="text-gray-800 hover:text-gray-600"><Twitter size={18} /></a>
              <a href="#" className="text-gray-800 hover:text-gray-600"><Instagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;