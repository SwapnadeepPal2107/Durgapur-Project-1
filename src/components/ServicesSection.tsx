import React from 'react';
import { Link } from 'react-router-dom';
import { MapIcon, SatelliteIcon, FileTextIcon, ScaleIcon, MountainIcon, DropletIcon } from 'lucide-react';
const services = [{
  icon: SatelliteIcon,
  title: 'Drone Survey & Aerial Mapping',
  description: 'Advanced drone-based surveying for accurate topographical data collection and 3D mapping.',
  image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80'
}, {
  icon: MapIcon,
  title: 'DGPS Survey & RTK',
  description: 'High-precision GPS surveying using differential and real-time kinematic techniques.',
  image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80'
}, {
  icon: MapIcon,
  title: 'GIS Land Survey & Mapping',
  description: 'Comprehensive GIS-implemented land surveys with index mapping and cadastral demarcation.',
  image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80'
}, {
  icon: MountainIcon,
  title: 'Topographical Mapping',
  description: 'RS & GIS-based topographical surveys for industrial and infrastructure projects.',
  image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80'
}, {
  icon: FileTextIcon,
  title: 'Legal Documentation',
  description: 'Complete land searching, deed registration, mutation, and legal compliance services.',
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
}, {
  icon: ScaleIcon,
  title: 'Valuation & Dispute Resolution',
  description: 'Professional land valuation and expert resolution of land boundary disputes.',
  image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80'
}];
export function ServicesSection() {
  return <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C2340] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive land survey and mapping solutions backed by 7+ years
            of expertise
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#0C2340] bg-opacity-40 flex items-center justify-center">
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0C2340] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services" className="text-[#D4AF37] font-semibold hover:text-[#C49D2F] transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}