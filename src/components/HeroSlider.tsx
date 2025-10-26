import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const slides = [{
  image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80',
  title: 'Empowering Infrastructure Through Precision & Expertise',
  subtitle: 'Delivering high-quality surveying and geotechnical services with over 7 years of experience.',
  buttonText: 'Learn More',
  buttonLink: '/profile'
}, {
  image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80',
  title: 'Advanced GIS & Drone Survey Solutions',
  subtitle: 'Trusted by government agencies and leading organizations across West Bengal.',
  buttonText: 'Explore Services',
  buttonLink: '/services'
}, {
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  title: 'Committed to Accuracy, Integrity & Innovation',
  subtitle: 'Government-approved professional land survey and mapping consultancy.',
  buttonText: 'View Projects',
  buttonLink: '/projects'
}];
export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${slide.image})`
      }}>
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <Link to={slide.buttonLink} className="inline-block bg-[#D4AF37] text-[#0C2340] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#C49D2F] transition-colors">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>)}
      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all">
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all">
        <ChevronRightIcon className="w-6 h-6" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-[#D4AF37] w-8' : 'bg-white bg-opacity-50'}`} />)}
      </div>
    </div>;
}