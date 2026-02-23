import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, ArrowRight } from 'lucide-react';
import Section from '../components/Section';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section className="bg-white pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-primary-light font-bold text-xs uppercase tracking-[0.2em]">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Crafting Elegance for <span className="italic">Modern</span> Living
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed">
              Founded in 2010, Aura Modular has grown from a small design studio to a leading provider of premium modular solutions. We believe that every home has a soul, and our mission is to bring it to life through thoughtful design and impeccable craftsmanship.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/about-hero/800/1000" 
              alt="Aura Modular Workshop" 
              className="rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-stone-100 space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed">
              To revolutionize the way people experience their homes by providing innovative, high-quality, and sustainable modular solutions that exceed expectations in both form and function.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-stone-100 space-y-6">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-serif font-bold">Our Vision</h3>
            <p className="text-stone-600 leading-relaxed">
              To be the global benchmark for premium interior solutions, recognized for our commitment to design excellence, environmental responsibility, and customer satisfaction.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section dark className="py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Projects Completed', value: '2500+' },
            { label: 'Happy Clients', value: '1800+' },
            { label: 'Design Awards', value: '24' },
            { label: 'Years Experience', value: '15' }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-4xl md:text-6xl font-serif font-bold text-primary-light">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-stone-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section title="Meet the Visionaries" subtitle="Our Team" centered>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Vikram Mehta', role: 'Founder & CEO', img: 'https://picsum.photos/seed/team1/400/500' },
            { name: 'Ananya Roy', role: 'Chief Designer', img: 'https://picsum.photos/seed/team2/400/500' },
            { name: 'David Wilson', role: 'Head of Operations', img: 'https://picsum.photos/seed/team3/400/500' },
            { name: 'Sonia Gupta', role: 'Client Relations', img: 'https://picsum.photos/seed/team4/400/500' }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 relative">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex space-x-4 text-white">
                    {/* Social Icons Placeholder */}
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-serif font-bold">{member.name}</h4>
              <p className="text-sm text-stone-500 uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
