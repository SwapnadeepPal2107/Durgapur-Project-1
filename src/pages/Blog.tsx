import React from 'react';
import { CalendarIcon, UserIcon } from 'lucide-react';
const blogPosts = [{
  title: 'The Importance of DGPS in Modern Land Surveying',
  excerpt: 'Discover how Differential GPS technology has revolutionized precision in land surveying and mapping.',
  date: 'March 15, 2025',
  author: 'Subhojit Garai',
  image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80'
}, {
  title: 'GIS Technology in Urban Planning',
  excerpt: 'Exploring the role of Geographic Information Systems in sustainable urban development and infrastructure planning.',
  date: 'March 10, 2025',
  author: 'Debjyoti Ghosh',
  image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80'
}, {
  title: 'Drone Surveying: The Future of Aerial Mapping',
  excerpt: 'How drone technology is transforming topographical surveys and providing unprecedented accuracy.',
  date: 'March 5, 2025',
  author: 'Subhojit Garai',
  image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80'
}];
export function Blog() {
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-300">
            Insights and updates on land surveying and GIS technology
          </p>
        </div>
      </div>
      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post, index) => <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src={post.image} alt={post.title} className="w-full h-64 md:h-full object-cover" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-[#0C2340] mb-3 hover:text-[#D4AF37] transition-colors cursor-pointer">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <button className="text-[#D4AF37] font-semibold hover:text-[#C49D2F] transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>)}
          </div>
        </div>
      </section>
    </div>;
}