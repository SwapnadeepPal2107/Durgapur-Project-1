import React from 'react';
import { AwardIcon, BookOpenIcon, TrophyIcon } from 'lucide-react';
export function Awards() {
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Awards & Honours</h1>
          <p className="text-xl text-gray-300">
            Recognition and achievements in land surveying and mapping
          </p>
        </div>
      </div>
      {/* Awards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Government Approval */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex items-start gap-6">
              <div className="bg-[#D4AF37] bg-opacity-10 p-4 rounded-lg flex-shrink-0">
                <AwardIcon className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340] mb-3">
                  Government Approved Consultancy
                </h3>
                <p className="text-gray-700">
                  Officially recognized and approved by the Government of West
                  Bengal as a professional land survey and mapping consultancy.
                </p>
              </div>
            </div>
            {/* Published Research */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex items-start gap-6">
              <div className="bg-[#D4AF37] bg-opacity-10 p-4 rounded-lg flex-shrink-0">
                <BookOpenIcon className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340] mb-3">
                  Published Research
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Book Chapter:</strong> "RS and GIS Technology on Land
                  Conservation in Urban Industrial Expanded Area of Durgapur"
                </p>
                <p className="text-gray-600">
                  Published in "Inside the Forests", Bharti Publications, 2024
                </p>
                <p className="text-gray-600 mt-2">
                  Co-authored with Dr. N.C. Saha (DVC's Ex-Forest Director) and
                  Atanu Samaddar (Sr. Manager, Civil, DVC)
                </p>
              </div>
            </div>
            {/* Professional Recognition */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex items-start gap-6">
              <div className="bg-[#D4AF37] bg-opacity-10 p-4 rounded-lg flex-shrink-0">
                <TrophyIcon className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340] mb-3">
                  Professional Recognition
                </h3>
                <p className="text-gray-700 mb-4">
                  Trusted and verified by multiple Government agencies and
                  departments:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Forest Department</li>
                  <li>• BL&LRO (Block Land & Land Revenue Office)</li>
                  <li>• PWD (Public Works Department)</li>
                  <li>• Air Force</li>
                  <li>• CGWB (Central Ground Water Board)</li>
                  <li>• Coal Mines</li>
                </ul>
              </div>
            </div>
            {/* Academic Excellence */}
            <div className="bg-white rounded-lg shadow-lg p-8 flex items-start gap-6">
              <div className="bg-[#D4AF37] bg-opacity-10 p-4 rounded-lg flex-shrink-0">
                <AwardIcon className="w-12 h-12 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340] mb-3">
                  Academic Excellence (Technical Advisor)
                </h3>
                <p className="text-gray-700 mb-4">
                  Debjyoti Ghosh - Ph.D. Scholar, IIT Kharagpur
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• AIR 14 in JAM 2015</li>
                  <li>• AIR 63 in JRF-CSIR NET DEC 2016</li>
                  <li>• AIR 63 in LS-CSIR NET DEC 2017</li>
                  <li>• AIR 17 in GATE 2020</li>
                  <li>• AIR 161 in GATE 2017</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}