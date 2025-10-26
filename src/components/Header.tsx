import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PhoneIcon, MailIcon, MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClientsOpen, setIsClientsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Profile',
    path: '/profile'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Awards & Honours',
    path: '/awards'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contact',
    path: '/contact'
  }, {
    name: 'Download',
    path: '/download'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className="bg-[#0C2340] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center gap-6 text-sm">
            <a href="tel:+919378478113" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <PhoneIcon className="w-4 h-4" />
              <span>+91 93784 78113</span>
            </a>
            <a href="mailto:ebizersubhojjit.dgp@gmail.com" className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
              <MailIcon className="w-4 h-4" />
              <span>ebizersubhojjit.dgp@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-[#0C2340] font-bold">
                <div className="text-xl leading-tight">BHOUGOLIK GIS</div>
                <div className="text-sm">LAND SURVEY & ANALYSIS</div>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-2 text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-[#D4AF37]' : 'text-[#0C2340] hover:text-[#D4AF37]'}`}>
                  {link.name}
                </Link>)}
            </div>
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-[#0C2340]">
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Navigation */}
          {isMobileMenuOpen && <div className="lg:hidden py-4 border-t">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-[#D4AF37] bg-gray-50' : 'text-[#0C2340] hover:text-[#D4AF37] hover:bg-gray-50'}`}>
                  {link.name}
                </Link>)}
            </div>}
        </div>
      </nav>
    </header>;
}