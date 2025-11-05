
import { Clipboard, Play, PlayCircleIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Contactez notre service",
      description: "Facile et rapide, contactez-nous dès maintenant pour une estimation personnalisée. Votre satisfaction est notre priorité, et nous sommes prêts à vous répondre en un instant.",
      image: "/how-it-works/01.jpg",
      icon: "📞",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "L'équipe arrive",
      description: "Une fois votre demande validée, notre équipe se rend rapidement sur place. Ponctuels, professionnels et équipés, nous sommes prêts à répondre à toutes vos attentes.",
      image: "/how-it-works/02.jpg",
      icon: "🚐",
      color: "from-cyan-500 to-teal-500"
    },
    {
      id: 3,
      title: "Le travail commence",
      description: "Un nettoyage minutieux et organisé pour chaque espace. Nous utilisons des méthodes modernes et des produits adaptés pour un résultat optimal.",
      image: "/how-it-works/03.jpg",
      icon: "🧽",
      color: "from-teal-500 to-green-500"
    },
    {
      id: 4,
      title: "Résultat final",
      description: "Découvrez des espaces transformés par notre savoir-faire. Propreté, fraîcheur et brillance : nous redonnons vie à vos locaux.",
      image: "/how-it-works/04.jpg",
      icon: "✨",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Auto-play demo
  useEffect(() => {
    let interval;
    if (isPlaying && activeTab === 'demo') {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeTab, steps.length]);

  return (
    <div id="demonstration" className="relative flex flex-col justify-center items-center mt-8 mb-4 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-12 overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Onglets modernes */}
      <div className="relative z-10 flex items-center p-2 bg-white/80 backdrop-blur-lg border border-white/60 rounded-2xl shadow-xl mb-8">
        <button
          onClick={() => setActiveTab('process')}
          className={`flex justify-center items-center gap-3 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
            activeTab === 'process'
              ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg transform scale-105'
              : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <Clipboard className="w-4 h-4" />
          Comment ça marche ?
        </button>
        <button
          onClick={() => {
            setActiveTab('demo');
            setCurrentStep(0);
            setIsPlaying(false);
          }}
          className={`flex justify-center items-center gap-3 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
            activeTab === 'demo'
              ? 'text-white bg-gradient-to-r from-cyan-600 to-teal-600 shadow-lg transform scale-105'
              : 'text-cyan-600 hover:bg-cyan-50'
          }`}
        >
          <Play className="w-4 h-4" />
          Démo Interactive
        </button>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full max-w-7xl">
        {activeTab === 'process' ? (
          // Vue processus
          <div className="space-y-10">
            {/* En-tête */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 font-medium text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Processus Simplifié
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 via-cyan-800 to-teal-800 bg-clip-text text-transparent">
                Comment ça marche ?
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Découvrez notre processus simple et efficace en 4 étapes pour un service de nettoyage professionnel qui transforme vos espaces
              </p>
            </div>

            {/* Étapes du processus */}
            <div className="grid gap-8 relative">
              {/* Ligne de connexion */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-teal-400 transform -translate-x-1/2 opacity-30"></div>
              
              {steps.map((step, index) => (
                <div key={step.id} className={`group relative flex justify-center items-center gap-8 lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
                  {/* Carte de contenu */}
                  <div className="w-full lg:w-[28rem]">
                    <div className="relative p-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/60 hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                      {/* Élément décoratif */}
                      <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        {step.icon}
                      </div>
                      
                      {/* Badge numéro */}
                      {/* <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        {step.id}
                      </div> */}
                      
                      <div className="space-y-4 mt-4">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    </div>
                  </div>
                  
                  {/* Connecteur central */}
                  <div className="hidden lg:flex relative z-20 w-20 h-20 bg-white rounded-full shadow-xl border-4 border-blue-100 items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-inner`}>
                      {step.id}
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-full lg:w-[28rem]">
                    <div className="relative group/image">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          loading="lazy"
                          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Vue démo interactive
          <div className="space-y-8">
            {/* En-tête démo */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full text-cyan-700 font-medium text-sm">
                <PlayCircleIcon className="w-4 h-4" />
                Démo Interactive
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-900 via-teal-800 to-green-800 bg-clip-text text-transparent">
                Voyez le processus en action
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                Découvrez notre méthode de travail étape par étape avec cette démonstration interactive
              </p>
            </div>
            
            {/* Contrôles de démo */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)}
                className="p-3 bg-white/80 backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/60"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => {
                  setIsPlaying(!isPlaying);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isPlaying 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {isPlaying ? (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                    Pause
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <PlayCircleIcon className="w-4 h-4" />
                    Lancer la démo
                  </div>
                )}
              </button>
              
              <button
                onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
                className="p-3 bg-white/80 backdrop-blur-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/60"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Indicateurs d'étapes */}
            <div className="flex justify-center items-center gap-2.5 mb-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            {/* Contenu de la démo */}
            <div className="relative max-w-3xl mx-auto">
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/60 overflow-hidden">
                {/* Image principale */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={steps[currentStep].image} 
                    alt={steps[currentStep].title}
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Badge étape */}
                  <div className={`absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r ${steps[currentStep].color} text-white rounded-full font-semibold shadow-lg`}>
                    Étape {steps[currentStep].id}
                  </div>
                  
                  {/* Icône flottante */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-lg rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce">
                    {steps[currentStep].icon}
                  </div>
                </div>
                
                {/* Contenu textuel */}
                <div className="p-5">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {steps[currentStep].title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{steps[currentStep].description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Section d'appel à l'action */}
      <div className="relative z-10 w-full max-w-6xl mt-16">
        <div className="relative rounded-3xl border border-white/60 bg-gradient-to-br from-slate-800 via-gray-900 to-black overflow-hidden shadow-2xl">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-6 py-8 gap-6">
            <div className="flex flex-col justify-center gap-4">
              <div className="border-l-4 border-cyan-400 pl-5">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Prêt à transformer vos espaces ?
                </h3>
                <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                  Contactez-nous dès maintenant pour bénéficier de notre expertise en nettoyage professionnel. 
                  Devis gratuit et intervention rapide garantis.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/devis" className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-cyan-400 hover:to-teal-400">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="whitespace-nowrap">Contactez-nous</span>
                </div>
              </Link>
              
              <button className="group px-6 py-3 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="whitespace-nowrap">En savoir plus</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;