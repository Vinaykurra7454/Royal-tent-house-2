import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { BookingFormData } from '../types';
import { Calendar, Mail, Phone, User } from 'lucide-react';

export const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('product');
  const selectedProduct = products.find(p => p.id === productId);

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    items: selectedProduct ? [selectedProduct.id] : [],
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', formData);
    alert('Thank you for your booking! We will contact you shortly.');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book Your Event</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="inline h-4 w-4 mr-2" />
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline h-4 w-4 mr-2" />
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="inline h-4 w-4 mr-2" />
              Phone
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-2" />
              Event Date
            </label>
            <input
              type="date"
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
              value={formData.date}
              onChange={e => setFormData({...formData, date: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Message
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-md focus:ring-purple-500 focus:border-purple-500"
            rows={4}
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>

        {selectedProduct && (
          <div className="bg-purple-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Selected Item:</h3>
            <p>{selectedProduct.name} - ₹{selectedProduct.price}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};