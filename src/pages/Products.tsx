import React, { useState } from 'react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const Products = () => {
  const [filter, setFilter] = useState<'all' | 'kitchen' | 'wardrobe'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24">
      <Section 
        title="Our Collections" 
        subtitle="Catalogue"
        className="bg-white pb-12"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center space-x-2 bg-stone-50 p-1.5 rounded-2xl border border-stone-200">
            {(['all', 'kitchen', 'wardrobe'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                  filter === cat ? 'bg-primary text-white shadow-md' : 'text-stone-500 hover:text-stone-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-stone-500 text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => {setFilter('all'); setSearchQuery('');}}
              className="mt-4 text-primary font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>

      {/* Catalogue Download CTA */}
      <Section className="bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif font-bold">Download Our 2024 Catalogue</h2>
          <p className="text-stone-400">Get inspired by our latest designs, materials, and smart storage solutions.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-light"
            />
            <button className="btn-primary whitespace-nowrap">Download Now</button>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Products;
