import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';

interface Review {
  id: string;
  userId: string;
  userName: string;
  userImage: string;
  rating: number;
  date: string;
  comment: string;
}

interface PropertyReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

interface RatingCategoryProps {
  name: string;
  value: number;
}

const RatingCategory: React.FC<RatingCategoryProps> = ({ name, value }) => (
  <div className="flex items-center">
    <div className="w-36">{name}</div>
    <div className="flex-1">
      <div className="h-1 bg-gray-300 rounded-full w-full">
        <div 
          className="h-1 bg-gray-900 rounded-full" 
          style={{ width: `${(value / 5) * 100}%` }}
        ></div>
      </div>
    </div>
    <div className="w-8 text-right">{value.toFixed(1)}</div>
  </div>
);

const PropertyReviews: React.FC<PropertyReviewsProps> = ({ 
  reviews, 
  averageRating,
  totalReviews 
}) => {
  const [expandedReviews, setExpandedReviews] = useState<string[]>([]);

  const toggleReviewExpand = (reviewId: string) => {
    if (expandedReviews.includes(reviewId)) {
      setExpandedReviews(expandedReviews.filter(id => id !== reviewId));
    } else {
      setExpandedReviews([...expandedReviews, reviewId]);
    }
  };

  return (
    <div className="my-8">
      <div className="flex items-center space-x-2 mb-6">
        <Star className="fill-current text-gray-900" size={24} />
        <span className="text-xl font-medium">{averageRating.toFixed(1)}</span>
        <span className="text-xl font-medium">·</span>
        <span className="text-xl font-medium">{totalReviews} reviews</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <RatingCategory name="Cleanliness" value={4.8} />
        <RatingCategory name="Communication" value={4.9} />
        <RatingCategory name="Check-in" value={5.0} />
        <RatingCategory name="Accuracy" value={4.7} />
        <RatingCategory name="Location" value={4.8} />
        <RatingCategory name="Value" value={4.6} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="mb-6">
            <div className="flex items-center mb-3">
              <img 
                src={review.userImage} 
                alt={review.userName}
                className="w-12 h-12 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-medium">{review.userName}</h4>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
            
            <div>
              <p className={`${
                expandedReviews.includes(review.id) 
                  ? '' 
                  : 'line-clamp-3'
              } text-gray-700`}>
                {review.comment}
              </p>
              
              {review.comment.length > 150 && (
                <button 
                  onClick={() => toggleReviewExpand(review.id)}
                  className="text-gray-900 font-medium underline mt-2 flex items-center"
                >
                  {expandedReviews.includes(review.id) ? 'Show less' : 'Show more'}
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform ${
                      expandedReviews.includes(review.id) ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyReviews;