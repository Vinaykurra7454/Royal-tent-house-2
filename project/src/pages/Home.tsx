import React from 'react';
import { Link } from 'react-router-dom';
import { Tent, Music, Utensils } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[70vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Royal Tent House</h1>
            <p className="text-xl mb-8">Making Your Special Day Even More Special</p>
            <Link
              to="/book"
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Tent className="h-12 w-12 mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Tents</h3>
            <p className="text-gray-600">Elegant and spacious tents for all your celebration needs</p>
          </div>
          <div className="text-center p-6">
            <Music className="h-12 w-12 mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sound Systems</h3>
            <p className="text-gray-600">Professional audio equipment for perfect acoustics</p>
          </div>
          <div className="text-center p-6">
            <Utensils className="h-12 w-12 mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Catering Equipment</h3>
            <p className="text-gray-600">Complete dining solutions for your events</p>
          </div>
        </div>
      </div>
    </div>
  );
};