import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'New Delhi, India',
    quote: "I've been wearing my 5 Mukhi Rudraksha for over a year now, and the positive changes in my life have been remarkable. The energy and focus it has brought me is truly transformative.",
    image: 'https://images.pexels.com/photos/4646246/pexels-photo-4646246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Raj Patel',
    location: 'Mumbai, India',
    quote: 'The Ganesh Rudraksha I purchased has helped me overcome several obstacles in my business. The consultation service provided was extremely helpful in selecting the right bead for my needs.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    location: 'London, UK',
    quote: "I was skeptical at first, but after wearing my Rudraksha mala during meditation, I've experienced deeper states of consciousness and improved sleep. The quality is exceptional.",
    image: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-100 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative p-6 md:p-10 bg-amber-800 rounded-lg shadow-lg overflow-hidden">
            <Quote className="absolute top-6 left-6 text-amber-700 opacity-20 w-20 h-20" />
            
            <div className="flex flex-col md:flex-row items-center relative z-10">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-4 border-amber-500">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-amber-200">{currentTestimonial.name}</h3>
                  <p className="text-amber-300 text-sm">{currentTestimonial.location}</p>
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <p className="text-amber-100 italic text-lg leading-relaxed">
                  "{currentTestimonial.quote}"
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-amber-700 hover:bg-amber-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-amber-400' : 'bg-amber-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-amber-700 hover:bg-amber-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;