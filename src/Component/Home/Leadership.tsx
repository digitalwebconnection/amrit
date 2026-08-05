import React from 'react';
import { Globe, Mail } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-primary-orange rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Meet Our <span className="text-primary-blue">Leadership</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Guiding Amrit Electricals with vision, experience, and a commitment to excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-2/5 h-80 md:h-auto relative">
            <img 
              src="/shiva-sir.webp" 
              alt="Shiva Sir - Leadership"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist yet
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent md:hidden"></div>
            <div className="absolute bottom-4 left-4 md:hidden text-white">
              <h3 className="text-2xl font-bold">Shiva Sir</h3>
              <p className="text-sm font-medium text-primary-orange">Founder & CEO</p>
            </div>
          </div>

          {/* Content */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="hidden md:block mb-6">
              <h3 className="text-3xl font-black text-gray-900 mb-1">Shiva Sir</h3>
              <p className="text-lg font-bold text-primary-orange">Founder & CEO</p>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed italic mb-4">
                "Our mission is to bring light, power, and safety to every home and business we touch. Quality is not just a standard for us; it's a promise."
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over two decades of experience in the electrical and solar industry, Shiva Sir has built Amrit Electricals on the pillars of trust, innovation, and unparalleled customer service. Under his leadership, the company has grown from a small local firm to a leading regional provider.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center hover:bg-primary-blue hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
