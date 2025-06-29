import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Logo white />
            <p className="mt-4 text-amber-200">
              Premium Rudraksha beads sourced directly from Nepal. Authentic,
              certified, and spiritually energized for maximum benefits.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-100">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/products" label="Rudraksha" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/consultation" label="Consultation" />
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-100">Categories</h3>
            <ul className="space-y-2">
              <FooterLink to="/products?category=mukhis" label="Mukhis" />
              <FooterLink to="/products?category=malas" label="Rudraksha Malas" />
              <FooterLink to="/products?category=bracelets" label="Bracelets" />
              <FooterLink to="/products?category=pendants" label="Pendants" />
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-100">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-2 flex-shrink-0" />
                <span>info-original@rudrakshya.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-2 flex-shrink-0" />
                <span>+977 9764569461</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-10 pt-6 text-center text-amber-300">
          <p>© {new Date().getFullYear()} RudrakshaBeads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-amber-800 hover:bg-amber-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  return (
    <li>
      <Link to={to} className="hover:text-white transition-colors">
        {label}
      </Link>
    </li>
  );
};

export default Footer;