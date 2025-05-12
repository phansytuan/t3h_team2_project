export interface Property {
  id: string;
  title: string;
  description: string;
  hostId: string;
  hostName: string;
  hostImage: string;
  location: string;
  address: string;
  images: string[];
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  rating: number;
  reviewCount: number;
  guestCapacity: number;
  bedrooms: number;
  beds: number;
  baths: number;
  amenities: string[];
  availableFrom: string;
  availableTo: string;
  instantBook: boolean;
  latitude?: number;
  longitude?: number;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  userName: string;
  userImage: string;
  rating: number;
  date: string;
  comment: string;
}