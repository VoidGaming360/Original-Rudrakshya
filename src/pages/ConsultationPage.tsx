import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '9779841234567';
    const message = encodeURIComponent('Hello, I would like to schedule a Rudraksha consultation.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/60 z-10" />
          <img
            src="https://images.pexels.com/photos/7186207/pexels-photo-7186207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Meditation with Rudraksha"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              Rudraksha Consultation
            </h1>
            <p className="text-lg text-amber-100">
              Get personalized guidance to find the perfect Rudraksha bead that aligns with your
              spiritual journey, planetary influences, and life goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Consultation Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-amber-900 mb-6">Why Choose a Consultation?</h2>
            <p className="text-lg text-amber-800 mb-6">
              Rudraksha beads come in various types, each with unique spiritual and astrological properties.
              Finding the right one for your specific needs requires expert guidance.
            </p>
            <p className="text-lg text-amber-800 mb-6">
              Our seasoned Rudraksha experts will analyze your birth chart, current life situations,
              and spiritual goals to recommend the most beneficial Rudraksha for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="border border-amber-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Astrological Analysis</h3>
                <p className="text-amber-800">
                  We analyze your birth chart to identify which Rudraksha will help balance
                  challenging planetary influences.
                </p>
              </div>
              
              <div className="border border-amber-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Spiritual Guidance</h3>
                <p className="text-amber-800">
                  Receive insights about which Rudraksha will best support your meditation practice
                  and spiritual development.
                </p>
              </div>
              
              <div className="border border-amber-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">Wearing Instructions</h3>
                <p className="text-amber-800">
                  Learn the proper way to wear, cleanse and energize your Rudraksha for maximum benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultation Form */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-amber-700 text-white p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Us</h2>
                <p className="mb-6">
                  Fill out the form to schedule a personalized Rudraksha consultation with our experts.
                  We'll get back to you within 24 hours.
                </p>
                
                <div className="mb-8">
                  <h3 className="font-semibold mb-2">Quick Contact</h3>
                  <p className="mb-1">Email: info@rudraksha.com</p>
                  <p>Phone: +977 9841234567</p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  icon={<MessageCircle size={18} />}
                  onClick={handleWhatsApp}
                >
                  Contact via WhatsApp
                </Button>
              </div>
              
              <div className="md:w-1/2 p-8">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">Thank You!</h3>
                    <p className="text-amber-800">
                      Your consultation request has been received. One of our Rudraksha experts will
                      contact you shortly to schedule your personalized session.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-serif font-bold text-amber-900 mb-6">
                      Request a Consultation
                    </h2>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-amber-700 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-amber-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="interest" className="block text-sm font-medium text-amber-700 mb-1">
                            Your Interest
                          </label>
                          <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          >
                            <option value="">Select your main interest</option>
                            <option value="spiritual">Spiritual Growth</option>
                            <option value="astrological">Astrological Remedies</option>
                            <option value="health">Health & Wellness</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-amber-700 mb-1">
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                          ></textarea>
                        </div>
                        
                        <div>
                          <Button type="submit" variant="primary" fullWidth>
                            Submit Request
                          </Button>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;