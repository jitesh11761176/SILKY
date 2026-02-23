import React from 'react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <div className="pt-24">
      <Section 
        title="Our Specialized Services" 
        subtitle="What We Do"
        centered
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      {/* Additional Services */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { title: 'Interior Styling', desc: 'Complete home styling including furniture, lighting, and decor selection.' },
            { title: 'Space Planning', desc: 'Optimizing your floor plan for maximum efficiency and flow.' },
            { title: 'Material Selection', desc: 'Expert guidance on choosing the right finishes, hardware, and fabrics.' }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-stone-50 rounded-[2.5rem] border border-stone-100 space-y-4">
              <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Services;
