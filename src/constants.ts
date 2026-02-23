import { Service, Product, Testimonial, FAQ } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Modular Kitchen',
    slug: 'modular-kitchen',
    description: 'Ergonomic, stylish, and highly functional kitchen solutions tailored to your cooking style.',
    longDescription: 'Our modular kitchens are designed to maximize space and efficiency. We use premium materials that withstand heat, moisture, and heavy usage while maintaining a sophisticated aesthetic.',
    image: 'https://picsum.photos/seed/kitchen1/1200/800',
    features: ['BWP Marine Plywood', 'Soft-close German Hardware', 'Custom Lighting', 'Smart Storage Solutions'],
    benefits: ['10-Year Warranty', 'Termite & Water Resistant', 'Easy Maintenance', 'Quick Installation']
  },
  {
    id: '2',
    title: 'Bespoke Wardrobes',
    slug: 'wardrobes',
    description: 'Elegant storage solutions that blend perfectly with your bedroom decor.',
    longDescription: 'From walk-in closets to sliding door wardrobes, we create storage that reflects your personality and organizes your life beautifully.',
    image: 'https://picsum.photos/seed/wardrobe1/1200/800',
    features: ['Floor-to-ceiling Designs', 'Integrated Mirrors', 'Sensor Lighting', 'Premium Finishes'],
    benefits: ['Space Optimization', 'Durable Construction', 'Aesthetic Integration', 'Custom Compartments']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Emerald Island Kitchen',
    slug: 'emerald-island-kitchen',
    category: 'kitchen',
    description: 'A luxurious island kitchen with emerald green accents and marble countertops.',
    priceRange: 'Premium',
    images: ['https://picsum.photos/seed/p1/800/600', 'https://picsum.photos/seed/p1b/800/600'],
    features: ['Quartz Countertop', 'Hidden Pantry', 'Built-in Appliances', 'LED Profile Lighting']
  },
  {
    id: 'p2',
    name: 'Minimalist Slate Wardrobe',
    slug: 'minimalist-slate-wardrobe',
    category: 'wardrobe',
    description: 'Sleek slate grey finish with matte black handles for a modern look.',
    priceRange: 'Mid-High',
    images: ['https://picsum.photos/seed/p2/800/600', 'https://picsum.photos/seed/p2b/800/600'],
    features: ['Soft-touch Finish', 'Full-length Mirror', 'Adjustable Shelving', 'Anti-dust Seals']
  },
  {
    id: 'p3',
    name: 'Classic Oak Parallel Kitchen',
    slug: 'classic-oak-kitchen',
    category: 'kitchen',
    description: 'Warm oak textures combined with modern white cabinetry.',
    priceRange: 'Premium',
    images: ['https://picsum.photos/seed/p3/800/600'],
    features: ['Solid Wood Accents', 'Pull-out Larder', 'Ceramic Sink', 'Tiled Backsplash']
  },
  {
    id: 'p4',
    name: 'Royal Velvet Walk-in',
    slug: 'royal-velvet-walkin',
    category: 'wardrobe',
    description: 'The ultimate luxury storage experience with velvet-lined drawers.',
    priceRange: 'Luxury',
    images: ['https://picsum.photos/seed/p4/800/600'],
    features: ['Jewelry Organizer', 'Glass Shutters', 'Automatic Lighting', 'Premium Veneer']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'Aura Modular transformed our dated kitchen into a masterpiece. The attention to detail is unmatched.',
    rating: 5,
    image: 'https://picsum.photos/seed/user1/100/100'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Architect',
    content: 'As an architect, I appreciate their precision and the quality of materials they use. Highly recommended.',
    rating: 5,
    image: 'https://picsum.photos/seed/user2/100/100'
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'How long does the installation take?',
    answer: 'Typically, a standard kitchen installation takes 15-20 days after the design is finalized and manufacturing is complete.'
  },
  {
    question: 'Do you provide a warranty?',
    answer: 'Yes, we provide a 10-year warranty on our BWP plywood and a lifetime warranty on selected hardware components.'
  },
  {
    question: 'Can I customize the designs?',
    answer: 'Absolutely! Every project we undertake is 100% customized to the client\'s space, needs, and aesthetic preferences.'
  }
];

export const WHATSAPP_NUMBER = '1234567890'; // Placeholder
export const WHATSAPP_MESSAGE = 'Hello, I want enquiry about modular kitchen';
