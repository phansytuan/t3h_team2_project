import React, { useState } from 'react';
import { Grid, X } from 'lucide-react';

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images, title }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const mainImage = images[0];
  const secondaryImages = images.slice(1, 5);
  const remainingCount = images.length - 5;

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="p-4 bg-white sticky top-0 z-10 flex justify-between items-center border-b border-gray-200">
          <button
            onClick={() => setShowAllPhotos(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>
          <h2 className="text-xl font-medium">Photos of {title}</h2>
          <div className="w-10"></div>
        </div>
        <div className="max-w-5xl mx-auto py-8 px-4">
          {images.map((image, index) => (
            <div key={index} className="mb-8">
              <img 
                src={image} 
                alt={`${title} - Photo ${index + 1}`}
                className="w-full h-auto rounded-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[60vh] max-h-[500px] rounded-xl overflow-hidden">
        <div className="col-span-2 row-span-2 relative">
          <img 
            src={mainImage} 
            alt={title}
            className="w-full h-full object-cover" 
          />
        </div>
        
        {secondaryImages.map((image, index) => (
          <div key={index} className="relative">
            <img 
              src={image} 
              alt={`${title} - Photo ${index + 1}`}
              className="w-full h-full object-cover" 
            />
          </div>
        ))}

        {remainingCount > 0 && (
          <button
            className="absolute bottom-6 right-6 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition flex items-center space-x-2 font-medium"
            onClick={() => setShowAllPhotos(true)}
          >
            <Grid size={16} />
            <span>Show all photos</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PropertyGallery;