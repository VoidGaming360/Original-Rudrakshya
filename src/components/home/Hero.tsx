import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/50 z-10" />
        <img
          src="https://images.pexels.com/photos/10621400/pexels-photo-10621400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Rudraksha beads"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-4 animate-fade-in">
            Sacred Rudraksha <span className="text-amber-300">Beads</span>
          </h1>
          <p className="text-lg md:text-xl text-amber-100 mb-8 animate-fade-in-delay">
            Discover authentic Nepali Rudraksha beads, meticulously sourced
            and spiritually energized for wellbeing, protection, and prosperity.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
            <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              <Link to="/products">Explore Collection</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/consultation">Get Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;