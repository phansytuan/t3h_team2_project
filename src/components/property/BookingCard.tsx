import React, { useState } from 'react';
import { Calendar, Minus, Plus, Users } from 'lucide-react';

interface BookingCardProps {
  pricePerNight: number;
  rating: number;
  reviewCount: number;
}

const BookingCard: React.FC<BookingCardProps> = ({ 
  pricePerNight, 
  rating, 
  reviewCount 
}) => {
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState(1);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const handleGuestsIncrement = () => {
    if (guests < 16) setGuests(guests + 1);
  };

  const handleGuestsDecrement = () => {
    if (guests > 1) setGuests(guests - 1);
  };

  const calculateTotal = () => {
    // Simple calculation, in a real app you would have more logic here
    const days = checkIn && checkOut 
      ? Math.max(1, Math.floor((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)))
      : 1;
    
    const nightsCost = pricePerNight * days;
    const serviceFee = Math.round(nightsCost * 0.12);
    const cleaningFee = 65;
    
    return {
      nightsCost,
      days,
      serviceFee,
      cleaningFee,
      total: nightsCost + serviceFee + cleaningFee
    };
  };

  const { nightsCost, days, serviceFee, cleaningFee, total } = calculateTotal();

  return (
    <div className="border border-gray-300 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="font-bold text-xl">${pricePerNight}</span>
          <span className="text-gray-600"> night</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm">★ {rating}</span>
          <span className="mx-1 text-gray-400">·</span>
          <span className="text-sm text-gray-600 underline">{reviewCount} reviews</span>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
        <div className="grid grid-cols-2 divide-x divide-gray-300">
          <div className="p-3">
            <label className="block text-xs font-bold mb-1">CHECK-IN</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              className="w-full focus:outline-none text-gray-700"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-bold mb-1">CHECKOUT</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              className="w-full focus:outline-none text-gray-700"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
        
        <div className="relative border-t border-gray-300">
          <button 
            onClick={() => setShowGuestsDropdown(!showGuestsDropdown)}
            className="w-full p-3 text-left"
          >
            <label className="block text-xs font-bold mb-1">GUESTS</label>
            <div className="flex justify-between items-center">
              <span>{guests} guest{guests !== 1 ? 's' : ''}</span>
              <Users size={18} />
            </div>
          </button>
          
          {showGuestsDropdown && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg p-4 shadow-lg z-10">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Guests</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={handleGuestsDecrement}
                    disabled={guests <= 1}
                    className={`p-2 rounded-full border ${
                      guests <= 1 
                        ? 'border-gray-200 text-gray-300' 
                        : 'border-gray-400 text-gray-600 hover:border-gray-700'
                    }`}
                  >
                    <Minus size={16} />
                  </button>
                  <span>{guests}</span>
                  <button 
                    onClick={handleGuestsIncrement}
                    disabled={guests >= 16}
                    className={`p-2 rounded-full border ${
                      guests >= 16 
                        ? 'border-gray-200 text-gray-300' 
                        : 'border-gray-400 text-gray-600 hover:border-gray-700'
                    }`}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg font-bold hover:from-pink-600 hover:to-red-600 transition duration-200 mb-4">
        Reserve
      </button>
      
      <p className="text-center text-gray-500 mb-6">You won't be charged yet</p>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="underline">${pricePerNight} x {days} night{days !== 1 ? 's' : ''}</span>
          <span>${nightsCost}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>${cleaningFee}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Service fee</span>
          <span>${serviceFee}</span>
        </div>
        <div className="border-t border-gray-300 pt-4 flex justify-between font-bold">
          <span>Total before taxes</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;