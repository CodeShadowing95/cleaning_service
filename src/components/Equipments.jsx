import { useState } from "react";
import Marquee from "react-fast-marquee";
import { generalCleaningServices } from "../constants";

const Equipments = () => {
  const [expandedItems, setExpandedItems] = useState({});

  // Using [id] as key in expandedItems object to keep track of expanded/collapsed state of each item
  // It allows to access or update dynamically the state of each item
  const showMoreServices = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: true })); // Set the item as expanded
  };
  
  const showLessServices = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: false })); // Set the item as collapsed
  };

  return (
    <div id="equipments" className="w-full my-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 py-20 relative overflow-hidden">
      {/* Arrière-plan avec effet de parallaxe */}
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Marquee pauseOnHover={false} speed={30} gradient={false}>
            <img src="/equipments/wallpaper3.jpg" alt="wallpaper" className="opacity-20" />
        </Marquee>
      </div>

      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Dégradés overlay */}
      <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10"></div>
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-white/80 via-transparent to-transparent z-10"></div>

      {/* En-tête avec design moderne */}
      <div className="relative z-20 text-center mb-16">
        <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-blue-100/80 to-cyan-100/80 border border-blue-200/50 rounded-full backdrop-blur-sm">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Nos Équipements</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-cyan-700 bg-clip-text text-transparent mb-4">
          Découvrez les secrets de notre efficacité
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Des équipements de pointe et des techniques innovantes pour un nettoyage professionnel irréprochable
        </p>
      </div>
      <div className="relative z-20 px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
        {generalCleaningServices.map((service, index) => (
          <div key={index} className="group relative flex flex-col p-8 bg-white/80 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 overflow-hidden">
            {/* Arrière-plan décoratif */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/30 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative flex flex-col">
              {/* En-tête avec icône */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="inline-flex items-center px-3 py-1 mb-3 bg-gradient-to-r from-blue-100/80 to-cyan-100/80 border border-blue-200/50 rounded-full">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs font-medium text-blue-700 uppercase tracking-wide">Catégorie</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{service.label}</h3>
                </div>
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white cursor-pointer transition-all duration-300 shadow-lg">
                  {service.id}
                </div>
              </div>
              {/* Services avec animations */}
              <div className="flex flex-col">
                {expandedItems[service.id] ?
                  service.items.map((item, itemIndex) => (
                    <div key={item.id} className="group/item flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-blue-50/50 hover:border-blue-200/50 transition-all duration-300" style={{animationDelay: `${itemIndex * 0.1}s`}}>
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover/item:text-blue-700 transition-colors duration-300">{item.name}</span>
                    </div>
                  ))
                :
                  service.items.slice(0, 4).map((item, itemIndex) => (
                    <div key={item.id} className="group/item flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-blue-50/50 hover:border-blue-200/50 transition-all duration-300" style={{animationDelay: `${itemIndex * 0.1}s`}}>
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover/item:text-blue-700 transition-colors duration-300">{item.name}</span>
                    </div>
                  ))}
              </div>
              
              {/* Bouton moderne */}
              <div className="mt-8">
                <button 
                  className="group/btn relative w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
                  onClick={() => expandedItems[service.id] ? showLessServices(service.id) : showMoreServices(service.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <svg className={`w-4 h-4 transition-transform duration-300 ${expandedItems[service.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {expandedItems[service.id] ? "Voir moins" : "Voir plus"}
                  </span>
                </button>
              </div>
            </div>

            {/* Absolute icon */}
            <div className="absolute bottom-0 right-0 flex justify-center items-center text-gray-500/20 z-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="vertical-middle w-32 h-32" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M17.278 2.613a1 1 0 0 1 1.89.643l-.038.11l-2.61 6.42l.657.175c1.05.281 1.924 1.134 2.09 2.298c.142 1 .275 2.52.092 4.086c-.182 1.552-.69 3.278-1.947 4.546c-.462.466-1.125.54-1.573.548c-.511.008-1.1-.07-1.705-.19c-1.216-.242-2.674-.69-4.054-1.166l-.414-.145l-.813-.294l-.78-.291l-.734-.283l-.978-.388l-.822-.335l-.817-.345a1 1 0 0 1-.228-1.708c1.377-1.08 2.67-2.322 3.761-3.469l.529-.564l.25-.274l.472-.527l.22-.252l.594-.695l.337-.406a3.1 3.1 0 0 1 2.981-1.087l.199.046l.737.197zM10.5 13.348a44 44 0 0 1-3.479 3.444q.863.349 1.733.68a7.3 7.3 0 0 0 1.426-1.338a7 7 0 0 0 .488-.654l.142-.232a1 1 0 0 1 1.747.973c-.234.42-.527.814-.832 1.184a10 10 0 0 1-.792.856c.462.158.924.308 1.372.446c.373-.257.81-.785 1.206-1.385q.239-.36.452-.74l.204-.384a1 1 0 0 1 1.793.887c-.229.462-.496.909-.78 1.339a11 11 0 0 1-.634.868l.421.082c.362.067.744.114 1.089.043c.766-.815 1.163-1.998 1.316-3.305q.053-.456.068-.904zm2.819-2.35a1.09 1.09 0 0 0-1.116.378l-.243.293l5.398 1.446l-.047-.392l-.024-.182c-.037-.253-.216-.491-.511-.61l-.116-.038zM5.565 7.716l.064.14A3.26 3.26 0 0 0 6.866 9.22l.1.058a.068.068 0 0 1 0 .118l-.1.058A3.26 3.26 0 0 0 5.63 10.82l-.064.139a.071.071 0 0 1-.13 0l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.058A3.26 3.26 0 0 0 5.37 7.855l.064-.139a.071.071 0 0 1 .13 0Zm2.832-4.859c.04-.09.166-.09.206 0l.102.222a5.2 5.2 0 0 0 1.97 2.171l.157.093a.108.108 0 0 1 0 .189l-.158.092a5.2 5.2 0 0 0-1.97 2.172l-.1.222a.113.113 0 0 1-.207 0l-.102-.222a5.2 5.2 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1 0-.189l.159-.093a5.2 5.2 0 0 0 1.97-2.171l.1-.222Z"/></g></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Equipments