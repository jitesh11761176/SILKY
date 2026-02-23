import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { MessageCircle, CheckCircle, ChevronLeft, ChevronRight, Star, ArrowRight, ShieldCheck, Ruler, Box } from 'lucide-react';
import Section from '../components/Section';
import { PRODUCTS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, BRAND_NAME } from '../constants';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <Navigate to="/products" />;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I want to enquire about KELLEN ${product.name}`)}`;

  return (
    <div className="pt-24">
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-zinc-50 relative group border border-zinc-100">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-contain p-12"
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
                  className={`w-24 h-24 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-zinc-50 ${
                    activeImage === i ? 'border-blue-600' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-2" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border border-zinc-200">{product.category}</span>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border border-blue-100">Manufacturer Direct</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-black mb-4">{product.name}</h1>
              <p className="text-lg text-zinc-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="flex items-center space-x-2 font-bold text-zinc-900 uppercase tracking-widest text-[10px]">
                  <ShieldCheck size={16} className="text-blue-600" />
                  <span>Key Features</span>
                </h3>
                <ul className="space-y-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3 text-zinc-700">
                      <CheckCircle size={16} className="text-blue-600 shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="flex items-center space-x-2 font-bold text-zinc-900 uppercase tracking-widest text-[10px]">
                  <Ruler size={16} className="text-blue-600" />
                  <span>Available Sizes</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs font-bold text-zinc-600">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-200 space-y-4">
              <h3 className="flex items-center space-x-2 font-bold text-zinc-900 uppercase tracking-widest text-[10px]">
                <Box size={16} className="text-blue-600" />
                <span>Material Information</span>
              </h3>
              <p className="text-sm text-zinc-700 font-bold">{product.material}</p>
              <p className="text-xs text-zinc-500">Austenitic stainless steel with high corrosion resistance. Suitable for humid kitchen environments.</p>
            </div>

            <div className="pt-8 space-y-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-accent flex items-center justify-center space-x-3 py-5 text-lg shadow-xl shadow-blue-600/20"
              >
                <MessageCircle size={24} />
                <span>Enquire on WhatsApp</span>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <button className="btn-outline py-4 text-sm">Download Specs</button>
                <Link to="/become-dealer" className="btn-primary py-4 text-sm">Become Dealer</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Products */}
      <Section title="Related Accessories" subtitle="Explore More" className="bg-zinc-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.slug !== slug).slice(0, 4).map((p) => (
            <div key={p.id} className="industrial-card group">
              <div className="aspect-square overflow-hidden bg-white p-6">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6">
                <h4 className="font-display font-bold text-zinc-900 mb-4 truncate">{p.name}</h4>
                <Link to={`/products/${p.slug}`} className="text-blue-600 font-bold flex items-center space-x-2 text-xs uppercase tracking-widest">
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
