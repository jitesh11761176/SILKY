import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-stone-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <span className="text-xs font-bold text-primary-light uppercase tracking-tighter">
            {product.priceRange}
          </span>
        </div>
        <p className="text-sm text-stone-500 mb-6 line-clamp-2">
          {product.description}
        </p>
        <Link
          to={`/products/${product.slug}`}
          className="flex items-center justify-between w-full py-3 px-4 bg-stone-50 rounded-xl group-hover:bg-primary group-hover:text-white transition-all"
        >
          <span className="text-sm font-bold">View Details</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
