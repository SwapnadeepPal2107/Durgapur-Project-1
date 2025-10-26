import React from 'react';
import { BuildingIcon } from 'lucide-react';
const clients = ['Forest Divisional Office, Asansol-Durgapur Division', 'Essar Oil & Gas', 'BL&LRO Office, Kanksa', 'Anmol Feeds Pvt. Ltd.', 'Environment Department (ECL Bankola Area)', 'Amit Metaliks Ltd.', 'JMS Tilabani Pvt. Ltd.', 'Durgapur Sri Sri Kusam Haranath Paribas', 'NCC Limited', 'Concret Engineers Co-operative Society Ltd.', 'Air Force Base Camp, Panagarh', 'PWD (Public Works, Roads Directorate, Govt. of West Bengal)', 'Gangaramchak Mining Pvt. Ltd.', 'Trans-Damodar Mining Pvt. Ltd.', 'WBPDCL', 'DVC', 'CGWB (Central Ground Water Board)'];
export function Clients() {
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Clients</h1>
          <p className="text-xl text-gray-300">
            Trusted by leading government agencies and private organizations
          </p>
        </div>
      </div>
      {/* Clients Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex items-center gap-4">
                <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                  <BuildingIcon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <p className="text-gray-700 font-medium">{client}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Verification Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#0C2340] mb-6">
              Verified & Trusted
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our work has been verified and trusted by various Government
              agencies including:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Forest Department', 'BL&LRO', 'PWD', 'Air Force', 'CGWB', 'Coal Mines'].map((agency, index) => <span key={index} className="bg-[#D4AF37] bg-opacity-10 text-[#0C2340] px-6 py-3 rounded-full font-semibold">
                  {agency}
                </span>)}
            </div>
          </div>
        </div>
      </section>
    </div>;
}