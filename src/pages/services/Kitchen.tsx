import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const KitchenServices = () => {
  const sections = [
    {
      title: 'Bottle Pullout Systems',
      description: 'Slim and efficient storage for bottles, jars, and spices. Available in multiple widths to fit any cabinet size.',
      image: '/products/bottle-pullout.jpg'
    },
    {
      title: 'Pantry Units',
      description: 'Large capacity storage systems with multiple inner and outer baskets for organized dry grocery storage.',
      image: '/products/pantry-unit.jpg'
    },
    {
      title: 'Dish Racks',
      description: 'Wall-mounted and cabinet-integrated racks for drying and storing plates and glasses with drip trays.',
      image: '/products/dish-rack.jpg'
    },
    {
      title: 'Magic Corner Units',
      description: 'Innovative corner storage solutions that bring items out of deep corners for easy access.',
      image: '/products/magic-corner.jpg'
    },
    {
      title: 'Cutlery Storage Systems',
      description: 'Organized drawer inserts in stainless steel and PVC for safe and hygienic cutlery storage.',
      image: '/products/cutlery-basket.jpg'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-zinc-900 mb-6">
              Modular Kitchen <br />
              <span className="text-blue-600">Storage Solutions</span>
            </h1>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              Stylex Industries manufactures premium stainless steel modular kitchen accessories under the KELLEN brand. Our kitchen storage systems are designed for durability, efficiency, and modern kitchen organization.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products?category=kitchen-accessories"
                className="inline-flex items-center space-x-2 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all group"
              >
                <span>View Kitchen Products</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="/products/plain-basket.jpg" 
              alt="Modular Kitchen" 
              className="rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 hidden md:block">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle2 className="text-blue-600" size={24} />
                </div>
                <span className="font-bold text-zinc-900">100% Stainless Steel</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle2 className="text-blue-600" size={24} />
                </div>
                <span className="font-bold text-zinc-900">Rust Proof Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div 
              key={section.title}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="flex-1">
                <h2 className="text-3xl font-display font-bold text-zinc-900 mb-4">{section.title}</h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                  {section.description}
                </p>
                <ul className="space-y-3">
                  {['Precision Engineering', 'Smooth Mechanism', 'Heavy Load Capacity'].map((item) => (
                    <li key={item} className="flex items-center space-x-2 text-zinc-700 font-medium">
                      <CheckCircle2 size={18} className="text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="rounded-3xl shadow-lg w-full aspect-video object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenServices;
