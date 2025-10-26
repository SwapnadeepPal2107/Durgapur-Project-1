import React, { useState, lazy } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="pt-[120px]">
      {/* Hero Section */}
      <div className="bg-[#0C2340] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team for your surveying needs
          </p>
        </div>
      </div>
      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#0C2340] mb-8">
                Get In Touch
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C2340] mb-2">Address</h3>
                    <p className="text-gray-700">
                      Sovapur (Near IQ City Medical College & Hospital)
                      <br />
                      Durgapur, Paschim Bardhaman
                      <br />
                      West Bengal – 713206
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C2340] mb-2">Phone</h3>
                    <a href="tel:+919378478113" className="text-gray-700 hover:text-[#D4AF37] transition-colors">
                      +91 93784 78113
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#D4AF37] bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C2340] mb-2">Email</h3>
                    <a href="mailto:ebizersubhojjit.dgp@gmail.com" className="text-gray-700 hover:text-[#D4AF37] transition-colors">
                      ebizersubhojjit.dgp@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              {/* Business Hours */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-[#0C2340] mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#0C2340] mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#D4AF37] text-[#0C2340] px-6 py-4 rounded-lg font-semibold hover:bg-[#C49D2F] transition-colors flex items-center justify-center gap-2">
                    <SendIcon className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0C2340] mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d87.31!3d23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAwLjAiTiA4N8KwMTgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>
    </div>;
}