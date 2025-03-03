export interface Product {
  id: string;
  name: string;
  category: 'tent' | 'sound' | 'decoration' | 'furniture' | 'catering';
  description: string;
  price: number;
  image: string;
  capacity?: number;
  features?: string[];
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  items: string[];
  message: string;
}