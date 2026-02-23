import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Hero = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/hero-kitchen/1920/1080?blur=2"
          alt="Premium Modular Kitchen"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/20 text-primary-light text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-primary/30">
              Premium Interior Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Transform Your Home with <span className="text-primary-light italic">Premium</span> Modular Kitchens
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-10 leading-relaxed">
              Experience the perfect blend of German engineering and bespoke craftsmanship. Designed for your lifestyle, built for generations.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center">
                <span>Get Free Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-stone-900 w-full sm:w-auto justify-center">
                View Products
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-primary-light" size={20} />
                <span className="text-sm text-stone-300">10 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-primary-light" size={20} />
                <span className="text-sm text-stone-300">Expert Installation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
