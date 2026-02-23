import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MessageCircle, CheckCircle, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { PRODUCTS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <Navigate to="/products" />;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I want enquiry about ${product.name}`)}`;

  return (
    <div className="pt-24">
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-stone-100 relative group">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setActiveImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={() => setActiveImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              )}
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                    activeImage === i ? 'border-primary' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{product.category}</span>
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-bold text-primary-light mb-6">{product.priceRange} Collection</p>
              <p className="text-stone-600 leading-relaxed text-lg">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-stone-900 uppercase tracking-widest text-xs">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center space-x-3 text-stone-700">
                    <CheckCircle size={18} className="text-primary-light" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center space-x-3 py-5 text-lg shadow-2xl shadow-primary/20"
              >
                <MessageCircle size={24} />
                <span>Enquire on WhatsApp</span>
              </a>
              <p className="text-center text-xs text-stone-400">Free design consultation included with every enquiry.</p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <CheckCircle size={32} />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">10 Year Warranty</h4>
                <p className="text-sm text-stone-500">On all structural components and BWP plywood.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Products */}
      <Section title="You May Also Like" subtitle="Related Products" className="bg-stone-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.slug !== slug).slice(0, 4).map((p) => (
            <div key={p.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100">
              <div className="aspect-square overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <h4 className="font-serif font-bold text-lg mb-4">{p.name}</h4>
                <Link to={`/products/${p.slug}`} className="text-primary font-bold flex items-center space-x-2 text-sm">
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProductDetail;
