import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';
import Section from '../components/Section';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, COMPANY_NAME } from '../constants';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="pt-24">
      {/* Hero */}
      <Section className="bg-white pb-0">
        <div className="max-w-3xl">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">Contact Us</span>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mt-4">
            Let's Build Something <span className="text-blue-600">Solid</span> Together
          </h1>
          <p className="text-lg text-zinc-600 mt-6 leading-relaxed">
            Whether you're a dealer looking to partner with us or a homeowner with technical questions, our team is here to help.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">Factory Address</p>
                    <p className="text-sm text-zinc-500">Stylex Industries, Chandigarh, India - 160002</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">Email Us</p>
                    <p className="text-sm text-zinc-500">kellenkitchenproducts@gmail.com</p>
                    <p className="text-sm text-zinc-500">info@kellenindia.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">Website</p>
                    <p className="text-sm text-zinc-500">www.kellenindia.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-900 rounded-2xl text-white space-y-4">
              <h4 className="font-display font-bold flex items-center space-x-2">
                <Clock size={18} className="text-blue-500" />
                <span>Business Hours</span>
              </h4>
              <div className="space-y-2 text-sm text-zinc-400">
                <div className="flex justify-between">
                  <span>Mon - Sat</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-400">Closed</span>
                </div>
              </div>
            </div>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={24} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-200">
            <h3 className="text-3xl font-display font-bold mb-8">Send a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone Number</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                <select className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>General Enquiry</option>
                  <option>Dealer Partnership</option>
                  <option>Bulk Order</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-lg focus:outline-none focus:border-blue-500 resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full btn-primary py-4 text-lg">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <Section className="py-0">
        <div className="h-[400px] bg-zinc-200 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin size={48} className="mx-auto text-zinc-400" />
              <p className="text-zinc-500 font-bold">Interactive Map Loading...</p>
            </div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.2579214258!2d72.4149301344445!3d23.020181762485575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd11674f987f1!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="relative z-10 grayscale contrast-125 opacity-80"
          ></iframe>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
