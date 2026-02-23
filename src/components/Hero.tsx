import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Download, UserPlus, ShieldCheck } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import cataloguePdf from '../assets/catalogue/catalogue.pdf';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-20">
      {/* Industrial Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/factory-steel/1920/1080?grayscale"
          alt="Stylex Industries Manufacturing"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-zinc-100"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-100">
              <ShieldCheck size={16} />
              <span>100% Stainless Steel Manufacturer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-black text-zinc-900 leading-[1.1] mb-8">
              Precision-Engineered <span className="text-blue-600">Stainless Steel</span> Modular Kitchen & Wardrobe Accessories
            </h1>
            
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl">
              Stylex Industries is the manufacturer behind the trusted <span className="font-bold text-zinc-900">{BRAND_NAME}</span> brand, delivering premium stainless steel kitchen and wardrobe storage solutions designed for durability, efficiency, and modern living.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                <span>View Products</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/become-dealer" className="btn-outline">
                <UserPlus size={18} className="mr-2" />
                <span>Become Dealer</span>
              </Link>
              <a 
                href={cataloguePdf} 
                download="KELLEN_Catalogue.pdf"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 text-zinc-500 hover:text-zinc-900 font-bold py-4 px-6 transition-colors"
              >
                <Download size={20} />
                <span>Download Catalogue</span>
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-zinc-200 pt-8">
              <div>
                <p className="text-2xl font-display font-bold text-zinc-900">10Y</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Warranty</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-zinc-900">304</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Grade Steel</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-zinc-900">100%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Made in India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-8 border-white">
              <img 
                src="https://picsum.photos/seed/kellen-hero/800/1000" 
                alt="KELLEN Premium Accessories" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-zinc-900/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
