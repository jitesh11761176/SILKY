import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Download, UserPlus } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, BRAND_NAME } from '../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-display font-black tracking-tighter text-zinc-900">
              {BRAND_NAME}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 -mt-1">
              Stylex Industries
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-zinc-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-zinc-200 mx-2"></div>

            <div className="flex items-center space-x-4">
              <Link to="/catalogue" className="flex items-center space-x-2 text-zinc-600 hover:text-zinc-900 transition-colors text-sm font-bold">
                <Download size={18} />
                <span>Download Product Catalogue</span>
              </Link>
              <Link 
                to="/become-dealer" 
                className="flex items-center space-x-2 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-zinc-800 transition-all"
              >
                <UserPlus size={18} />
                <span>Become Dealer</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-2 rounded-lg hover:bg-[#128C7E] transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
             <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-2 rounded-lg"
              >
                <MessageCircle size={20} />
              </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t border-zinc-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-4 text-lg font-bold text-zinc-800 hover:bg-zinc-50 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Link
                  to="/catalogue"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-zinc-100 text-zinc-800 py-4 rounded-xl font-bold"
                >
                  <Download size={20} />
                  <span>Catalogue</span>
                </Link>
                <Link
                  to="/become-dealer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-zinc-900 text-white py-4 rounded-xl font-bold"
                >
                  <UserPlus size={20} />
                  <span>Dealer</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
