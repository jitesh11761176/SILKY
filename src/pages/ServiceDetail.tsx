import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Section from '../components/Section';
import { SERVICES, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" />;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I want enquiry about ${service.title}`)}`;

  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-stone-900/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-stone-200 leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">Excellence in Every Detail</h2>
            <p className="text-stone-600 leading-relaxed text-lg">{service.longDescription}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="space-y-4">
                <h4 className="font-bold text-primary uppercase tracking-widest text-xs">Key Features</h4>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center space-x-3 text-stone-700">
                      <CheckCircle size={18} className="text-primary-light" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-primary uppercase tracking-widest text-xs">Benefits</h4>
                <ul className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-center space-x-3 text-stone-700">
                      <CheckCircle size={18} className="text-primary-light" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100">
              <h3 className="text-2xl font-serif font-bold mb-6">Request a Quote</h3>
              <p className="text-stone-500 mb-8 text-sm">Our designers will get back to you within 24 hours with a personalized proposal.</p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary flex items-center justify-center space-x-3 py-5 text-lg"
              >
                <MessageCircle size={24} />
                <span>Enquire on WhatsApp</span>
              </a>
              <p className="text-center mt-6 text-xs text-stone-400">Or call us at +91 {WHATSAPP_NUMBER}</p>
            </div>
            
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/service-detail/800/600" alt="Work Process" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section title="Explore Other Services" subtitle="More Options" className="bg-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.filter(s => s.slug !== slug).map((s) => (
            <div key={s.id} className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold mb-3">{s.title}</h3>
                <p className="text-stone-500 text-sm mb-6 line-clamp-2">{s.description}</p>
                <Link to={`/services/${s.slug}`} className="text-primary font-bold flex items-center space-x-2">
                  <span>View Service</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetail;
