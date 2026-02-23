import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import Section from '../components/Section';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="pt-24">
      <Section title="Get in Touch" subtitle="Contact Us">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-6">Let's Discuss Your Project</h3>
              <p className="text-stone-600 leading-relaxed">
                Whether you're looking for a complete kitchen renovation or a bespoke wardrobe, our team is here to help you every step of the way.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Call Us', value: `+91 ${WHATSAPP_NUMBER}`, link: `tel:+91${WHATSAPP_NUMBER}` },
                { icon: Mail, title: 'Email Us', value: 'hello@auramodular.com', link: 'mailto:hello@auramodular.com' },
                { icon: MapPin, title: 'Visit Showroom', value: '123 Design Street, Creative Hub, Mumbai, India', link: '#' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link}
                  className="flex items-center space-x-6 p-6 bg-white rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{item.title}</p>
                    <p className="text-stone-900 font-bold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-[#25D366] text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-[#128C7E] transition-all"
              >
                <MessageCircle size={24} />
                <span>Chat with Design Expert</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Service Interested In</label>
                <select className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option>Modular Kitchen</option>
                  <option>Bespoke Wardrobe</option>
                  <option>Full Home Interior</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-stone-50 border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full btn-primary py-5 flex items-center justify-center space-x-2 text-lg">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Google Map Placeholder */}
      <div className="h-[500px] w-full bg-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin size={48} className="text-primary mx-auto" />
            <p className="text-stone-500 font-bold">Interactive Map Loading...</p>
          </div>
        </div>
        <img 
          src="https://picsum.photos/seed/map/1920/500?grayscale" 
          className="w-full h-full object-cover opacity-50" 
          alt="Map Location" 
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export default Contact;
