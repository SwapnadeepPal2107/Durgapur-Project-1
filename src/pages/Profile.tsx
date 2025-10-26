import React from 'react';
import { AwardIcon, BookOpenIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
export function Profile() {
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Company Profile</h1>
          <p className="text-xl text-gray-300">
            Government-Approved Professional Land Survey & Mapping Consultancy
          </p>
        </div>
      </div>
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0C2340] mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              BHOUGOLIK GIS LAND SURVEY & ANALYSIS is a Government-approved
              professional land survey and mapping consultancy based in
              Durgapur, West Bengal. With over 7 years of expertise, we are
              dedicated to providing comprehensive and highly accurate
              solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We deliver services spanning GIS, DGPS, Drone, Remote Sensing
              (RS), and Topographical Survey and Documentation with a commitment
              to precision.
            </p>
            <div className="bg-[#D4AF37] bg-opacity-10 border-l-4 border-[#D4AF37] p-6 rounded">
              <p className="text-xl font-semibold text-[#0C2340] italic">
                "Committed to Accuracy in data, Integrity in practice, and
                Innovation in technology — ensuring reliable solutions for every
                client."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0C2340] mb-12 text-center">
            Founder's Credentials
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCapIcon className="w-12 h-12 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340] mb-2">
                  Subhojit Garai
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  M.Sc. Geology | Government-Approved GIS Amin
                </p>
                <p className="text-gray-700 mb-4">
                  A Government-Approved GIS Amin based in Durgapur (713206),
                  offering over 7 years of expertise in comprehensive Land
                  Survey, Mapping, and Legal Land Matters.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[#0C2340] mb-2">
                  Specialized Expertise:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Uniquely implemented field knowledge of Remote Sensing (RS)
                    & GIS mapping
                  </li>
                  <li>
                    Coal Mines Survey & Geological Mapping for prominent
                    entities
                  </li>
                  <li>Hydro-geomorphological & groundwater mapping projects</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#0C2340] mb-2">Recognition:</h4>
                <p className="text-gray-700">
                  Trusted and verified by Forest Department, BL&LRO, PWD, Air
                  Force, CGWB, and Coal Mines
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0C2340] mb-2">
                  Published Work:
                </h4>
                <p className="text-gray-700">
                  "RS and GIS Technology on Land Conservation in Urban
                  Industrial Expanded Area of Durgapur" (Inside the Forests,
                  Bharti Publications, 2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Technical Advisor Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0C2340] mb-12 text-center">
            Technical Advisory Profile
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <GraduationCapIcon className="w-12 h-12 text-[#D4AF37] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-[#0C2340] mb-2">
                  Debjyoti Ghosh
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  M.Sc., M.Tech | Ph.D. Scholar (IIT Kharagpur)
                </p>
                <p className="text-gray-700 mb-4">
                  Providing Pro Bono Technical Consultation with expertise in
                  advanced geospatial and earth science applications.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[#0C2340] mb-2">
                  Academic Excellence:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Ph.D. (Ongoing) - IIT Kharagpur</li>
                  <li>M.Tech. (2019) - IIT Kharagpur</li>
                  <li>M.Sc. (2017) - IIT Bombay</li>
                  <li>
                    AIR 14 (JAM 2015), AIR 63 (JRF-CSIR NET), AIR 17 (GATE 2020)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#0C2340] mb-2">
                  Research Focus:
                </h4>
                <p className="text-gray-700">
                  Surface deformation monitoring using PS-InSAR and SBAS
                  techniques, environmental monitoring with satellite data, and
                  advanced GPS processing with GAMIT software.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0C2340] mb-2">
                  Technical Proficiency:
                </h4>
                <p className="text-gray-700">
                  Expert in MATLAB, Python, ArcGIS, QGIS, and various geospatial
                  analysis tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}