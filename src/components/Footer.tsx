import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-red-500" />
              <div className="flex flex-col">
                <span className="font-bold text-xl">Aai Cha Ghar</span>
                <span className="text-sm text-gray-400">Sant Gadgebaba Orphanage</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to providing comprehensive care, education, and vocational training to intellectually 
              disabled children in Latur. Established under Shri Gajanan Bahauuddeshiya Sanstha.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Vasant Vihar, Opposite Nrusingh Mandir, New Katpur Road, Latur</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+91 9422 342 731</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">info@aaichaghar.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/vocational-training" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Vocational Training
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Special Education</li>
              <li>Ganpati Idol Making</li>
              <li>Decorative Lanterns</li>
              <li>Diwali Diyas</li>
              <li>Slipper Making</li>
              <li>Office File Making</li>
              <li>Care & Nutrition</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Aai Cha Ghar - Sant Gadgebaba Orphanage. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              Recognized by Divyang Welfare Department & Zilla Parishad Latur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;