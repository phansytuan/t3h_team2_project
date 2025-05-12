import React, { useState } from 'react';
import { Wifi, Tv, Car, Snowflake, Coffee, Bath, Utensils, ChevronRight } from 'lucide-react';

interface Amenity {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const amenities: Amenity[] = [
  { id: 'wifi', name: 'Fast wifi', icon: <Wifi /> },
  { id: 'tv', name: 'Smart TV with Netflix', icon: <Tv /> },
  { id: 'parking', name: 'Free parking on premises', icon: <Car /> },
  { id: 'ac', name: 'Air conditioning', icon: <Snowflake /> },
  { id: 'coffee', name: 'Coffee maker', icon: <Coffee /> },
  { id: 'bath', name: 'Bathtub', icon: <Bath /> },
  { id: 'kitchen', name: 'Full kitchen', icon: <Utensils /> },
  { id: 'wifi2', name: 'Dedicated workspace', icon: <Wifi /> },
  { id: 'tv2', name: 'Security cameras', icon: <Tv /> },
  { id: 'parking2', name: 'EV charger', icon: <Car /> },
  { id: 'ac2', name: 'Central heating', icon: <Snowflake /> },
  { id: 'coffee2', name: 'Breakfast included', icon: <Coffee /> },
];

interface PropertyAmenitiesProps {
  highlightedAmenities?: string[];
}

const PropertyAmenities: React.FC<PropertyAmenitiesProps> = ({ 
  highlightedAmenities = [] 
}) => {
  const [showAll, setShowAll] = useState(false);
  
  const visibleAmenities = showAll ? amenities : amenities.slice(0, 6);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-medium mb-4">What this place offers</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleAmenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center space-x-4">
            <div className="text-gray-700">
              {amenity.icon}
            </div>
            <span className={highlightedAmenities.includes(amenity.id) ? 'font-medium' : ''}>
              {amenity.name}
            </span>
          </div>
        ))}
      </div>
      
      {!showAll && amenities.length > 6 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 border border-gray-900 rounded-lg px-6 py-3 font-medium flex items-center hover:bg-gray-100 transition"
        >
          <span>Show all {amenities.length} amenities</span>
          <ChevronRight size={18} className="ml-2" />
        </button>
      )}
    </div>
  );
};

export default PropertyAmenities;