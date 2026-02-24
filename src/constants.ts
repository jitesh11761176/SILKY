import { Product, Category, Testimonial, FAQ } from './types';
import plainBasketImg from './assets/products/plain-basket.jpg';
import magicCornerImg from './assets/products/magic-corner.jpg';
import bottlePulloutImg from './assets/products/bottle-pullout.jpg';
import pantryUnitImg from './assets/products/pantry-unit.jpg';
import cutleryBasketImg from './assets/products/cutlery-basket.jpg';
import grainBasketImg from './assets/products/grain-basket.jpg';
import plateBasketImg from './assets/products/plate-basket.jpg';
import wardrobePulloutImg from './assets/products/wardrobe-pullout.jpg';

export const BRAND_NAME = 'KELLEN';
export const COMPANY_NAME = 'Stylex Industries';
export const EMAIL = 'kellenkitchenproducts@gmail.com';
export const WEBSITE = 'www.kellenindia.com';
export const WHATSAPP_NUMBER = '919876543210';
export const WHATSAPP_MESSAGE = 'Hello Stylex Industries, I am interested in KELLEN modular accessories.';

export const CATEGORIES: Category[] = [
  {
    id: 'kitchen-accessories',
    title: 'Kitchen Accessories',
    slug: 'kitchen-accessories',
    description: 'Premium stainless steel baskets, pullouts, and corner units for efficient kitchen storage.',
    image: 'https://picsum.photos/seed/kellen-kitchen/800/600'
  },
  {
    id: 'wardrobe-accessories',
    title: 'Wardrobe Accessories',
    slug: 'wardrobe-accessories',
    description: 'Elegant pullouts and hangers for modern wardrobe systems.',
    image: 'https://picsum.photos/seed/kellen-wardrobe/800/600'
  },
  {
    id: 'hardware-hinges',
    title: 'Hardware & Hinges',
    slug: 'hardware-hinges',
    description: 'Precision engineered hinges, tandem boxes, and telescopic channels.',
    image: 'https://picsum.photos/seed/kellen-hardware/800/600'
  },
  {
    id: 'storage-systems',
    title: 'Storage Systems',
    slug: 'storage-systems',
    description: 'Smart pantry units, tall units, and corner solutions for maximum space.',
    image: 'https://picsum.photos/seed/kellen-storage/800/600'
  },
  {
    id: 'miscellaneous-accessories',
    title: 'Miscellaneous Accessories',
    slug: 'miscellaneous-accessories',
    description: 'Essential kitchen utilities, stands, and racks for a complete modular experience.',
    image: 'https://picsum.photos/seed/kellen-misc/800/600'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'plain-basket',
    name: 'Plain Basket',
    slug: 'plain-basket',
    category: 'kitchen-accessories',
    description: 'Premium stainless steel plain basket designed for modular kitchen storage. Provides durable and hygienic storage for kitchen items.',
    features: ['100% Stainless Steel', 'Rust Proof', 'Smooth Sliding', 'Long Life Durability'],
    sizes: ['15x20x4', '17x20x4', '19x20x4', '21x20x4', '24x20x4', '27x20x4', '32x20x4', '15x20x6', '17x20x6', '19x20x6', '21x20x6', '24x20x6', '27x20x6', '32x20x6', '15x20x8', '17x20x8', '19x20x8', '21x20x8', '24x20x8', '27x20x8', '32x20x8'],
    material: '100% Stainless Steel',
    images: [plainBasketImg],
    specifications: {
      'Material Grade': 'Austenitic Stainless Steel',
      'Finish': 'Multi-layer Chrome Plated',
      'Warranty': '10 Years',
      'Mechanism': 'Smooth Sliding'
    }
  },
  {
    id: 'plate-basket',
    name: 'Plate Basket',
    slug: 'plate-basket',
    category: 'kitchen-accessories',
    description: 'Specially designed basket for organized plate storage in modular kitchens.',
    features: ['Organized Plate Storage', 'Rust Proof', 'Stainless Steel Construction', 'Easy to Clean'],
    sizes: ['15x20x6', '17x20x6', '19x20x6', '21x20x6'],
    material: '100% Stainless Steel',
    images: [plateBasketImg]
  },
  {
    id: 'cup-saucer-basket',
    name: 'Cup & Saucer Basket',
    slug: 'cup-saucer-basket',
    category: 'kitchen-accessories',
    description: 'Dedicated basket for safe and organized storage of cups and saucers.',
    features: ['Dedicated Cup/Saucer Slots', 'Stainless Steel', 'Rust Proof', 'Space Efficient'],
    sizes: ['15x20x4', '17x20x4', '19x20x4', '21x20x4'],
    material: '100% Stainless Steel',
    images: ['https://picsum.photos/seed/cup-saucer/800/600']
  },
  {
    id: 'cutlery-basket',
    name: 'Cutlery Basket',
    slug: 'cutlery-basket',
    category: 'kitchen-accessories',
    description: 'Available in Wire, Box, and Perforated types for organized cutlery storage.',
    features: ['Multiple Types (Wire/Box/Perforated)', 'Organized Storage', 'Stainless Steel', 'Durable'],
    sizes: ['15x20x4', '17x20x4', '19x20x4', '21x20x4'],
    material: '100% Stainless Steel',
    images: [cutleryBasketImg]
  },
  {
    id: 'bottle-pullout',
    name: 'Bottle Pullout',
    slug: 'bottle-pullout',
    category: 'kitchen-accessories',
    description: 'Slim storage solution for bottles and jars, utilizing narrow spaces in the kitchen efficiently.',
    features: ['Space saving design', 'Easy access', 'Chrome finish', '2 or 3 shelf variants'],
    sizes: ['4x20x17', '6x20x17', '8x20x17', '10x20x17', '4x20x21', '6x20x21', '8x20x21', '10x20x21'],
    material: '100% Stainless Steel',
    images: [bottlePulloutImg]
  },
  {
    id: 'magic-corner',
    name: 'Magic Corner',
    slug: 'magic-corner',
    category: 'kitchen-accessories',
    description: 'Innovative corner storage solution that brings items out of the deep corner for easy access.',
    features: ['Soft close mechanism', 'Heavy load capacity', 'Left/Right opening options', 'Maximum corner utilization'],
    sizes: ['33x19x22', '33x20x24'],
    material: 'Stainless Steel & High-grade Mechanism',
    images: [magicCornerImg]
  },
  {
    id: 'pantry-unit',
    name: 'Pantry Unit',
    slug: 'pantry-unit',
    category: 'storage-systems',
    description: 'Large capacity storage system for dry groceries, featuring multiple inner and outer baskets.',
    features: ['12 Inner + 12 Outer baskets', 'Smooth pullout action', 'Adjustable heights', 'Premium aesthetics'],
    sizes: ['15x20x48', '15x20x72', '30x20x72', '16x20x22'],
    material: 'SS 304 Grade Steel',
    images: [pantryUnitImg]
  },
  {
    id: 'dish-rack',
    name: 'Dish Rack',
    slug: 'dish-rack',
    category: 'kitchen-accessories',
    description: 'Wall-mounted or cabinet-integrated rack for drying and storing plates and glasses.',
    features: ['Drip tray included', 'Corrosion resistant', 'Sturdy wire design', 'Easy to clean'],
    sizes: ['24x10', '26x10', '28x10', '30x10', '32x10', '34x10', '36x10'],
    material: '100% Stainless Steel',
    images: ['https://picsum.photos/seed/dish-rack/800/600']
  },
  {
    id: 'grain-basket',
    name: 'Grain Basket',
    slug: 'grain-basket',
    category: 'kitchen-accessories',
    description: 'Heavy-duty basket for storing grain containers and large kitchen items.',
    features: ['Heavy Duty', 'Large Capacity', 'Stainless Steel', 'Strong Construction'],
    sizes: ['15x20x12', '17x20x12', '19x20x12', '21x20x12'],
    material: '100% Stainless Steel',
    images: [grainBasketImg]
  },
  {
    id: 'vegetable-basket',
    name: 'Vegetable Basket',
    slug: 'vegetable-basket',
    category: 'kitchen-accessories',
    description: 'Ventilated basket for fresh vegetable storage in modular kitchens.',
    features: ['Ventilated Design', 'Stainless Steel', 'Rust Proof', 'Easy Access'],
    sizes: ['15x20x4', '17x20x4', '21x20x4', '15x20x6', '17x20x6', '21x20x6', '15x20x8', '17x20x8', '21x20x8'],
    material: '100% Stainless Steel',
    images: ['https://picsum.photos/seed/vegetable-basket/800/600']
  },
  {
    id: 'masala-pullout',
    name: 'Masala Pullout',
    slug: 'masala-pullout',
    category: 'kitchen-accessories',
    description: 'Dedicated pullout for spice jars and masala containers.',
    features: ['Spice Jar Organization', 'Slim Design', 'Stainless Steel', 'Smooth Operation'],
    sizes: ['4x20x21', '6x20x21', '8x20x21', '10x20x21'],
    material: '100% Stainless Steel',
    images: ['https://picsum.photos/seed/masala-pullout/800/600']
  },
  {
    id: 'wardrobe-accessories',
    name: 'Wardrobe Accessories',
    slug: 'wardrobe-accessories',
    category: 'wardrobe-accessories',
    description: 'Specialized pullouts for trousers, sarees, and shoes to keep your wardrobe organized.',
    features: ['Anti-slip design', 'Telescopic slides', 'Space efficient', 'Durable finish'],
    sizes: ['24x20x4', '28x20x4', '32x20x4', '24x20x8', '28x20x8', '32x20x8'],
    material: 'Stainless Steel with Soft Close Channels',
    images: [wardrobePulloutImg]
  },
  {
    id: 'hinges',
    name: 'Premium Hinges',
    slug: 'hinges',
    category: 'hardware-hinges',
    description: 'High-quality soft-close hinges for kitchen and wardrobe doors.',
    features: ['Soft close', 'Clip-on mechanism', 'Corrosion resistant', 'Tested for 50,000 cycles'],
    sizes: ['0 Crank', '8 Crank', '15 Crank', '135 Degree', '165 Degree'],
    material: 'Stainless Steel / Nickel Plated',
    images: ['https://picsum.photos/seed/hinges/800/600']
  },
  {
    id: 'tandem-box',
    name: 'Kitchen Tandem Box',
    slug: 'tandem-box',
    category: 'hardware-hinges',
    description: 'Modern drawer system with smooth motion and high load capacity.',
    features: ['Soft close', 'Full extension', 'High load capacity', 'Available in various heights'],
    sizes: ['4 inch', '6 inch', '8 inch'],
    material: 'Steel & High-grade Mechanism',
    images: ['https://picsum.photos/seed/tandem-box/800/600']
  },
  {
    id: 'carrousel-unit',
    name: 'Carrousel Unit (3/4) 270°',
    slug: 'carrousel-unit',
    category: 'kitchen-accessories',
    description: 'Rotating corner storage solution for maximum accessibility.',
    features: ['270 Degree Rotation', 'Heavy Load Capacity', 'Stainless Steel Wire', 'Smooth Motion'],
    sizes: ['18 Dia', '21 Dia', '24 Dia', '27 Dia', '30 Dia'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/carrousel/800/600']
  },
  {
    id: 'dee-tray',
    name: 'Dee Tray (1/2) 180°',
    slug: 'dee-tray',
    category: 'kitchen-accessories',
    description: 'Half-round rotating tray for corner cabinets.',
    features: ['180 Degree Rotation', 'Space Efficient', 'Stainless Steel', 'Easy Installation'],
    sizes: ['18 Dia', '21 Dia', '24 Dia', '27 Dia', '30 Dia'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/dee-tray/800/600']
  },
  {
    id: 'removable-cutlery',
    name: 'Removable Cutlery Basket',
    slug: 'removable-cutlery',
    category: 'kitchen-accessories',
    description: 'Flexible cutlery storage that can be easily removed for cleaning or serving.',
    features: ['Removable Trays', 'Stainless Steel', 'Hygienic', 'Durable'],
    sizes: ['15x20x4', '17x20x4', '21x20x4'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/removable-cutlery/800/600']
  },
  {
    id: 'large-utensils',
    name: 'Large Utensils Basket',
    slug: 'large-utensils',
    category: 'kitchen-accessories',
    description: 'Heavy-duty basket for large pots, pans, and utensils.',
    features: ['Heavy Duty', 'Large Capacity', 'Stainless Steel', 'Strong Construction'],
    sizes: ['24x20x4', '26x20x4', '28x20x4', '30x20x4'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/large-utensils/800/600']
  },
  {
    id: 'tall-unit',
    name: 'Tall Unit',
    slug: 'tall-unit',
    category: 'storage-systems',
    description: 'Full-height storage solution for modern kitchens.',
    features: ['Maximum Storage', 'Smooth Pullout', 'Adjustable Shelves', 'Premium Finish'],
    sizes: ['15x20x48', '15x20x72'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/tall-unit/800/600']
  },
  {
    id: 'double-pantry',
    name: 'Double Pantry Unit',
    slug: 'double-pantry',
    category: 'storage-systems',
    description: 'Extra-wide pantry system for maximum storage capacity.',
    features: ['Double Door Access', 'Massive Capacity', 'Smooth Mechanism', 'Stainless Steel Baskets'],
    sizes: ['15x20x48', '15x20x72', '30x20x72'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/double-pantry/800/600']
  },
  {
    id: 'mini-pantry',
    name: 'Mini Pantry Unit',
    slug: 'mini-pantry',
    category: 'storage-systems',
    description: 'Compact pantry solution for smaller kitchen spaces.',
    features: ['Space Saving', 'Efficient Storage', 'Stainless Steel', 'Smooth Action'],
    sizes: ['16x20x22'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/mini-pantry/800/600']
  },
  {
    id: 'side-saree-pullout',
    name: 'Side Saree Pullout',
    slug: 'side-saree-pullout',
    category: 'wardrobe-accessories',
    description: 'Specialized pullout for organized saree storage.',
    features: ['Crease-free Storage', 'Easy Access', 'Stainless Steel', 'Smooth Slides'],
    sizes: ['15x20x6'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/saree-pullout/800/600']
  },
  {
    id: 'shoe-rack-pullout',
    name: 'Shoe Rack Pullout',
    slug: 'shoe-rack-pullout',
    category: 'wardrobe-accessories',
    description: 'Organized shoe storage solution for wardrobes.',
    features: ['Ventilated Design', 'Large Capacity', 'Stainless Steel', 'Smooth Operation'],
    sizes: ['24x20x8', '28x20x8', '32x20x8'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/shoe-rack/800/600']
  },
  {
    id: 'cylinder-trolley',
    name: 'Cylinder Trolley',
    slug: 'cylinder-trolley',
    category: 'kitchen-accessories',
    description: 'Heavy-duty trolley for easy movement of gas cylinders.',
    features: ['Heavy Duty Wheels', 'Stainless Steel', 'Rust Proof', 'Easy Movement'],
    sizes: ['Standard'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/cylinder-trolley/800/600']
  },
  {
    id: 'water-filter-stand',
    name: 'Water Filter Stand',
    slug: 'water-filter-stand',
    category: 'kitchen-accessories',
    description: 'Sturdy stand for kitchen water filters.',
    features: ['Sturdy Construction', 'Stainless Steel', 'Rust Proof', 'Space Saving'],
    sizes: ['15x8x14'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/filter-stand/800/600']
  },
  {
    id: 'partition-basket',
    name: 'Partition Basket',
    slug: 'partition-basket',
    category: 'kitchen-accessories',
    description: 'Basket with partitions for organized storage of various kitchen items.',
    features: ['Organized Partitions', 'Stainless Steel', 'Rust Proof', 'Durable'],
    sizes: ['15x20x4', '17x20x4', '21x20x4', '15x20x6', '17x20x6', '21x20x6', '15x20x8', '17x20x8', '21x20x8'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/partition-basket/800/600']
  },
  {
    id: 'perforated-cutlery',
    name: 'Perforated Cutlery Basket',
    slug: 'perforated-cutlery',
    category: 'kitchen-accessories',
    description: 'Cutlery basket with perforated design for better drainage and hygiene.',
    features: ['Perforated Design', 'Stainless Steel', 'Easy Drainage', 'Rust Proof'],
    sizes: ['15x20x4', '17x20x4', '21x20x4'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/perforated-cutlery/800/600']
  },
  {
    id: 'full-round-360',
    name: 'Full Round 360°',
    slug: 'full-round-360',
    category: 'kitchen-accessories',
    description: '360-degree rotating tray for full corner cabinet access.',
    features: ['360 Degree Rotation', 'Maximum Access', 'Stainless Steel', 'Smooth Motion'],
    sizes: ['18 Dia', '21 Dia', '24 Dia', '27 Dia', '30 Dia'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/full-round/800/600']
  },
  {
    id: 'detergent-holder',
    name: 'Detergent Holder',
    slug: 'detergent-holder',
    category: 'kitchen-accessories',
    description: 'Dedicated holder for detergents and cleaning supplies.',
    features: ['Organized Storage', 'Corrosion Resistant', 'Stainless Steel', 'Easy to Install'],
    sizes: ['12x6x16'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/detergent-holder/800/600']
  },
  {
    id: 'bin-holder',
    name: 'Bin Holder',
    slug: 'bin-holder',
    category: 'kitchen-accessories',
    description: 'Sturdy holder for kitchen waste bins.',
    features: ['Sturdy Design', 'Stainless Steel', 'Easy Access', 'Hygienic'],
    sizes: ['10 Dia'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/bin-holder/800/600']
  },
  {
    id: 'glass-tray-plate-tray',
    name: 'Glass Tray Plate Tray',
    slug: 'glass-tray-plate-tray',
    category: 'kitchen-accessories',
    description: 'Combined tray for storing glasses and plates efficiently.',
    features: ['Dual Storage', 'Stainless Steel', 'Rust Proof', 'Space Saving'],
    sizes: ['24x10', '26x10', '28x10', '30x10', '32x10', '34x10', '36x10'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/glass-plate-tray/800/600']
  },
  {
    id: 'sink-basket',
    name: 'Sink Basket',
    slug: 'sink-basket',
    category: 'kitchen-accessories',
    description: 'Basket designed for use in or near the kitchen sink.',
    features: ['Water Resistant', 'Stainless Steel', 'Easy Drainage', 'Durable'],
    sizes: ['16x12x10'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/sink-basket/800/600']
  },
  {
    id: 'hanging-cup-saucer',
    name: 'Hanging Cup & Saucer',
    slug: 'hanging-cup-saucer',
    category: 'kitchen-accessories',
    description: 'Space-saving hanging rack for cups and saucers.',
    features: ['Hanging Design', 'Space Saving', 'Stainless Steel', 'Easy Access'],
    sizes: ['15x6x12'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/hanging-cup/800/600']
  },
  {
    id: 'basket-below-sink',
    name: 'Basket Below Sink',
    slug: 'basket-below-sink',
    category: 'kitchen-accessories',
    description: 'Storage basket designed for the space under the kitchen sink.',
    features: ['Under-sink Storage', 'Stainless Steel', 'Rust Proof', 'Large Capacity'],
    sizes: ['32x20x6'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/below-sink/800/600']
  },
  {
    id: 'use-me-bin',
    name: 'Use Me (Bin)',
    slug: 'use-me-bin',
    category: 'miscellaneous-accessories',
    description: 'Stainless steel waste bin for kitchen and bathroom use.',
    features: ['Stainless Steel', 'Hygienic', 'Durable', 'Sleek Design'],
    sizes: ['12 Dia'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/use-me-bin/800/600']
  },
  {
    id: 'single-pantry',
    name: 'Single Pantry Unit',
    slug: 'single-pantry',
    category: 'storage-systems',
    description: 'Single-door pantry storage system with multiple baskets.',
    features: ['Organized Storage', 'Smooth Pullout', 'Stainless Steel Baskets', 'Premium Finish'],
    sizes: ['15x20x48', '15x20x72'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/single-pantry/800/600']
  },
  {
    id: 'shelf-coat-hanger',
    name: 'Shelf with Coat Hanger',
    slug: 'shelf-coat-hanger',
    category: 'wardrobe-accessories',
    description: 'Wardrobe shelf with integrated coat hanging rod.',
    features: ['Dual Function', 'Stainless Steel', 'Sturdy Rod', 'Easy Installation'],
    sizes: ['24x20x6', '30x20x6', '36x20x6'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/coat-hanger/800/600']
  },
  {
    id: 'trouser-pullout',
    name: 'Basket with Trouser Pullout',
    slug: 'trouser-pullout',
    category: 'wardrobe-accessories',
    description: 'Wardrobe basket with integrated trouser hanging rods.',
    features: ['Trouser Organization', 'Stainless Steel', 'Smooth Slides', 'Space Efficient'],
    sizes: ['24x20x12', '30x20x12', '36x20x12'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/trouser-pullout/800/600']
  },
  {
    id: 'multipurpose-shelf',
    name: 'Multipurpose Shelf',
    slug: 'multipurpose-shelf',
    category: 'wardrobe-accessories',
    description: 'Versatile shelf for various wardrobe storage needs.',
    features: ['Versatile Use', 'Stainless Steel', 'Durable', 'Easy to Clean'],
    sizes: ['24x20', '30x20', '36x20'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/wardrobe-shelf/800/600']
  },
  {
    id: 'cloth-rack',
    name: 'Cloth Rack',
    slug: 'cloth-rack',
    category: 'wardrobe-accessories',
    description: 'Dedicated rack for hanging clothes in the wardrobe.',
    features: ['Sturdy Construction', 'Stainless Steel', 'Rust Proof', 'Easy Access'],
    sizes: ['24x20x6', '30x20x6', '36x20x6'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/cloth-rack/800/600']
  },
  {
    id: 'trouser-rack',
    name: 'Trouser Rack',
    slug: 'trouser-rack',
    category: 'wardrobe-accessories',
    description: 'Dedicated rack for organized trouser storage.',
    features: ['Crease-free Storage', 'Stainless Steel', 'Smooth Slides', 'Durable'],
    sizes: ['24x20x4', '30x20x4', '36x20x4'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/trouser-rack/800/600']
  },
  {
    id: 'tie-holder',
    name: 'Tie Holder',
    slug: 'tie-holder',
    category: 'wardrobe-accessories',
    description: 'Slim holder for organized tie storage.',
    features: ['Slim Design', 'Stainless Steel', 'Easy Access', 'Organized'],
    sizes: ['4x20x4'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/tie-holder/800/600']
  },
  {
    id: 'belt-holder',
    name: 'Belt Holder',
    slug: 'belt-holder',
    category: 'wardrobe-accessories',
    description: 'Slim holder for organized belt storage.',
    features: ['Slim Design', 'Stainless Steel', 'Easy Access', 'Organized'],
    sizes: ['4x20x4'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/belt-holder/800/600']
  },
  {
    id: 'shoe-rack',
    name: 'Shoe Rack',
    slug: 'shoe-rack',
    category: 'wardrobe-accessories',
    description: 'Dedicated rack for organized shoe storage.',
    features: ['Ventilated', 'Stainless Steel', 'Durable', 'Easy to Clean'],
    sizes: ['24x20x6', '30x20x6', '36x20x6'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/shoe-rack-wardrobe/800/600']
  },
  {
    id: 'hanger-pullout',
    name: 'Top Mounting Hanger Pullout',
    slug: 'hanger-pullout',
    category: 'wardrobe-accessories',
    description: 'Top-mounted pullout for hanging clothes in shallow wardrobes.',
    features: ['Top Mounted', 'Space Saving', 'Stainless Steel', 'Smooth Action'],
    sizes: ['4x20x6'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/hanger-pullout/800/600']
  },
  {
    id: 'fruit-baskets',
    name: 'Fruit Baskets (Fruit/Elite)',
    slug: 'fruit-baskets',
    category: 'miscellaneous-accessories',
    description: 'Elegant baskets for fresh fruit storage.',
    features: ['Elegant Design', 'Stainless Steel', 'Ventilated', 'Rust Proof'],
    sizes: ['Standard'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/fruit-basket/800/600']
  },
  {
    id: 'pylon-stand',
    name: 'Pylon Stand',
    slug: 'pylon-stand',
    category: 'miscellaneous-accessories',
    description: 'Multi-tier stand for kitchen organization.',
    features: ['Multi-tier', 'Stainless Steel', 'Sturdy', 'Space Saving'],
    sizes: ['18 H', '21 H', '24 H', '27 H'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/pylon-stand/800/600']
  },
  {
    id: 'multipurpose-rack',
    name: 'Multipurpose Rack',
    slug: 'multipurpose-rack',
    category: 'miscellaneous-accessories',
    description: 'Versatile rack for various kitchen storage needs.',
    features: ['Versatile', 'Stainless Steel', 'Rust Proof', 'Easy to Install'],
    sizes: ['12x6x10', '15x6x10', '18x6x10', '12x6x16', '15x6x16', '18x6x16'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/misc-rack/800/600']
  },
  {
    id: 'towel-rack-detail',
    name: 'Towel Rack',
    slug: 'towel-rack',
    category: 'kitchen-accessories',
    description: 'Elegant rack for kitchen or bathroom towels.',
    features: ['Corrosion Resistant', 'Sleek Design', 'Stainless Steel', 'Easy to Clean'],
    sizes: ['24x10x4'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/towel-rack/800/600']
  },
  {
    id: 'hinge-135',
    name: 'Hinge 135 Degree',
    slug: 'hinge-135',
    category: 'hardware-hinges',
    description: 'Specialized hinge for corner cabinet doors opening at 135 degrees.',
    features: ['135 Degree Opening', 'Stainless Steel', 'Durable', 'Smooth Operation'],
    sizes: ['Standard'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/hinge-135/800/600']
  },
  {
    id: 'hinge-3d-clip-on',
    name: 'Hinge 3D Clip On Hydraulic',
    slug: 'hinge-3d-clip-on',
    category: 'hardware-hinges',
    description: 'Advanced 3D adjustable clip-on hydraulic hinge for precise door alignment.',
    features: ['3D Adjustment', 'Hydraulic Soft Close', 'Clip-on Mechanism', 'Stainless Steel'],
    sizes: ['Standard'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/hinge-3d/800/600']
  },
  {
    id: 'hinge-concealed-sos',
    name: 'Hinge Concealed SOS Zinc',
    slug: 'hinge-concealed-sos',
    category: 'hardware-hinges',
    description: 'Concealed zinc hinge for a clean, minimalist look.',
    features: ['Concealed Design', 'Zinc Alloy', 'Sturdy', 'Sleek Finish'],
    sizes: ['13x45', '13x60', '16x70', '16x90', '25x118'],
    material: 'Zinc Alloy',
    images: ['https://picsum.photos/seed/hinge-sos/800/600']
  },
  {
    id: 'hinge-165',
    name: 'Hinge 165 Degree Hydraulic',
    slug: 'hinge-165',
    category: 'hardware-hinges',
    description: 'Wide-angle hydraulic hinge for maximum cabinet access.',
    features: ['165 Degree Opening', 'Hydraulic Soft Close', 'Stainless Steel', 'Heavy Duty'],
    sizes: ['Standard'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/hinge-165/800/600']
  },
  {
    id: 'hinge-led-light',
    name: 'Hinge LED Light',
    slug: 'hinge-led-light',
    category: 'hardware-hinges',
    description: 'Automatic LED light that clips onto hinges to illuminate cabinet interiors.',
    features: ['Automatic On/Off', 'Easy Clip-on', 'Battery Operated', 'Bright LED'],
    sizes: ['Standard'],
    material: 'PVC & Electronics',
    images: ['https://picsum.photos/seed/hinge-led/800/600']
  },
  {
    id: 'hinge-90',
    name: 'Hinge 90 Degree Hydraulic',
    slug: 'hinge-90',
    category: 'hardware-hinges',
    description: 'Standard 90-degree hydraulic soft-close hinge.',
    features: ['90 Degree Opening', 'Hydraulic Soft Close', 'Stainless Steel', 'Durable'],
    sizes: ['Standard'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/hinge-90/800/600']
  },
  {
    id: 'elevator-pullout-ss',
    name: 'Elevator Pull Out SS Basket',
    slug: 'elevator-pullout-ss',
    category: 'storage-systems',
    description: 'Pull-down elevator system for easy access to high cabinet storage.',
    features: ['Pull-down Mechanism', 'Adjustable Height', 'Stainless Steel Basket', 'Smooth Action'],
    sizes: ['600mm', '900mm'],
    material: 'Stainless Steel & High-grade Mechanism',
    images: ['https://picsum.photos/seed/elevator-ss/800/600']
  },
  {
    id: 'wastebin-auto-lid',
    name: 'Wastebin Auto Lid Swing Bin',
    slug: 'wastebin-auto-lid',
    category: 'kitchen-accessories',
    description: 'Automatic lid waste bin that swings out with the cabinet door.',
    features: ['Automatic Lid', 'Swing-out Design', 'Hygienic', 'Durable'],
    sizes: ['8 Ltr', '14 Ltr'],
    material: 'Stainless Steel & PVC',
    images: ['https://picsum.photos/seed/wastebin-auto/800/600']
  },
  {
    id: 'rolling-shutter',
    name: 'Kitchen Storage Rolling Shutter',
    slug: 'rolling-shutter',
    category: 'storage-systems',
    description: 'Sleek rolling shutter for concealing kitchen appliances and storage.',
    features: ['Smooth Rolling', 'Space Saving', 'Premium Finish', 'Durable'],
    sizes: ['600mm'],
    material: 'SS / PVC / Glass',
    images: ['https://picsum.photos/seed/rolling-shutter/800/600']
  },
  {
    id: 'flap-lift',
    name: 'Kitchen Cabinet Flap Lift',
    slug: 'flap-lift',
    category: 'hardware-hinges',
    description: 'Lift-up mechanism for overhead cabinet doors.',
    features: ['Smooth Lift', 'Soft Close', 'Single/Double Door Options', 'Durable'],
    sizes: ['Standard'],
    material: 'Steel & High-grade Mechanism',
    images: ['https://picsum.photos/seed/flap-lift/800/600']
  },
  {
    id: 'cloth-lifter',
    name: 'Wardrobe Cloth Lifter',
    slug: 'cloth-lifter',
    category: 'wardrobe-accessories',
    description: 'Pull-down rod for accessing high-hanging clothes in wardrobes.',
    features: ['Pull-down Action', 'Heavy Load Capacity', 'Adjustable Width', 'Smooth Operation'],
    sizes: ['12 KG Capacity', '15 KG Capacity'],
    material: 'Aluminium / Steel',
    images: ['https://picsum.photos/seed/cloth-lifter/800/600']
  },
  {
    id: 'gas-lift',
    name: 'Cabinet Lid Gas Lift',
    slug: 'gas-lift',
    category: 'hardware-hinges',
    description: 'Gas spring mechanism for smooth opening and holding of cabinet lids.',
    features: ['Smooth Opening', 'Brass Cylinder', 'Various Load Capacities', 'Durable'],
    sizes: ['8kg', '10kg', '12kg', '15kg', '25kg', '30kg', '60kg'],
    material: 'Steel & Brass',
    images: ['https://picsum.photos/seed/gas-lift/800/600']
  },
  {
    id: 'furniture-leg-ss',
    name: 'SS Adjustable Furniture Leg',
    slug: 'furniture-leg-ss',
    category: 'hardware-hinges',
    description: 'Adjustable stainless steel legs for kitchen cabinets and furniture.',
    features: ['Adjustable Height', 'Stainless Steel', 'Heavy Duty', 'Rust Proof'],
    sizes: ['50x50', '50x80', '50x100', '50x120', '50x150'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/leg-ss/800/600']
  },
  {
    id: 'cutlery-tray-pvc',
    name: 'PVC Cutlery Tray',
    slug: 'cutlery-tray-pvc',
    category: 'kitchen-accessories',
    description: 'Durable PVC tray for organized cutlery storage in drawers.',
    features: ['Organized Slots', 'Durable PVC', 'Easy to Clean', 'Various Sizes'],
    sizes: ['450mm', '600mm', '900mm'],
    material: 'PVC',
    images: ['https://picsum.photos/seed/cutlery-pvc/800/600']
  },
  {
    id: 'cutlery-tray-ss',
    name: 'SS Cutlery Tray',
    slug: 'cutlery-tray-ss',
    category: 'kitchen-accessories',
    description: 'Premium stainless steel tray for organized cutlery storage.',
    features: ['Stainless Steel', 'Hygienic', 'Rust Proof', 'Sleek Design'],
    sizes: ['450mm', '600mm', '900mm'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/cutlery-ss/800/600']
  },
  {
    id: 'cutlery-tray-wooden',
    name: 'Wooden Cutlery Tray',
    slug: 'cutlery-tray-wooden',
    category: 'kitchen-accessories',
    description: 'Elegant wooden tray for organized cutlery storage.',
    features: ['Natural Wood', 'Premium Look', 'Organized Slots', 'Durable'],
    sizes: ['450mm', '600mm', '900mm'],
    material: 'Wood',
    images: ['https://picsum.photos/seed/cutlery-wood/800/600']
  },
  {
    id: 'track-wheel-303',
    name: 'Single Track Wheel (303)',
    slug: 'track-wheel-303',
    category: 'hardware-hinges',
    description: 'Single track wheel for sliding cabinet doors.',
    features: ['Smooth Sliding', 'Durable PVC', 'Easy Installation', 'Standard Fit'],
    sizes: ['Standard'],
    material: 'PVC & Steel',
    images: ['https://picsum.photos/seed/wheel-303/800/600']
  },
  {
    id: 'track-wheel-382',
    name: 'Double Track Wheel (382)',
    slug: 'track-wheel-382',
    category: 'hardware-hinges',
    description: 'Double track wheel for heavy-duty sliding doors.',
    features: ['Heavy Duty', 'Smooth Motion', 'Double Wheel Design', 'Durable'],
    sizes: ['Standard'],
    material: 'PVC & Steel',
    images: ['https://picsum.photos/seed/wheel-382/800/600']
  },
  {
    id: 'track-wheel-sc',
    name: 'Double Track Wheel Soft Close',
    slug: 'track-wheel-sc',
    category: 'hardware-hinges',
    description: 'Soft-close double track wheel for premium sliding systems.',
    features: ['Soft Close', 'Silent Operation', 'Double Wheel', 'Premium Quality'],
    sizes: ['Standard'],
    material: 'PVC & Steel',
    images: ['https://picsum.photos/seed/wheel-sc/800/600']
  },
  {
    id: 'door-slider-4w',
    name: '4 Wheel Door Slider HQ',
    slug: 'door-slider-4w',
    category: 'hardware-hinges',
    description: 'High-quality 4-wheel slider for smooth door operation.',
    features: ['4 Wheel Design', 'High Quality', 'Smooth Action', 'Durable'],
    sizes: ['Standard'],
    material: 'Steel & PVC',
    images: ['https://picsum.photos/seed/slider-4w/800/600']
  },
  {
    id: 'door-slider-8w',
    name: '8 Wheel Door Slider HQ',
    slug: 'door-slider-8w',
    category: 'hardware-hinges',
    description: 'Premium 8-wheel slider for heavy wardrobe doors.',
    features: ['8 Wheel Design', 'Heavy Duty', 'Ultra Smooth', 'Premium Quality'],
    sizes: ['Standard'],
    material: 'Steel & PVC',
    images: ['https://picsum.photos/seed/slider-8w/800/600']
  },
  {
    id: 'oval-bracket-metal',
    name: 'Oval Metal Bracket',
    slug: 'oval-bracket-metal',
    category: 'hardware-hinges',
    description: 'Sturdy metal bracket for oval wardrobe pipes.',
    features: ['Metal Construction', 'Sturdy', 'Easy to Install', 'Sleek Finish'],
    sizes: ['Standard'],
    material: 'Metal',
    images: ['https://picsum.photos/seed/bracket-metal/800/600']
  },
  {
    id: 'oval-pipe-steel',
    name: 'Oval Pipe Steel',
    slug: 'oval-pipe-steel',
    category: 'hardware-hinges',
    description: 'Durable steel oval pipe for wardrobe hanging rods.',
    features: ['Steel Construction', 'Durable', 'Rust Resistant', 'High Load Capacity'],
    sizes: ['Standard'],
    material: 'Steel',
    images: ['https://picsum.photos/seed/pipe-steel/800/600']
  },
  {
    id: 'minifix-metal',
    name: 'Minifix Metal HQ',
    slug: 'minifix-metal',
    category: 'hardware-hinges',
    description: 'High-quality metal minifix for strong furniture assembly.',
    features: ['Strong Connection', 'Metal Construction', 'Easy Assembly', 'Durable'],
    sizes: ['Standard'],
    material: 'Metal',
    images: ['https://picsum.photos/seed/minifix/800/600']
  },
  {
    id: 'shelf-pin-acrylic',
    name: 'Shelf Acrylic Pin',
    slug: 'shelf-pin-acrylic',
    category: 'hardware-hinges',
    description: 'Transparent acrylic pin for supporting glass or wooden shelves.',
    features: ['Transparent', 'Sturdy', 'Easy to Install', 'Minimalist'],
    sizes: ['Standard'],
    material: 'Acrylic',
    images: ['https://picsum.photos/seed/shelf-pin/800/600']
  },
  {
    id: 'ss-quodro-channel',
    name: 'SS Quodro Channel Soft Close',
    slug: 'ss-quodro-channel',
    category: 'hardware-hinges',
    description: 'Premium stainless steel under-mount drawer channels with soft-close mechanism.',
    features: ['Stainless Steel', 'Soft Close', 'Under-mount Design', 'Smooth Operation'],
    sizes: ['18"', '20"', '22"', '24"'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/quodro-ss/800/600']
  },
  {
    id: 'quodro-channel',
    name: 'Quodro Channel Soft Close',
    slug: 'quodro-channel',
    category: 'hardware-hinges',
    description: 'High-quality under-mount drawer channels for smooth and silent drawer movement.',
    features: ['Soft Close', 'Under-mount', 'Heavy Load Capacity', 'Durable'],
    sizes: ['18"', '20"', '22"', '24"'],
    material: 'Steel',
    images: ['https://picsum.photos/seed/quodro/800/600']
  },
  {
    id: 'kitchen-tandem-box',
    name: 'Kitchen Tandem Box',
    slug: 'kitchen-tandem-box',
    category: 'hardware-hinges',
    description: 'Modern drawer system for organized kitchen storage with soft-close technology.',
    features: ['Soft Close', 'Full Extension', 'High Load Capacity', 'Elegant Design'],
    sizes: ['4" - 500 MM'],
    material: 'Steel (White, Grey, Dark Grey)',
    images: ['https://picsum.photos/seed/tandem/800/600'],
    specifications: {
      'Load Capacity': '35 KG / 50 KG',
      'Finish': 'Powder Coated',
      'Cycle Test': '50,000 Cycles'
    }
  },
  {
    id: 'kitchen-tandem-box-single-gallery',
    name: 'Kitchen Tandem Box with Single Square Gallery',
    slug: 'kitchen-tandem-box-single-gallery',
    category: 'hardware-hinges',
    description: 'Tandem box with additional gallery rail for deeper drawers.',
    features: ['Extra Stability', 'Increased Height', 'Soft Close', 'Modern Look'],
    sizes: ['6" - 500 MM'],
    material: 'Steel (White, Grey, Dark Grey)',
    images: ['https://picsum.photos/seed/tandem-gallery/800/600']
  },
  {
    id: 'swing-corner-decco',
    name: 'Swing Corner Decco SC',
    slug: 'swing-corner-decco',
    category: 'storage-systems',
    description: 'Efficient corner storage solution with swinging trays for easy access.',
    features: ['Soft Close', 'Left/Right Handed', 'Maximum Space Utilization', 'Smooth Swing'],
    sizes: ['Standard'],
    material: 'Steel with Decco Finish',
    images: ['https://picsum.photos/seed/swing-corner/800/600'],
    specifications: {
      'Mechanism': 'Soft Close Swing',
      'Tray Type': 'Anti-slip Decco',
      'Cabinet Width': '900 MM'
    }
  },
  {
    id: 'bed-lift-manual',
    name: 'Bed Lift Manual',
    slug: 'bed-lift-manual',
    category: 'hardware-hinges',
    description: 'Heavy-duty manual bed lift mechanism for under-bed storage access.',
    features: ['Heavy Load Capacity', 'Smooth Operation', 'Durable Steel', 'Easy Installation'],
    sizes: ['900 MM (60 KG)', '1500 MM (125 KG)'],
    material: 'Steel',
    images: ['https://picsum.photos/seed/bed-lift/800/600']
  },
  {
    id: 'anti-skid-mat',
    name: 'Anti Skid Mat Roll Dotted',
    slug: 'anti-skid-mat',
    category: 'miscellaneous-accessories',
    description: 'Protective anti-skid mat for drawers and shelves to prevent items from sliding.',
    features: ['Anti-skid Surface', 'Easy to Cut', 'Washable', 'Protects Surfaces'],
    sizes: ['50 CM * 20 MTRSS'],
    material: 'PVC (Grey, White, Transparent)',
    images: ['https://picsum.photos/seed/antiskid/800/600']
  },
  {
    id: 'wastebin-auto-lid',
    name: 'Wastebin Auto Lid Swing Bin',
    slug: 'wastebin-auto-lid',
    category: 'miscellaneous-accessories',
    description: 'Hygienic waste management solution with automatic lid opening.',
    features: ['Auto Lid', 'Swing Mechanism', 'Easy to Clean', 'Compact Design'],
    sizes: ['8 LTR', '14 LTR'],
    material: 'Stainless Steel / Plastic',
    images: ['https://picsum.photos/seed/wastebin/800/600']
  },
  {
    id: 'rolling-shutter',
    name: 'Kitchen Storage Rolling Shutter',
    slug: 'rolling-shutter',
    category: 'storage-systems',
    description: 'Elegant vertical rolling shutter for concealing kitchen appliances and storage.',
    features: ['Smooth Operation', 'Space Saving', 'Modern Aesthetic', 'Durable Slats'],
    sizes: ['600 MM'],
    material: 'SS / PVC / Glass',
    images: ['https://picsum.photos/seed/shutter/800/600']
  },
  {
    id: 'flap-lift-single',
    name: 'Kitchen Cabinet Flap Lift Single Door',
    slug: 'flap-lift-single',
    category: 'hardware-hinges',
    description: 'Overhead cabinet lift system for single doors.',
    features: ['Soft Close', 'Stay at any position', 'Easy Adjustment', 'Silent'],
    sizes: ['Standard'],
    material: 'Zinc Alloy / Steel',
    images: ['https://picsum.photos/seed/flap-lift/800/600']
  },
  {
    id: 'wardrobe-cloth-lifter',
    name: 'Wardrobe Cloth Lifter',
    slug: 'wardrobe-cloth-lifter',
    category: 'wardrobe-accessories',
    description: 'Pull-down wardrobe rail for accessing high-hanging clothes.',
    features: ['Ergonomic Design', 'High Load Capacity', 'Smooth Pull-down', 'Adjustable Width'],
    sizes: ['Aluminium 12 KG', 'Steel 15 KG'],
    material: 'Aluminium / Steel',
    images: ['https://picsum.photos/seed/cloth-lifter/800/600']
  },
  {
    id: 'gas-lift-brass',
    name: 'Cabinet Lid Gas Lift (Brass Cylinder)',
    slug: 'gas-lift-brass',
    category: 'hardware-hinges',
    description: 'Pneumatic support for overhead cabinet doors with brass cylinder for longevity.',
    features: ['Brass Cylinder', 'Smooth Opening', 'Durable', 'Easy to Install'],
    sizes: ['8 KG', '10 KG', '12 KG', '15 KG', '25 KG', '30 KG', '60 KG'],
    material: 'Steel / Brass',
    images: ['https://picsum.photos/seed/gas-lift/800/600']
  },
  {
    id: 'furniture-leg-ss',
    name: 'SS Adjustable Furniture Leg',
    slug: 'furniture-leg-ss',
    category: 'hardware-hinges',
    description: 'Durable stainless steel legs for furniture with height adjustment.',
    features: ['Adjustable Height', 'Stainless Steel', 'Heavy Duty', 'Rust Proof'],
    sizes: ['50*50', '50*80', '50*100', '50*120', '50*150 MM'],
    material: 'Stainless Steel',
    images: ['https://picsum.photos/seed/leg-ss/800/600']
  },
  {
    id: 'cutlery-tray-pvc',
    name: 'PVC Cutlery Tray',
    slug: 'cutlery-tray-pvc',
    category: 'kitchen-accessories',
    description: 'Organized cutlery insert for drawers made of high-quality PVC.',
    features: ['Multiple Compartments', 'Easy to Clean', 'Durable PVC', 'Fits Standard Drawers'],
    sizes: ['450 MM', '600 MM', '900 MM'],
    material: 'PVC (White, Grey)',
    images: ['https://picsum.photos/seed/cutlery-pvc/800/600']
  },
  {
    id: 'oval-pipe-ss',
    name: 'Oval Pipe Steel (Wardrobe Pipe)',
    slug: 'oval-pipe-ss',
    category: 'wardrobe-accessories',
    description: 'Strong oval pipe for hanging clothes in wardrobes.',
    features: ['High Load Capacity', 'Rust Resistant', 'Elegant Shape', 'Durable'],
    sizes: ['Standard'],
    material: 'Iron / SS (Nickal Coated)',
    images: ['https://picsum.photos/seed/oval-pipe/800/600']
  },
  {
    id: 'wooden-dowel',
    name: 'Wooden Dowel',
    slug: 'wooden-dowel',
    category: 'hardware-hinges',
    description: 'High-quality wooden dowels for furniture joint reinforcement.',
    features: ['Strong Joint', 'Natural Wood', 'Precise Dimensions', 'Easy to Use'],
    sizes: ['6*25', '8*40', '10*50'],
    material: 'Wood',
    images: ['https://picsum.photos/seed/dowel/800/600']
  },
  {
    id: 'minifix-black-pvc',
    name: 'Minifix Black PVC Coated Basic',
    slug: 'minifix-black-pvc',
    category: 'hardware-hinges',
    description: 'Standard minifix connector with black PVC coating.',
    features: ['Concealed Connection', 'Easy Assembly', 'Durable', 'Standard Fit'],
    sizes: ['6*40'],
    material: 'Steel / PVC',
    images: ['https://picsum.photos/seed/minifix-pvc/800/600']
  },
  {
    id: 'shelf-l-button',
    name: 'Shelf L-Button Basic',
    slug: 'shelf-l-button',
    category: 'hardware-hinges',
    description: 'Simple L-shaped support for shelves.',
    features: ['Sturdy Support', 'Easy to Install', 'Compact', 'Durable'],
    sizes: ['Small'],
    material: 'Zinc Alloy',
    images: ['https://picsum.photos/seed/l-button/800/600']
  },
  {
    id: 'shelf-bullet-pin',
    name: 'Shelf Bullet Pin',
    slug: 'shelf-bullet-pin',
    category: 'hardware-hinges',
    description: 'Bullet-shaped pin for supporting adjustable shelves.',
    features: ['Sleek Design', 'Strong Support', 'Easy to Adjust', 'Standard Fit'],
    sizes: ['Standard'],
    material: 'Steel',
    images: ['https://picsum.photos/seed/bullet-pin/800/600']
  },
  {
    id: 'shelf-pin-chair',
    name: 'Shelf Pin Chair Type',
    slug: 'shelf-pin-chair',
    category: 'hardware-hinges',
    description: 'Chair-shaped shelf support for increased stability.',
    features: ['Stable Support', 'Unique Shape', 'Easy to Install', 'Durable'],
    sizes: ['Standard'],
    material: 'Zinc Alloy',
    images: ['https://picsum.photos/seed/chair-pin/800/600']
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
