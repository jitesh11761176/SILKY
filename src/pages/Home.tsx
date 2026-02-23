import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Clock, Award, PenTool, ArrowRight, Star, ChevronDown, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import { SERVICES, PRODUCTS, TESTIMONIALS, FAQS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Home = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="overflow-hidden">
      <Hero />

      {/* Services Section */}
      <Section 
        id="services"
        title="Bespoke Design Services"
        subtitle="What We Offer"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section 
        dark 
        title="Why Aura Modular?" 
        subtitle="The Aura Difference"
        className="relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Shield, title: 'Premium Materials', desc: 'We use only BWP Marine Plywood and high-grade laminates.' },
            { icon: PenTool, title: 'Expert Designers', desc: 'Our designers bring years of experience in ergonomic planning.' },
            { icon: Award, title: 'Affordable Luxury', desc: 'Premium quality at competitive prices with transparent billing.' },
            { icon: Clock, title: 'Fast Installation', desc: 'Efficient processes ensuring your home is ready in record time.' }
          ].map((feature, i) => (
            <div key={i} className="space-y-4">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-light">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold">{feature.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Product Showcase */}
      <Section 
        title="Featured Collections" 
        subtitle="Our Masterpieces"
        centered
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link to="/products" className="btn-outline inline-flex items-center space-x-2">
            <span>View All Products</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* How We Work */}
      <Section title="Our Seamless Process" subtitle="How We Work" centered className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-stone-100 -z-0"></div>
          
          {[
            { step: '01', title: 'Consultation', desc: 'We discuss your needs and measure your space.' },
            { step: '02', title: 'Design', desc: '3D visualizations and material selection.' },
            { step: '03', title: 'Manufacturing', desc: 'Precision crafting in our state-of-the-art facility.' },
            { step: '04', title: 'Installation', desc: 'Expert assembly and final quality check.' }
          ].map((item, i) => (
            <div key={i} className="relative z-10 text-center space-y-4">
              <div className="w-16 h-16 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto text-primary font-bold text-xl shadow-lg">
                {item.step}
              </div>
              <h3 className="text-xl font-serif font-bold">{item.title}</h3>
              <p className="text-stone-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Brands */}
      <Section className="py-12 border-y border-stone-100">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
          {['Hafele', 'Hettich', 'Blum', 'Kessebohmer', 'Ebco'].map((brand) => (
            <span key={brand} className="text-2xl font-serif font-bold text-stone-400">{brand}</span>
          ))}
        </div>
      </Section>

      {/* About Preview */}
      <Section className="bg-stone-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about-preview/800/800" 
              alt="About Aura Modular" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-serif font-bold">15+</p>
              <p className="text-xs uppercase tracking-widest opacity-80">Years of Excellence</p>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-primary-light font-bold text-xs uppercase tracking-[0.2em]">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              We Don't Just Build Kitchens, We Create <span className="italic">Experiences</span>
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Aura Modular was founded on the principle that the heart of the home deserves the finest craftsmanship. We combine traditional values with modern technology to deliver spaces that are as functional as they are beautiful.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
              <span>Read Our Story</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="Client Stories" subtitle="Testimonials" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 relative">
              <Star className="text-accent absolute top-10 right-10" fill="currentColor" size={20} />
              <p className="text-lg text-stone-700 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-stone-900">{t.name}</h4>
                  <p className="text-xs text-stone-500 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Common Questions" subtitle="FAQ" centered className="bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <details key={i} className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-100">
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-stone-800">
                <span>{faq.question}</span>
                <ChevronDown size={20} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-0">
        <div className="bg-primary rounded-[3rem] overflow-hidden relative p-12 md:p-24 text-center text-white">
          <div className="absolute inset-0 opacity-10">
            <img src="https://picsum.photos/seed/cta-bg/1200/600" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold">Ready to Build Your Dream Space?</h2>
            <p className="text-lg text-stone-300">Get a free design consultation and quote from our experts today.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#128C7E] transition-all flex items-center space-x-3 shadow-2xl">
                <MessageCircle size={24} />
                <span>Enquire on WhatsApp</span>
              </a>
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-stone-100 transition-all">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
