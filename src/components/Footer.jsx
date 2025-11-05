
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLinkClick = (e) => {
     e.preventDefault();
     setIsModalOpen(true);
   };

   return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900/90 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Logo and Main Content */}
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 6h16v4H8V6zm0 6h16v4H8v-4zm0 6h16v4H8v-4zm0 6h16v4H8v-4z" fill="url(#gradient)" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-light mb-3 text-balance">Découvrez une nouvelle approche du nettoyage</h2>

          {/* Subtitle */}
          <p className="text-gray-300 text-base mb-6 max-w-2xl mx-auto">
            Rejoignez REHOBOTH NETTOYAGE dès maintenant et faites partie d'une communauté qui fait confiance à nos services de nettoyage professionnels
          </p>

          {/* CTA Button */}
          <Link
            to="/devis"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium inline-flex items-center transition-all duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            Demander un devis gratuit
          </Link>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {/* Services */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">// Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services-details" className="text-gray-300 hover:text-white transition-colors">
                  Nettoyage Résidentiel
                </Link>
              </li>
              <li>
                <Link to="/services-details" className="text-gray-300 hover:text-white transition-colors">
                  Nettoyage Commercial
                </Link>
              </li>
              <li>
                <Link to="/services-details" className="text-gray-300 hover:text-white transition-colors">
                  Nettoyage Post-Construction
                </Link>
              </li>
              <li>
                <Link to="/services-details" className="text-gray-300 hover:text-white transition-colors">
                  Nettoyage de Vitres
                </Link>
              </li>
              <li>
                <Link to="/services-details" className="text-gray-300 hover:text-white transition-colors">
                  Désinfection
                </Link>
              </li>
              <li>
                <Link to="/services-details" className="text-gray-300 hover:text-white transition-colors">
                  Tous nos Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">// Support</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Centre d'Aide
                </button>
              </li>
              <li>
                <button onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Communauté
                </button>
              </li>
              <li>
                <button onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Support Entreprise
                </button>
              </li>
              <li>
                <button onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Documentation
                </button>
              </li>
              <li>
                <button onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">// Entreprise</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  L'entreprise
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Engagements
                </a>
              </li>
              <li>
                <Link to="/services-details" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Catalogue
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Demande devis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">// Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+33 7 59 22 15 08</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>rehoboth.nettoyage20@gmail.com</span>
              </li>
              <li className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>1 Rue Albert Schweitzer,<br />69600 Oullins</span>
              </li>
              <li>
                <button onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Zones d'Intervention
                </button>
              </li>
              <li>
                <button onClick={handleLinkClick} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Urgences 24h/24
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-2">Ne manquez aucune actualité</h3>
              <p className="text-gray-300 text-sm">
                Recevez toutes les dernières nouvelles, conseils de nettoyage et offres spéciales de <span className="font-medium">REHOBOTH NETTOYAGE</span>
                . Livré directement dans votre boîte mail. Nous envoyons rarement plus d'un email par mois.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="flex gap-3 mb-3">
                <input
                  type="email"
                  placeholder="Saisir votre adresse mail"
                  className="bg-gray-800 border border-gray-600 text-white placeholder:text-gray-400 flex-1 md:w-64 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-lg font-medium transition-colors">
                  S'inscrire
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="marketing" className="border-gray-600" />
                  <label htmlFor="marketing" className="text-xs text-gray-400">
                    J'accepte de recevoir les emails marketing de REHOBOTH NETTOYAGE
                  </label>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-400 border-t border-gray-700 pt-6">
          <p>© 2025 REHOBOTH NETTOYAGE. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={handleLinkClick} className="hover:text-white transition-colors cursor-pointer">
              Politique de Confidentialité
            </button>
            <button onClick={handleLinkClick} className="hover:text-white transition-colors cursor-pointer">
              Conditions d'Utilisation
            </button>
            <button onClick={handleLinkClick} className="hover:text-white transition-colors cursor-pointer">
              Mentions Légales
            </button>
          </div>
        </div>
      </div>
      
      <ComingSoonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;