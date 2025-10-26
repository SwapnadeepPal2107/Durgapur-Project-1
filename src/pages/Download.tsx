import React from 'react';
import { DownloadIcon, FileTextIcon, AwardIcon, BookOpenIcon } from 'lucide-react';
const downloads = [{
  title: 'Company Profile Brochure',
  description: 'Comprehensive overview of our services and expertise',
  icon: FileTextIcon,
  size: '2.5 MB'
}, {
  title: 'Service Catalogue',
  description: 'Detailed information about all our surveying services',
  icon: BookOpenIcon,
  size: '3.1 MB'
}, {
  title: 'Trade Licence Certificate',
  description: 'Government-issued trade licence documentation',
  icon: AwardIcon,
  size: '1.2 MB'
}, {
  title: 'GSTIN Certificate',
  description: 'GST registration and tax documentation',
  icon: FileTextIcon,
  size: '0.8 MB'
}, {
  title: 'Professional Tax Certificate',
  description: 'Valid professional tax enrolment certificate',
  icon: AwardIcon,
  size: '0.9 MB'
}, {
  title: 'Published Research Paper',
  description: 'RS and GIS Technology on Land Conservation',
  icon: BookOpenIcon,
  size: '4.2 MB'
}];
export function Download() {
  const handleDownload = (title: string) => {
    alert(`Download initiated for: ${title}`);
  };
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Downloads</h1>
          <p className="text-xl text-gray-300">
            Access our brochures, certificates, and documentation
          </p>
        </div>
      </div>
      {/* Downloads Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {downloads.map((item, index) => {
              const Icon = item.icon;
              return <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                        <Icon className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-[#0C2340] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {item.description}
                        </p>
                        <p className="text-xs text-gray-500 mb-4">
                          File size: {item.size}
                        </p>
                      </div>
                    </div>
                    <button onClick={() => handleDownload(item.title)} className="w-full bg-[#D4AF37] text-[#0C2340] px-4 py-3 rounded-lg font-semibold hover:bg-[#C49D2F] transition-colors flex items-center justify-center gap-2">
                      <DownloadIcon className="w-5 h-5" />
                      Download
                    </button>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </section>
      {/* Legal Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0C2340] mb-8 text-center">
              Legal & Compliance
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#0C2340] mb-3">
                    Registration Details
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Trade Licence:</strong> 0917P296225235125
                    </p>
                    <p>
                      <strong>Valid Till:</strong> 29-Jan-2028
                    </p>
                    <p>
                      <strong>GSTIN:</strong> 19BEMPG3152G1ZI
                    </p>
                    <p>
                      <strong>PAN:</strong> BEMPG3152G
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#0C2340] mb-3">
                    Banking Details
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Bank:</strong> State Bank of India
                    </p>
                    <p>
                      <strong>Branch:</strong> Durgapur Steel Plant
                    </p>
                    <p>
                      <strong>A/c No:</strong> 43941189383
                    </p>
                    <p>
                      <strong>IFSC:</strong> SBIN0007503
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}