import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Footer = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-serif font-bold tracking-tighter text-white">
                AURA<span className="text-accent">.</span>MODULAR
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Crafting premium modular kitchens and wardrobes that blend functionality with timeless elegance. Your dream home starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/modular-kitchen" className="hover:text-white transition-colors">Modular Kitchen</Link></li>
              <li><Link to="/services/wardrobes" className="hover:text-white transition-colors">Bespoke Wardrobes</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Interior Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Renovation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-light shrink-0" />
                <span>123 Design Street, Creative Hub, Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-light shrink-0" />
                <span>+91 {WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-light shrink-0" />
                <span>hello@auramodular.com</span>
              </li>
              <li className="pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#25D366] font-bold"
                >
                  <MessageCircle size={18} />
                  <span>Chat with Experts</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Aura Modular. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-stone-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
