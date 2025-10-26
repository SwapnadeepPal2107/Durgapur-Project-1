import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-[#0C2340] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-[#D4AF37] transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D4AF37] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#D4AF37] transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          {/* More Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">More</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/clients" className="hover:text-[#D4AF37] transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-[#D4AF37] transition-colors">
                  Awards & Honours
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  Sovapur (Near IQ City Medical College & Hospital)
                  <br />
                  Durgapur, Paschim Bardhaman
                  <br />
                  West Bengal – 713206
                </p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919378478113" className="hover:text-[#D4AF37] transition-colors">
                  +91 93784 78113
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:ebizersubhojjit.dgp@gmail.com" className="hover:text-[#D4AF37] transition-colors text-sm">
                  ebizersubhojjit.dgp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2025 BHOUGOLIK GIS LAND SURVEY & ANALYSIS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>;
}