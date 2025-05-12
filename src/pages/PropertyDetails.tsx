import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share, Heart, Award, Star } from 'lucide-react';
import { properties } from '../data/properties';
import { reviews } from '../data/reviews';
import { Property } from '../types/Property';
import PropertyGallery from '../components/property/PropertyGallery';
import BookingCard from '../components/property/BookingCard';
import PropertyAmenities from '../components/property/PropertyAmenities';
import PropertyReviews from '../components/property/PropertyReviews';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [propertyReviews, setPropertyReviews] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundProperty = properties.find(p => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
      document.title = foundProperty.title;
    }
    
    const foundReviews = reviews.filter(r => r.propertyId === id);
    setPropertyReviews(foundReviews);
  }, [id]);

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-2xl font-medium text-gray-900">Loading property...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button and Title */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-gray-900 hover:text-gray-700 mb-4">
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to listings</span>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star size={16} className="text-gray-900 mr-1" />
              <span className="font-medium">{property.rating}</span>
              <span className="mx-1">·</span>
              <span className="underline">{property.reviewCount} reviews</span>
            </div>
            <span className="hidden md:inline">·</span>
            <span className="font-medium">{property.location}</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <Share size={18} />
              <span className="underline">Share</span>
            </button>
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
            >
              <Heart size={18} className={isFavorite ? 'fill-red-500 text-red-500' : ''} />
              <span className="underline">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Property Gallery */}
      <PropertyGallery images={property.images} title={property.title} />

      {/* Property Details */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Host and Property Info */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl md:text-2xl font-medium">
                  {property.bedrooms} bedroom {property.bedrooms === 1 ? 'place' : 'places'} hosted by {property.hostName}
                </h2>
                <p className="text-gray-600">
                  {property.guestCapacity} guests · {property.bedrooms} bedroom{property.bedrooms === 1 ? '' : 's'} · {property.beds} bed{property.beds === 1 ? '' : 's'} · {property.baths} bath{property.baths === 1 ? '' : 's'}
                </p>
              </div>
              <img 
                src={property.hostImage} 
                alt={property.hostName}
                className="w-14 h-14 rounded-full object-cover" 
              />
            </div>
          </div>

          {/* Host Badge */}
          <div className="py-6 border-b border-gray-200">
            <div className="flex items-start space-x-4">
              <Award size={32} className="text-gray-700" />
              <div>
                <h3 className="font-medium text-lg">{property.hostName} is a Superhost</h3>
                <p className="text-gray-600">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="py-6 border-b border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <PropertyAmenities highlightedAmenities={property.amenities} />

          {/* Reviews */}
          <PropertyReviews 
            reviews={propertyReviews} 
            averageRating={property.rating} 
            totalReviews={property.reviewCount} 
          />
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <BookingCard 
              pricePerNight={property.pricePerNight} 
              rating={property.rating} 
              reviewCount={property.reviewCount} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;