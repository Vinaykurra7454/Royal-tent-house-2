import React from 'react';
import { Link } from 'react-router-dom';
import { Tent, Phone } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Tent className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">Royal Tent House</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-purple-600">Products</Link>
            <Link to="/book" className="text-gray-600 hover:text-purple-600">Book Now</Link>
            <a href="tel:+1234567890" className="flex items-center text-purple-600">
              <Phone className="h-5 w-5 mr-2" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};