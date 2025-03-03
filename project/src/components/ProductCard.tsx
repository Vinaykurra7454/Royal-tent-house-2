import React from 'react';
import { Product } from '../types';
import { IndianRupee } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center text-purple-600">
            <IndianRupee className="h-4 w-4 mr-1" />
            <span className="font-semibold">{product.price}</span>
          </div>
          <button
            onClick={() => onSelect(product)}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};