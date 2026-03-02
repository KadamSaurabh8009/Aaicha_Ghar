import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/vocational-training', label: 'Vocational Training' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/our-team', label: 'Our Team' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
  <nav className="bg-white shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.jpeg" className="w-12 h-12 object-contain" alt="Logo" />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-800">
              Aai Cha Ghar
            </span>
            <span className="text-xs text-gray-600 hidden sm:block">
              Sant Gadgebaba Orphanage
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-rose-600 ${
                location.pathname === item.path
                  ? 'text-rose-600 border-b-2 border-rose-600'
                  : 'text-gray-700'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Donate Button */}
          <Link
            to="/donate"
            className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-rose-700 transition-all duration-200"
          >
            <Heart size={18} />
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-rose-600 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="py-2 space-y-1">

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-100 ${
                  location.pathname === item.path
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Donate Button */}
            <Link
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 mx-4 mt-3 bg-rose-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-rose-700"
            >
              <Heart size={18} />
              Donate
            </Link>

          </div>
        </div>
      )}

    </div>
  </nav>
);
};

export default Navbar;