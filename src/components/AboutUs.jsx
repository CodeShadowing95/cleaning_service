
import { useState, useEffect } from 'react';

// Styles CSS personnalisés pour les animations
const customStyles = `
  @keyframes animate-spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-spin-slow {
    animation: animate-spin-slow 20s linear infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

// Injection des styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);
}

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({
    title: false,
    description: false,
    features: false,
    buttons: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animation séquentielle
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, title: true })), 200);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, description: true })), 600);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, features: true })), 1000);
          setTimeout(() => setAnimatedElements(prev => ({ ...prev, buttons: true })), 1400);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-us');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about-us" className="relative w-full flex lg:flex-row flex-col justify-center items-center px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] gap-8 pt-24 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Left side */}
      <div className="relative flex justify-center w-full items-center group">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:rotate-1">
          <img 
            src="/directeur.png" 
            className={`w-full h-full object-cover flex-shrink-0 align-middle transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} 
            alt="left-img" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Particules flottantes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-20 right-16 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce delay-1000"></div>
        </div>
      </div>

      {/* Right side */}
      <div className="relative flex flex-col w-full h-full z-10">
        <div className={`flex items-end space-x-3 mb-4 transition-all duration-700 ${animatedElements.title ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" className="text-white drop-shadow-lg">
              <path fill="currentColor" d="M445.1 22.93c-3.8.11-7.9 1.81-11.5 5.98C379.2 107.6 318.8 184.7 257.3 261.4c2.3.9 4.5 1.9 6.5 3.1c4.5 2.5 8.4 5.6 11.7 9C339 197.6 401.3 121.1 455.6 40.87c4.3-9.84 1.1-13.83-3.8-16.4c-1.2-.65-2.6-1.13-4.1-1.37c-.8-.13-1.7-.19-2.6-.17M63.14 46.41c7.69 13.5 16.6 26.49 2.25 47.15c10.45-10.72 22.95-21.51 42.41-1.4c-4.2-10.17-17.26-17.99-6.1-33.71c-17.06 8.58-25.86 0-38.56-12.04M267.2 94.02c-7.4 11.08-18.3 14.68-32.6 10.28c14.3 4.9 21.5 14.5 17.7 31.7c8.3-15.5 18.1-21.4 29.5-17.1c-6.4-6.3-17.3-7-14.6-24.88m181.5 46.78c-4 22.5-6 45.9-43.2 50.9c22.9.8 48.1 3.7 51.7 46.2c5-15-3-37.8 25.6-41.3c-28.6-10.4-30.7-29.2-34.1-55.8m-358.92 96c2.1 24.8-8.1 41.4-37.08 45.6c29.38 3.7 44.88 15.4 45.88 35.5c5.62-13.5-.7-30.8 28.72-36.8c-22.1-5.2-34.82-19.7-37.52-44.3m155.42 39.7l-13.4 16.6c1.5.8 3 1.7 4.5 2.6c4.4 2.8 8.7 6.1 12.3 9.8l15.2-18c-2.3-2.7-5.4-5.4-8.9-7.4c-3-1.7-6.3-3-9.7-3.6M208 304.1c-.8 0-1.5 0-2 .1c-1 .2-1.5.5-1.7.7l-.5.6l-.6.4c-46.9 36-117.06 70.7-173.97 104.3c14.77 4.4 29.83 9.7 44.58 15.6l36.39-30.5L88.37 432c17.03 7.6 33.43 16.2 48.03 25.6l27.3-43.8l-12.2 54.2c9 6.7 17 13.8 23.8 21.1c27.2-59.1 63-100.2 67.7-154.8l.1-.6l.1-.6c.6-2.3-.2-5.7-3.1-10c-3-4.2-7.9-8.7-13.4-12.2c-5.4-3.4-11.5-5.8-15.9-6.5c-1.1-.2-2-.3-2.8-.3m111.2.2c9.7 13.1 9.9 25.8-4.7 38.3c17.6-8.2 30.3-7.2 37.8 3.6c-1.7-9.4-11.1-16.8 3-30.4c-14 4.8-26.1 1.2-36.1-11.5m56.7 90.8c11.7 17.4 20 29.5 4.1 47.8c23.4-10 29.5 7 41.2 13.8c-19.9-26.8-2.6-39.3 14.1-49.5c-30.5 12.8-44.4-.3-59.4-12.1"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">À Propos de nous</p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mt-1"></div>
          </div>
        </div>
        
        <h1 className={`text-4xl lg:text-5xl font-bold leading-tight mb-4 transition-all duration-700 delay-200 ${animatedElements.title ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Une qualité de nettoyage à découvrir, bienvenue chez{' '}
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent font-extrabold relative">
            REHOBOTH Nettoyage
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </span>{' '}
          !
        </h1>
        
        <p className={`text-lg leading-relaxed text-gray-700 mb-6 transition-all duration-700 delay-400 ${animatedElements.description ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Nous sommes une entreprise qui mettons notre{' '}
          <span className="font-semibold text-blue-700">expertise</span> et notre{' '}
          <span className="font-semibold text-cyan-700">passion</span> pour la propreté au service de votre bien-être. 
          Que ce soit pour votre domicile ou vos espaces professionnels, nous proposons des solutions de nettoyage personnalisées, 
          réalisées avec soin et attention aux moindres détails. Avec des produits respectueux de l'environnement et des techniques efficaces, 
          nous vous offrons un espace sain, frais et accueillant, où il fait bon vivre et travailler.
        </p>
        <div className={`w-full max-sm:flex-col flex max-sm:gap-4 gap-8 mt-6 transition-all duration-700 delay-600 ${animatedElements.features ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-col gap-6">
            {/* Feature 1 */}
            <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300">
              <div className="relative w-12 h-12 flex justify-center items-center text-white bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 drop-shadow-sm" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <p className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">100% Satisfaction Client</p>
            </div>
            
            {/* Feature 2 */}
            <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300">
              <div className="relative w-12 h-12 flex justify-center items-center text-white bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 drop-shadow-sm" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <p className="font-bold text-gray-800 group-hover:text-cyan-700 transition-colors duration-300">Professionnalisme Garanti</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Feature 3 */}
            <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300">
              <div className="relative w-12 h-12 flex justify-center items-center text-white bg-gradient-to-br from-blue-600 to-cyan-400 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 drop-shadow-sm" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <p className="font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">Prix Très Abordables</p>
            </div>
            
            {/* Feature 4 */}
            <div className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300">
              <div className="relative w-12 h-12 flex justify-center items-center text-white bg-gradient-to-br from-cyan-600 to-blue-400 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 drop-shadow-sm" viewBox="0 0 24 24">
                  <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <p className="font-bold text-gray-800 group-hover:text-cyan-700 transition-colors duration-300">Flexibilité Totale</p>
            </div>
          </div>
        </div>
        
        <div className={`max-sm:flex-col flex gap-6 mt-8 transition-all duration-700 delay-800 ${animatedElements.buttons ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/>
              </svg>
              Contactez-nous
            </span>
          </button>
          
          <a href="#services" className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-bold rounded-2xl border-2 border-blue-200 hover:border-cyan-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-cyan-100/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center gap-2 group-hover:text-blue-700 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22L12 18.77L5.82 22L7 14.14l-5-4.87l6.91-1.01z"/>
              </svg>
              Nos services
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs