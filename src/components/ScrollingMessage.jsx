import Marquee from "react-fast-marquee"

const services = [
  "Nettoyage de bureaux",
  "Nettoyage de sols et entretiens des murs",
  "Ménage et époussetage",
  "Vidage de poubelles",
  "Lavage de vitres et surfaces vitrées",
  "Nettoyage de fin de chantier",
  "Founitures de matériels de nettoyage",
];

const ScrollingMessage = () => {
  return (
    <div className="relative w-full mt-20 mb-10 overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-transparent to-blue-600/20"></div>
      
      {/* Éléments décoratifs flottants */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Conteneur principal avec rotation */}
      <div className="relative w-full h-[120px] flex justify-center items-center overflow-hidden -rotate-2 z-10">
        {/* Bordures brillantes */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
        
        <Marquee className="h-full border-none outline-none" pauseOnHover={true} speed={80} gradient={false}>
          <div className="flex justify-center items-center gap-20 border-none outline-none py-4">
            {services.map((service, index) => (
              <div key={index} className={`group flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 ${index === 0 ? 'ml-20' : ''}`}>
                {/* Icône animée */}
                <div className="relative">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" className="text-white animate-pulse">
                      <path fill="currentColor" d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.5 7.5 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.5 7.5 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.5 7.5 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.5 7.5 0 0 0 4.464-4.464Z"/>
                    </svg>
                  </div>
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>
                
                {/* Texte avec effet */}
                <span className="text-white text-lg font-semibold tracking-wide group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
                  {service}
                </span>
                
                {/* Séparateur décoratif */}
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400/50 to-blue-400/50 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </Marquee>
        
        {/* Effet de dégradé sur les bords */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-20 pointer-events-none"></div>
      </div>
    </div>
  )
}

export default ScrollingMessage