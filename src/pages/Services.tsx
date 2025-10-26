import React from 'react';
import { MapIcon, SatelliteIcon, FileTextIcon, CheckCircleIcon, ScaleIcon, ClipboardCheckIcon } from 'lucide-react';
const serviceCategories = [{
  title: 'Advanced Surveying & Mapping',
  icon: SatelliteIcon,
  services: ['Drone Survey & Aerial Mapping', 'DGPS Survey (Triangulation & RTK)', 'GIS Implemented Land Survey & Index Mapping', 'RS & GIS-based Topographical Mapping', 'Cadastral & Boundary Demarcation']
}, {
  title: 'Legal Documentation & Search',
  icon: FileTextIcon,
  services: ['Land Searching (ADSR, ADDA, PI, RS)', 'Court Searching & Final Reports', 'Deed Registration', 'Mutation', 'Porcha (ROR)', 'Khajna (Tax Payment)']
}, {
  title: 'Statutory Approvals & Planning',
  icon: ClipboardCheckIcon,
  services: ['NOCs (ADDA, Forest, Fire)', 'Bastu Conversion', 'Holding/Building Plan Approvals']
}, {
  title: 'Valuation & Resolution',
  icon: ScaleIcon,
  services: ['Property Valuation', 'Land Dispute Resolution', 'Boundary Conflict Mediation']
}];
export function Services() {
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">
            Comprehensive land survey and mapping solutions from surveying to
            legal documentation
          </p>
        </div>
      </div>
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#D4AF37] bg-opacity-10 p-4 rounded-lg">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0C2340]">
                      {category.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => <li key={serviceIndex} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{service}</span>
                      </li>)}
                  </ul>
                </div>;
          })}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0C2340] mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-[#D4AF37] bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-[#D4AF37]">7+</span>
              </div>
              <h3 className="font-bold text-[#0C2340] mb-2">
                Years of Experience
              </h3>
              <p className="text-gray-600">
                Proven track record in land surveying
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D4AF37] bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#0C2340] mb-2">
                Government Approved
              </h3>
              <p className="text-gray-600">
                Certified and trusted by authorities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D4AF37] bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapIcon className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#0C2340] mb-2">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                Latest GIS, DGPS, and drone equipment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
}