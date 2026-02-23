import React from 'react';
import { Download, FileText, MessageCircle } from 'lucide-react';
import Section from '../components/Section';
import { WHATSAPP_NUMBER, BRAND_NAME } from '../constants';
import cataloguePdf from '../assets/catalogue/catalogue.pdf';

const Catalogue = () => {
  const catalogues = [
    {
      title: 'Main Product Catalogue',
      description: 'Complete range of modular kitchen and wardrobe accessories with technical specifications.',
      size: '12.4 MB',
      format: 'PDF',
      file: cataloguePdf
    },
    {
      title: 'Price List 2024',
      description: 'Latest MRP and dealer pricing for all KELLEN products.',
      size: '2.1 MB',
      format: 'PDF',
      file: cataloguePdf
    },
    {
      title: 'Installation Guide',
      description: 'Step-by-step instructions for installing our baskets, pullouts, and corner units.',
      size: '5.8 MB',
      format: 'PDF',
      file: cataloguePdf
    }
  ];

  return (
    <div className="pt-24">
      <Section 
        title="Download Catalogue" 
        subtitle="Resources"
        centered
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-zinc-600 text-lg">
            Explore our complete range of modular kitchen and wardrobe accessories. Download our latest catalogues and technical guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {catalogues.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl transition-all flex flex-col">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-500 text-sm mb-8 flex-grow">{item.description}</p>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  <span>Format: {item.format}</span>
                  <span>Size: {item.size}</span>
                </div>
                <a 
                  href={item.file} 
                  download={`${item.title.replace(/\s+/g, '_')}.pdf`}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Download size={18} className="mr-2" />
                  <span>Download Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <MessageCircle className="mx-auto text-blue-500" size={48} />
          <h2 className="text-4xl font-display font-black">Need Technical Support?</h2>
          <p className="text-zinc-400">Our engineering team is available to help you with product selection and installation queries.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=I need technical assistance with KELLEN products`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex"
          >
            <MessageCircle size={20} className="mr-2" />
            <span>Contact Technical Team</span>
          </a>
        </div>
      </Section>
    </div>
  );
};

export default Catalogue;
