import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Download, MessageCircle } from 'lucide-react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filter, setFilter] = useState<string>(categoryParam || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam) {
      setFilter(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesFilter = filter === 'all' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-24">
      <Section 
        title="Product Catalogue" 
        subtitle="Explore Our Range"
        className="bg-white pb-12"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input 
              type="text" 
              placeholder="Search accessories..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-zinc-50 p-2 rounded-xl border border-zinc-200">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold capitalize transition-all ${
                filter === 'all' ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.slug)}
                className={`px-6 py-2.5 rounded-lg text-xs font-bold capitalize transition-all ${
                  filter === cat.slug ? 'bg-zinc-900 text-white shadow-md' : 'text-zinc-500 hover:text-zinc-800'
                }`}
              >
                {cat.title}
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
            <p className="text-zinc-500 text-lg">No products found matching your criteria.</p>
            <button 
              onClick={() => {handleFilterChange('all'); setSearchQuery('');}}
              className="mt-4 text-blue-600 font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </Section>

      {/* Catalogue Download CTA */}
      <Section className="bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Download className="mx-auto text-blue-500" size={48} />
          <h2 className="text-4xl font-display font-black">Download Technical Specifications</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Get detailed dimensions, load-bearing capacities, and installation guides for our entire range of SS accessories.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/catalogue" className="btn-accent flex items-center">
              <Download size={20} className="mr-2" />
              <span>Download Full Catalogue</span>
            </Link>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('I need technical details for KELLEN products')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !border-white !text-white hover:!bg-white hover:!text-zinc-900"
            >
              <MessageCircle size={20} className="mr-2" />
              <span>Technical Support</span>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Products;
