import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="depoimentos" className="bg-secondary-50">
      <SectionTitle 
        title="Depoimentos" 
        subtitle="Confira o que meus clientes dizem sobre o processo terapêutico e os resultados alcançados."
      />
      
      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-secondary-100 p-8 md:p-10 rounded-lg shadow-md border border-secondary-200 relative">
                  <svg className="h-12 w-12 text-primary-400 absolute top-6 left-6 opacity-30" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-primary-700 mb-6 text-lg italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-bold text-primary-900">{testimonial.author}</p>
                      {testimonial.role && (
                        <p className="text-primary-500 text-sm">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-secondary-100/80 hover:bg-secondary-100 p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 z-20"
          aria-label="Depoimento anterior"
        >
          <ChevronLeftIcon className="h-6 w-6 text-primary-700" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-secondary-100/80 hover:bg-secondary-100 p-2 rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 z-20"
          aria-label="Próximo depoimento"
        >
          <ChevronRightIcon className="h-6 w-6 text-primary-700" />
        </button>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-primary-700' : 'bg-secondary-400'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;