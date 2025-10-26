import React from 'react';
const galleryImages = ['https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80', 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80', 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80', 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80', 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80'];
export function Gallery() {
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-300">
            Visual documentation of our projects and fieldwork
          </p>
        </div>
      </div>
      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group aspect-square">
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                  <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Project {index + 1}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
}