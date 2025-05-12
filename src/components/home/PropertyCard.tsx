import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Property } from '../../types/Property';
import { formatDistanceToNow } from 'date-fns';
import PropertyImageCarousel from './PropertyImageCarousel';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link 
      to={`/property/${property.id}`}
      className="block group"
    >
      <div className="relative overflow-hidden rounded-xl aspect-square">
        <PropertyImageCarousel images={property.images} />
        
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm transition duration-200 z-10"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            size={24} 
            className={`${
              isFavorite 
                ? 'fill-red-500 text-red-500' 
                : 'text-white'
            } transition-colors duration-200`} 
          />
        </button>
      </div>

      <div className="mt-3">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-900 group-hover:text-gray-700">{property.location}</h3>
          <div className="flex items-center">
            <span className="sr-only">{property.rating} out of 5 stars</span>
            <span className="text-sm">★</span>
            <span className="ml-1 text-sm text-gray-700">{property.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-500">
          {property.hostName}
        </p>
        
        <p className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(property.availableFrom), { addSuffix: true })}
        </p>
        
        <p className="mt-2">
          <span className="font-semibold">${property.pricePerNight}</span>
          <span className="text-gray-700"> night</span>
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;