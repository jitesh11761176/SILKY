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
  category: 'kitchen-accessories' | 'wardrobe-accessories' | 'hardware-hinges' | 'storage-systems' | 'miscellaneous-accessories';
  description: string;
  features: string[];
  sizes: string[];
  material: string;
  images: string[];
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
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
