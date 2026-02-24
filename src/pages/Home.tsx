import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Settings, Award, Factory, ArrowRight, Star, ChevronDown, MessageCircle, Download, UserPlus } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, TESTIMONIALS, FAQS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, BRAND_NAME, COMPANY_NAME } from '../constants';

const Home = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* About Section */}
      <Section 
        id="about"
        title={`About ${COMPANY_NAME}`}
        subtitle="The Manufacturer"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-black leading-tight">
              A Leading Manufacturer of <span className="text-blue-600">Modular Kitchen</span> & Wardrobe Accessories
            </h3>
            <p className="text-zinc-600 leading-relaxed text-lg">
              {COMPANY_NAME} is a leading manufacturer of modular kitchen and wardrobe accessories under the brand name <span className="font-bold text-zinc-900">{BRAND_NAME}</span>. Our products are manufactured using high-grade stainless steel and advanced engineering processes to ensure long life, rust resistance, and smooth operation.
            </p>
            <p className="text-zinc-600 leading-relaxed text-lg">
              Our focus is to deliver reliable, durable, and efficient storage solutions that meet modern kitchen and wardrobe requirements.
            </p>
            <Link to="/about" className="btn-primary inline-flex">
              Read More
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/factory-interior/800/600" 
              alt="Stylex Industries Factory" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Categories Section */}
      <Section 
        title="Product Categories" 
        subtitle="Our Range"
        centered
        className="bg-zinc-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/products?category=${cat.slug}`}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-xl font-display font-bold text-white mb-2">{cat.title}</h4>
                <p className="text-zinc-300 text-xs line-clamp-2 mb-4">{cat.description}</p>
                <span className="inline-flex items-center text-blue-400 text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Manufactured by Stylex Industries */}
      <Section 
        title="Manufactured by Stylex Industries" 
        subtitle="The Manufacturer Advantage"
        centered
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-zinc-600 text-lg leading-relaxed">
            Stylex Industries is the manufacturer of <span className="font-bold text-zinc-900">{BRAND_NAME}</span> stainless steel modular kitchen and wardrobe accessories. 
            Our products are manufactured using high-grade stainless steel, precision engineering, and advanced production techniques to ensure the highest quality standards and long product durability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: '100% Stainless Steel', desc: 'High-grade austenitic steel for lifetime durability and hygiene.' },
            { icon: ShieldCheck, title: 'Rust Proof', desc: 'Hygienically tested and resistant to harsh kitchen environments.' },
            { icon: Settings, title: 'Precision Engineering', desc: 'Advanced manufacturing for silent and smooth operation.' },
            { icon: Award, title: 'Long Durability', desc: 'Built to last with 10 years warranty on manufacturing defects.' }
          ].map((feature, i) => (
            <div key={i} className="text-center space-y-4 p-6 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <feature.icon size={32} />
              </div>
              <h4 className="font-display font-bold text-zinc-900">{feature.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Products */}
      <Section 
        title="Featured Products" 
        subtitle="Bestsellers"
        centered
        className="bg-zinc-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/products" className="btn-outline inline-flex">
            View Full Catalogue
          </Link>
        </div>
      </Section>

      {/* Dealer Section */}
      <Section className="py-0">
        <div className="bg-zinc-900 rounded-3xl overflow-hidden relative p-12 md:p-24 text-white">
          <div className="absolute inset-0 opacity-10">
            <img src="https://picsum.photos/seed/dealer-bg/1200/600" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-black leading-tight">Become a <span className="text-blue-500">{BRAND_NAME}</span> Dealer</h2>
              <p className="text-lg text-zinc-400">Join our growing dealer network and distribute high-quality stainless steel modular kitchen and wardrobe accessories manufactured by Stylex Industries.</p>
              <ul className="space-y-4">
                {['Manufacturer Direct Supply', 'High Demand Product Range', 'Trusted Brand', 'Reliable Supply'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <ShieldCheck className="text-blue-500" size={20} />
                    <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl text-zinc-900">
              <h3 className="text-2xl font-display font-bold mb-6">Dealer Enquiry Form</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="City" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
                  <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
                <button className="w-full btn-accent">Apply Now</button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Catalogue Download */}
      <Section title="Download Product Catalogue" subtitle="Resources" centered>
        <div className="max-w-2xl mx-auto bg-zinc-50 p-12 rounded-3xl border border-zinc-200 text-center space-y-8">
          <Download className="mx-auto text-blue-600" size={64} />
          <h3 className="text-3xl font-display font-bold">Explore our complete range</h3>
          <p className="text-zinc-500">Explore our complete range of modular kitchen and wardrobe accessories.</p>
          <Link to="/catalogue" className="btn-primary mx-auto inline-flex items-center">
            <Download size={20} className="mr-2" />
            <span>Download Catalogue</span>
          </Link>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Frequently Asked Questions" subtitle="Support" centered className="bg-zinc-50">
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="group bg-white rounded-xl overflow-hidden border border-zinc-200">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-zinc-800">
                <span>{faq.question}</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-zinc-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-blue-600 text-white py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-black mb-2">Ready to Upgrade to KELLEN?</h2>
            <p className="text-blue-100">Contact our sales team for bulk orders and dealer pricing.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold flex items-center space-x-2 hover:bg-blue-50 transition-all">
              <MessageCircle size={24} />
              <span>Enquire on WhatsApp</span>
            </a>
            <Link to="/contact" className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-zinc-800 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
