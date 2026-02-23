import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, BRAND_NAME, COMPANY_NAME, EMAIL, WEBSITE } from '../constants';

const Footer = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="bg-zinc-900 text-zinc-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-display font-black tracking-tighter text-white">
                {BRAND_NAME}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 -mt-1">
                {COMPANY_NAME}
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Leading manufacturer of premium stainless steel modular kitchen and wardrobe accessories. Precision engineered for modern living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/catalogue" className="hover:text-white transition-colors">Catalogue</Link></li>
              <li><Link to="/become-dealer" className="hover:text-white transition-colors">Become a Dealer</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Categories</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products?category=kitchen-accessories" className="hover:text-white transition-colors">Kitchen Accessories</Link></li>
              <li><Link to="/products?category=wardrobe-accessories" className="hover:text-white transition-colors">Wardrobe Accessories</Link></li>
              <li><Link to="/products?category=hardware-hinges" className="hover:text-white transition-colors">Hardware & Hinges</Link></li>
              <li><Link to="/products?category=storage-systems" className="hover:text-white transition-colors">Storage Systems</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                <span>Chandigarh, India - 160002</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>{EMAIL}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={18} className="text-blue-500 shrink-0" />
                <span>{WEBSITE}</span>
              </li>
              <li className="pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#25D366] font-bold"
                >
                  <MessageCircle size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
