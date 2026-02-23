import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I want to enquire about ${product.name}`)}`;

  return (
    <div className="industrial-card group">
      <div className="relative aspect-square overflow-hidden bg-zinc-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-zinc-900 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm border border-zinc-100">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-display font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-zinc-500 mb-6 line-clamp-2">
          {product.description}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to={`/products/${product.slug}`}
            className="flex items-center justify-center py-2.5 px-4 bg-zinc-100 text-zinc-900 rounded-lg text-xs font-bold hover:bg-zinc-200 transition-all"
          >
            Details
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center py-2.5 px-4 bg-blue-600 text-white rounded-lg text-xs font-bold hover:bg-blue-700 transition-all"
          >
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
