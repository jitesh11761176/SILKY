import { Product, Category, Testimonial, FAQ } from './types';

export const BRAND_NAME = 'KELLEN';
export const COMPANY_NAME = 'Stylex Industries';
export const EMAIL = 'kellenkitchenproducts@gmail.com';
export const WEBSITE = 'www.kellenindia.com';
export const WHATSAPP_NUMBER = '919876543210';
export const WHATSAPP_MESSAGE = 'Hello Stylex Industries, I am interested in KELLEN modular accessories.';

export const CATEGORIES: Category[] = [
  {
    id: 'cat1',
    title: 'Kitchen Accessories',
    slug: 'kitchen-accessories',
    description: 'Premium stainless steel baskets, pullouts, and corner units for efficient kitchen storage.',
    image: 'https://picsum.photos/seed/kellen-kitchen/800/600'
  },
  {
    id: 'cat2',
    title: 'Wardrobe Accessories',
    slug: 'wardrobe-accessories',
    description: 'Elegant pullouts and hangers for modern wardrobe systems.',
    image: 'https://picsum.photos/seed/kellen-wardrobe/800/600'
  },
  {
    id: 'cat3',
    title: 'Hardware & Hinges',
    slug: 'hardware-hinges',
    description: 'Precision engineered hinges and telescopic channels.',
    image: 'https://picsum.photos/seed/kellen-hardware/800/600'
  },
  {
    id: 'cat4',
    title: 'Storage Systems',
    slug: 'storage-systems',
    description: 'Smart pantry units and corner solutions for maximum space.',
    image: 'https://picsum.photos/seed/kellen-storage/800/600'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Plain Basket',
    slug: 'plain-basket',
    category: 'kitchen-accessories',
    description: 'Premium stainless steel plain basket designed for modular kitchen storage. Provides durable and hygienic storage for kitchen items.',
    features: ['Rust proof', 'Strong construction', 'Long lasting durability', 'Smooth sliding mechanism'],
    sizes: ['15 × 20 × 4', '17 × 20 × 4', '21 × 20 × 4'],
    material: '100% Stainless Steel',
    images: ['https://picsum.photos/seed/plain-basket/800/600']
  },
  {
    id: 'p2',
    name: 'Bottle Pullout',
    slug: 'bottle-pullout',
    category: 'kitchen-accessories',
    description: 'Slim storage solution for bottles and jars, utilizing narrow spaces in the kitchen efficiently.',
    features: ['Space saving design', 'Easy access', 'Chrome finish', '2 or 3 shelf variants'],
    sizes: ['4x20x17', '6x20x17', '8x20x17'],
    material: '100% Stainless Steel',
    images: ['https://picsum.photos/seed/bottle-pullout/800/600']
  },
  {
    id: 'p3',
    name: 'Magic Corner',
    slug: 'magic-corner',
    category: 'kitchen-accessories',
    description: 'Innovative corner storage solution that brings items out of the deep corner for easy access.',
    features: ['Soft close mechanism', 'Heavy load capacity', 'Left/Right opening options', 'Maximum corner utilization'],
    sizes: ['33x19x22', '33x20x24'],
    material: 'Stainless Steel & High-grade Mechanism',
    images: ['https://picsum.photos/seed/magic-corner/800/600']
  },
  {
    id: 'p4',
    name: 'Pantry Unit',
    slug: 'pantry-unit',
    category: 'storage-systems',
    description: 'Large capacity storage system for dry groceries, featuring multiple inner and outer baskets.',
    features: ['12 Inner + 12 Outer baskets', 'Smooth pullout action', 'Adjustable heights', 'Premium aesthetics'],
    sizes: ['15x20x48', '15x20x72', '30x20x72'],
    material: 'SS 304 Grade Steel',
    images: ['https://picsum.photos/seed/pantry-unit/800/600']
  },
  {
    id: 'p5',
    name: 'Dish Rack',
    slug: 'dish-rack',
    category: 'kitchen-accessories',
    description: 'Wall-mounted or cabinet-integrated rack for drying and storing plates and glasses.',
    features: ['Drip tray included', 'Corrosion resistant', 'Sturdy wire design', 'Easy to clean'],
    sizes: ['600mm', '700mm', '800mm', '900mm', '1000mm'],
    material: '100% Stainless Steel',
    images: ['https://picsum.photos/seed/dish-rack/800/600']
  },
  {
    id: 'p6',
    name: 'Wardrobe Pullout',
    slug: 'wardrobe-pullout',
    category: 'wardrobe-accessories',
    description: 'Specialized pullouts for trousers, sarees, and shoes to keep your wardrobe organized.',
    features: ['Anti-slip design', 'Telescopic slides', 'Space efficient', 'Durable finish'],
    sizes: ['24x20x4', '28x20x4', '32x20x4'],
    material: 'Stainless Steel with Soft Close Channels',
    images: ['https://picsum.photos/seed/wardrobe-pullout/800/600']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Kumar',
    role: 'Authorized Dealer, Ahmedabad',
    content: 'The quality of KELLEN products is unmatched. The SS 304 grade steel they use is truly rust-proof, which makes my customers very happy.',
    rating: 5,
    image: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    id: 't2',
    name: 'Sneha Patel',
    role: 'Interior Designer',
    content: 'I always recommend Stylex Industries to my clients for their modular kitchens. Their mechanisms are smooth and the range is very comprehensive.',
    rating: 5,
    image: 'https://picsum.photos/seed/person2/100/100'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'What grade of stainless steel is used in KELLEN products?',
    answer: 'We primarily use high-grade Austenitic Stainless Steel (SS 304) for our premium range to ensure lifetime rust protection and hygiene.'
  },
  {
    question: 'Do you provide a warranty on your products?',
    answer: 'Yes, we offer a 10-year durability warranty on our stainless steel accessories against manufacturing defects and rusting.'
  },
  {
    question: 'How can I become an authorized KELLEN dealer?',
    answer: 'You can apply through our "Become a Dealer" page or contact our sales team directly on WhatsApp. We look for partners with established showrooms and a commitment to quality.'
  },
  {
    question: 'Are custom sizes available for baskets?',
    answer: 'While we have a wide range of standard sizes, we do accept orders for non-standard sizes against specific requirements for bulk orders.'
  }
];
