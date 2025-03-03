import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductSelect = (product: Product) => {
    // Navigate to booking page with selected product
    window.location.href = `/book?product=${product.id}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      {/* Category Filter */}
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-md ${
            selectedCategory === 'all' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          All
        </button>
        {['tent', 'sound', 'decoration', 'furniture', 'catering'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md capitalize ${
              selectedCategory === category 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleProductSelect}
          />
        ))}
      </div>
    </div>
  );
};