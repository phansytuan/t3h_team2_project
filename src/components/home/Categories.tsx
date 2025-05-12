import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: '1', name: 'Beachfront', icon: '🏖️' },
  { id: '2', name: 'Cabins', icon: '🌲' },
  { id: '3', name: 'Tiny homes', icon: '🏠' },
  { id: '4', name: 'Design', icon: '🎨' },
  { id: '5', name: 'Amazing pools', icon: '🏊' },
  { id: '6', name: 'Countryside', icon: '🌄' },
  { id: '7', name: 'Mansions', icon: '🏛️' },
  { id: '8', name: 'Tropical', icon: '🌴' },
  { id: '9', name: 'Lakefront', icon: '🛶' },
  { id: '10', name: 'Skiing', icon: '⛷️' },
  { id: '11', name: 'Castles', icon: '🏰' },
  { id: '12', name: 'Amazing views', icon: '🌅' },
  { id: '13', name: 'Islands', icon: '🏝️' },
  { id: '14', name: 'Boats', icon: '⛵' },
  { id: '15', name: 'Luxe', icon: '✨' }
];

const CategoryButton: React.FC<{ category: Category; active: boolean; onClick: () => void }> = ({ 
  category, 
  active, 
  onClick 
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center min-w-20 px-4 py-3 transition-all duration-200 ${
      active 
        ? 'text-gray-900 border-b-2 border-gray-900 opacity-100' 
        : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 opacity-80'
    }`}
  >
    <span className="text-2xl mb-1">{category.icon}</span>
    <span className="text-xs whitespace-nowrap">{category.name}</span>
  </button>
);

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="relative bg-white py-4">
      {/* Left scroll button */}
      {showLeftArrow && (
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md border border-gray-200 hover:shadow-lg transition duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Categories */}
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto scrollbar-hide mx-8"
        onScroll={handleScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </div>

      {/* Right scroll button */}
      {showRightArrow && (
        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md border border-gray-200 hover:shadow-lg transition duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default Categories;