import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#F8F6F3] to-[#F0EBE3] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#8B7355] to-[#D4A574] bg-clip-text text-transparent">
              {siteInfo.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {siteInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#8B7355] transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/qui-suis-je" className="text-gray-600 hover:text-[#8B7355] transition-colors text-sm">
                  Qui suis-je ?
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#8B7355] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#8B7355] transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/rendez-vous" className="text-gray-600 hover:text-[#8B7355] transition-colors text-sm">
                  Prendre RDV
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#8B7355] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{siteInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8B7355] flex-shrink-0" />
                <span className="text-gray-600 text-sm">{siteInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8B7355] flex-shrink-0" />
                <span className="text-gray-600 text-sm">{siteInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Horaires</h4>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-[#8B7355] flex-shrink-0 mt-0.5" />
              <div className="text-gray-600 text-sm">
                <p>Lundi - Vendredi</p>
                <p className="font-medium">9h00 - 19h00</p>
                <p className="mt-2 text-xs text-gray-500">Sur rendez-vous uniquement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} {siteInfo.name}. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-[#8B7355] transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-[#8B7355] transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
