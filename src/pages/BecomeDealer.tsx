import React from 'react';
import { ShieldCheck, TrendingUp, Users, Package, Award, MessageCircle, ArrowRight, Factory } from 'lucide-react';
import Section from '../components/Section';
import { BRAND_NAME, COMPANY_NAME, WHATSAPP_NUMBER } from '../constants';

const BecomeDealer = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <Section className="bg-zinc-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em]">Partnership Opportunity</span>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-tight">
              Become a <span className="text-blue-500">Dealer</span>
            </h1>
            <p className="text-lg text-zinc-400 leading-relaxed">
              {COMPANY_NAME} invites dealers and distributors to partner with us for distributing {BRAND_NAME} modular kitchen and wardrobe accessories.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#apply" className="btn-accent">Apply for Dealership</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-zinc-900">Talk to Sales Manager</a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/dealer-hero/800/600" 
              alt="Dealer Partnership" 
              className="rounded-3xl shadow-2xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Why Partner with Stylex Industries?" subtitle="Dealer Benefits" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Factory, title: 'Manufacturer Direct Supply', desc: 'Get products directly from the factory for better margins and support.' },
            { icon: TrendingUp, title: 'High Demand Product Range', desc: 'Our SS 304 accessories are preferred by modern homeowners.' },
            { icon: Award, title: 'Trusted Brand', desc: 'KELLEN is a name synonymous with quality and precision engineering.' },
            { icon: ShieldCheck, title: 'Reliable Supply', desc: 'Consistent stock availability and timely delivery for your business.' }
          ].map((benefit, i) => (
            <div key={i} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 space-y-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-display font-bold">{benefit.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section id="apply">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl border border-zinc-200 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-black">Dealership Enquiry</h2>
            <p className="text-zinc-500 mt-4">Fill out the form below and our partnership team will contact you within 24 hours.</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Company Name</label>
              <input type="text" placeholder="Your Business Name" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">City</label>
              <input type="text" placeholder="Your City" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone</label>
              <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
              <input type="email" placeholder="email@example.com" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
            </div>
            <div className="md:col-span-2">
              <button className="w-full btn-primary py-4 text-lg">Submit Application</button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default BecomeDealer;
