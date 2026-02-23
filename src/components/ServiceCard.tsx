import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-2xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-stone-600 mb-6 line-clamp-2">
          {service.description}
        </p>
        <Link 
          to={`/services/${service.slug}`}
          className="flex items-center space-x-2 text-primary font-bold group/btn"
        >
          <span>Explore Details</span>
          <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
