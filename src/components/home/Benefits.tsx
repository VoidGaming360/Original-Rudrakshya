import React from 'react';
import { ShieldCheck, Heart, ZapIcon, Brain } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-amber-600" />,
    title: 'Protection',
    description: 'Provides spiritual protection from negative energies and harmful influences.',
  },
  {
    icon: <Heart className="w-10 h-10 text-amber-600" />,
    title: 'Healing',
    description: 'Supports emotional and physical wellbeing through ancient healing properties.',
  },
  {
    icon: <ZapIcon className="w-10 h-10 text-amber-600" />,
    title: 'Enhanced Energy',
    description: 'Increases vital energy flow and strengthens your natural aura.',
  },
  {
    icon: <Brain className="w-10 h-10 text-amber-600" />,
    title: 'Spiritual Growth',
    description: 'Deepens meditation practice and accelerates spiritual evolution.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Benefits of Rudraksha
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
          <p className="text-amber-800 max-w-2xl mx-auto">
            For centuries, Rudraksha beads have been revered for their profound spiritual
            and wellness benefits. Discover how they can transform your life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{benefit.title}</h3>
              <p className="text-amber-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;