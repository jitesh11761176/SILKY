import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Factory, ShieldCheck, Settings } from 'lucide-react';
import Section from '../components/Section';
import { COMPANY_NAME, BRAND_NAME } from '../constants';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section className="bg-white pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-tight">
              About <span className="text-blue-600">{COMPANY_NAME}</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              {COMPANY_NAME} is a manufacturer of modular kitchen and wardrobe accessories under the brand <span className="font-bold text-zinc-900">{BRAND_NAME}</span>.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Our products are manufactured using premium grade stainless steel and advanced manufacturing processes to ensure durability, strength, and smooth operation.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/factory-hero/800/1000" 
              alt="Stylex Industries Manufacturing Facility" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Specialization */}
      <Section className="bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-display font-black">We Specialize in Manufacturing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            'Kitchen storage baskets',
            'Bottle pullouts',
            'Pantry units',
            'Wardrobe accessories',
            'Hardware fittings'
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 text-center">
              <p className="font-bold text-zinc-900">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission */}
      <Section>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-12 h-12 bg-zinc-900 text-white rounded-lg flex items-center justify-center mx-auto">
            <Target size={24} />
          </div>
          <h3 className="text-3xl font-display font-bold">Our Mission</h3>
          <p className="text-zinc-600 leading-relaxed text-lg">
            Our mission is to provide reliable, long-lasting, and efficient storage solutions for modern homes.
          </p>
        </div>
      </Section>

      {/* Materials */}
      <Section className="bg-zinc-900 text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-black">Our Products are Made Using</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: ShieldCheck, title: 'Austenitic Stainless Steel', desc: 'Superior grade steel for maximum corrosion resistance.' },
            { icon: ShieldCheck, title: 'Rust Proof Materials', desc: 'Ensuring hygiene and longevity in kitchen environments.' },
            { icon: Settings, title: 'Precision Engineered Components', desc: 'For smooth, silent, and reliable operation every time.' }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto">
                <item.icon size={32} />
              </div>
              <h4 className="text-xl font-display font-bold">{item.title}</h4>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section dark className="py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Products in Range', value: '200+' },
            { label: 'Authorized Dealers', value: '500+' },
            { label: 'Cities Covered', value: '100+' },
            { label: 'Years of Excellence', value: '12+' }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-4xl md:text-6xl font-display font-black text-blue-500">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
