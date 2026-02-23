export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  benefits: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'kitchen' | 'wardrobe' | 'accessory';
  description: string;
  priceRange: string;
  images: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
