import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ChefHat, DoorOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Modular Kitchen Solutions',
      description: 'Premium stainless steel modular kitchen accessories designed for durability, efficiency, and modern organization. Our systems maximize space and provide a sleek, professional look to any kitchen.',
      image: '/products/plain-basket.jpg',
      link: '/services/kitchen',
      icon: <ChefHat className="text-blue-600" size={32} />
    },
    {
      title: 'Wardrobe Storage Solutions',
      description: 'Elegant and functional wardrobe storage accessories including cloth lifters, shoe racks, and pullout systems. Organize your wardrobe with precision-engineered hardware that lasts a lifetime.',
      image: '/products/wardrobe-pullout.jpg',
      link: '/services/wardrobe',
      icon: <DoorOpen className="text-blue-600" size={32} />
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-black tracking-tighter text-zinc-900 mb-4"
          >
            Our Manufacturing Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-zinc-600 max-w-3xl mx-auto"
          >
            Stylex Industries provides end-to-end manufacturing solutions for modern modular kitchens and wardrobes under the KELLEN brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 hover:shadow-xl transition-all group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-display font-bold text-zinc-900 mb-4">{service.title}</h2>
                <p className="text-zinc-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center space-x-2 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all group"
                >
                  <span>View Details</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
