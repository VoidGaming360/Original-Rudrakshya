import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/products" label="Rudraksha" />
            <NavLink to="/about" label="About Us" />
            <NavLink to="/consultation" label="Consultation" />
          </nav>
          {/*Actions*/}
          <div className="flex items-center space-x-4">
            {/*<button
              className="text-amber-900 hover:text-amber-700 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/account"
              className="text-amber-900 hover:text-amber-700 transition-colors hidden sm:block"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            <Link
              to="/cart"
              className="text-amber-900 hover:text-amber-700 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-600 text-white text-xs flex items-center justify-center">
                0
              </span>
            </Link>
            */}
          </div>
          
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink to="/" label="Home" />
              <MobileNavLink to="/products" label="Rudraksha" />
              <MobileNavLink to="/about" label="About Us" />
              <MobileNavLink to="/consultation" label="Consultation" />
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-base font-medium transition-colors ${
        isActive
          ? 'text-amber-800 border-b-2 border-amber-600'
          : 'text-amber-900 hover:text-amber-600'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink: React.FC<{ to: string; label: string }> = ({
  to,
  label,
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-lg font-medium py-2 ${
        isActive ? 'text-amber-800' : 'text-amber-900'
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;