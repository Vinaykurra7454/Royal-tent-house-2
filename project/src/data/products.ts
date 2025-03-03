import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Luxury Wedding Tent',
    category: 'tent',
    description: 'Elegant white wedding tent with decorative draping and chandelier options',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80',
    capacity: 200,
    features: ['Waterproof', 'AC Compatible', 'Chandelier Setup', 'Side Walls']
  },
  {
    id: '2',
    name: 'Professional Sound System',
    category: 'sound',
    description: 'High-quality sound system perfect for ceremonies and receptions',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80',
    features: ['DJ Console', '4 Speakers', 'Wireless Microphones', 'Mixer']
  },
  {
    id: '3',
    name: 'Premium Dining Set',
    category: 'catering',
    description: 'Complete dining set including plates, bowls, and cutlery',
    price: 500,
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80',
    capacity: 100,
    features: ['Gold-rimmed plates', 'Premium cutlery', 'Wine glasses', 'Table accessories']
  }
];