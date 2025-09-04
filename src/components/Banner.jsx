import { useEffect, useState } from "react";
import Navbar from "./Navbar"

const Banner = () => {

  const [contactInfo, setContactInfo] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      contactInfo === 0 ? setContactInfo(1) : setContactInfo(0);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [contactInfo]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background avec parallax et overlay moderne */}
      <div className="absolute inset-0">
        <img 
          src="/banner_bg.jpg" 
          alt="banner" 
          className="w-full h-full object-cover scale-110 transition-transform duration-[20s] ease-out hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-800/85 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        {/* Effet de grain moderne */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="absolute inset-0 z-50">

        {/* Navbar */}
        <Navbar />

        {/* Banner content avec animations */}
        <div className="relative w-full h-full flex justify-between items-center px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] gap-10 text-white">

          <div className={`w-full lg:w-1/2 flex h-full flex-col justify-center gap-8 relative pt-20 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Titre avec effet de typing et gradient */}
            <h1 className={`font-bold capitalize text-3xl leading-[1.4] sm:text-4xl lg:text-5xl xl:text-6xl sm:leading-[1.3] 2xl:leading-[1.2] max-w-[800px] text-balance z-10 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              Améliorez votre activité grâce à nos services de nettoyage 
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-extrabold">professionnels</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_1.5s_forwards]"></div>
              </span>
            </h1>
            <p className={`text-lg sm:text-xl max-w-[650px] text-gray-100 leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
              Des prestations de nettoyage de <span className="text-cyan-300 font-semibold">haute qualité</span>, adaptées à vos besoins. Offrez-vous un environnement éclatant sans lever le petit doigt.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
               {/* Bouton "En savoir plus" amélioré */}
               <a href="#about-us" className="group relative min-w-fit px-6 py-3 text-base sm:text-lg text-center font-bold transition-all duration-700 rounded-full transform hover:scale-105 hover:-translate-y-1 active:scale-95 overflow-hidden">
                 {/* Background principal avec dégradé animé */}
                 <div className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-cyan-50 rounded-full transition-all duration-500 group-hover:from-blue-100 group-hover:via-cyan-100 group-hover:to-white"></div>
                 
                 {/* Effet de brillance qui traverse le bouton */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                 
                 {/* Bordure animée */}
                 <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{padding: '2px'}}>
                   <div className="w-full h-full bg-white rounded-full"></div>
                 </div>
                 
                 {/* Ombre colorée */}
                 <div className="absolute inset-0 rounded-full shadow-lg group-hover:shadow-xl group-hover:shadow-blue-400/40 transition-all duration-500"></div>
                 
                 {/* Contenu avec icône et texte alignés */}
                 <div className="relative z-10 flex items-center justify-center gap-2">
                   <span className="text-lg">✨</span>
                   <span className="bg-gradient-to-r from-gray-800 to-blue-900 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-cyan-700 transition-all duration-500 font-extrabold whitespace-nowrap">
                     En savoir plus
                   </span>
                 </div>
                 
                 {/* Particules flottantes */}
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="absolute top-2 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                   <div className="absolute bottom-2 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                 </div>
               </a>
               
               {/* Bouton "Contactez-nous" amélioré */}
               <a href="#contact" className="group/button relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3 text-base sm:text-lg font-bold text-white transition-all duration-700 ease-out hover:scale-105 hover:-translate-y-1 active:scale-95">
                 {/* Background principal avec dégradé animé */}
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-full transition-all duration-500 group-hover/button:from-cyan-600 group-hover/button:via-blue-500 group-hover/button:to-cyan-700"></div>
                 
                 {/* Effet de verre avec backdrop-blur */}
                 <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-full border border-white/30 group-hover/button:border-cyan-300/60 transition-all duration-500"></div>
                 
                 {/* Effet de brillance diagonal */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full transform -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-1200 ease-out"></div>
                 
                 {/* Ombre colorée dynamique */}
                 <div className="absolute inset-0 rounded-full shadow-xl group-hover/button:shadow-xl group-hover/button:shadow-cyan-500/50 transition-all duration-500"></div>
                 
                 {/* Effet de pulsation */}
                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover/button:opacity-100 animate-pulse transition-opacity duration-500"></div>
                 
                 {/* Contenu avec icône et texte alignés */}
                 <div className="relative z-10 flex items-center justify-center gap-2">
                   <span className="text-lg">🚀</span>
                   <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent group-hover/button:from-cyan-100 group-hover/button:to-white transition-all duration-500 font-bold whitespace-nowrap">
                     Contactez-nous
                   </span>
                   {/* Icône flèche améliorée */}
                   <div className="transition-all duration-500 group-hover/button:translate-x-1 group-hover/button:scale-110">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="filter drop-shadow-lg">
                       <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/>
                     </svg>
                   </div>
                 </div>
                 
                 {/* Particules énergétiques */}
                 <div className="absolute inset-0 opacity-0 group-hover/button:opacity-100 transition-opacity duration-500">
                   <div className="absolute top-2 left-4 w-1 h-1 bg-cyan-300 rounded-full animate-bounce"></div>
                   <div className="absolute bottom-2 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                 </div>
                 
                 {/* Effet de vague au clic */}
                 <div className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-active/button:scale-100 transition-transform duration-300 ease-out"></div>
               </a>
             </div>
          </div>

          <div className={`min-w-1/2 h-full lg:flex hidden justify-center items-end relative transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="w-full h-[85%] relative group">
              <img
                src="/banner_img.png"
                className="w-full h-full object-cover transition-transform duration-700 filter drop-shadow-2xl"
                alt="img-right"
              />
              {/* Effet de lueur autour de l'image */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 via-transparent to-blue-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
            </div>
            <div className="absolute top-24 -right-12">
              <div className="relative flex items-center justify-center border-2 border-cyan-400 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-full w-32 h-32 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 transition-all duration-500 hover:scale-110">
                <img src="/side_img.png" alt="sideImg" className="transition-transform duration-300 hover:rotate-12" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>
            </div>
            <div className="absolute top-1/4 left-0 w-64 h-12 py-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-full flex justify-center items-center shadow-2xl shadow-blue-500/50 hover:animate-none transition-all duration-500 hover:scale-105">
              <div className="w-full h-full bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-900 rounded-full flex justify-center items-center gap-3 text-sm font-bold backdrop-blur-sm">
                <div className="flex items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="-mr-1 text-cyan-300" viewBox="0 0 24 24"><path fill="currentColor" d="M3 23v-7q0-2.075 1.463-3.537T8 11h1V3q0-.825.588-1.412T11 1h2q.825 0 1.413.588T15 3v8h1q2.075 0 3.538 1.463T21 16v7zm2-2h2v-3q0-.425.288-.712T8 17t.713.288T9 18v3h2v-3q0-.425.288-.712T12 17t.713.288T13 18v3h2v-3q0-.425.288-.712T16 17t.713.288T17 18v3h2v-5q0-1.25-.875-2.125T16 13H8q-1.25 0-2.125.875T5 16z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="-mr-1 text-yellow-300" viewBox="0 0 24 24"><path fill="currentColor" d="m9 7l1-2V4H9V2h6q.425 0 .713.288T16 3v1l-1 2h-3V5l-2 2zM8 22v-6.85q0-.275.088-.587T8.3 14L12 7h3q.35.35.675.938T16 9v13z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-green-300" viewBox="0 0 24 24"><path fill="currentColor" d="M8.75 23q-.75 0-1.312-.488t-.663-1.237L5 8h14l-1.775 13.275q-.1.75-.663 1.238T15.25 23zM12 16q1.25 0 2.125-.875T15 13v-2h-2v2q0 .425-.288.713T12 14t-.712-.288T11 13v-2H9v2q0 1.25.875 2.125T12 16m3-9q-.625 0-1.062-.437T13.5 5.5t.438-1.062T15 4t1.063.438T16.5 5.5t-.437 1.063T15 7m-5-1q-1.05 0-1.775-.725T7.5 3.5t.725-1.775T10 1t1.775.725T12.5 3.5t-.725 1.775T10 6"/></svg>
                </div>
                <span className="text-white">Propreté au rendez-vous</span>
              </div>
            </div>

            <div className="absolute bottom-12 -right-20 w-64 h-12 py-0.5 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 rounded-full flex justify-center items-center z-10 shadow-2xl shadow-emerald-500/50 hover:animate-none transition-all duration-500 hover:scale-105">
              <div className="relative w-full h-full bg-gradient-to-r from-emerald-800 via-green-700 to-teal-800 rounded-full flex justify-center items-center gap-3 text-sm font-bold capitalize backdrop-blur-sm">
                <img src="/positive-review.png" alt="positive review" className="w-6 h-6" style={{animationDuration: '3s'}} />
                <span className="text-white">Satisfaction cliente</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
            </div>
          </div>

          

          <div id="sparkle" className={`absolute top-36 left-1/4`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle1" className={`absolute top-24 right-[35%]`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle2" className={`absolute bottom-10 left-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle3" className={`absolute top-1/3 right-20`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle4" className={`absolute bottom-44 right-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle2" className={`absolute bottom-40 left-[35%]`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>

          {/* Section contact avec animation */}
          <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            <div className="flex flex-col items-center gap-4">
              {/* <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg">
                <p className="text-base font-semibold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent transition-all duration-500">
                  {contactInfo === 0 ? "📞 Appelez-nous: +33 7 59 22 15 08" : "✉️ Email: rehonettoyage@yahoo.com"}
                </p>
              </div> */}
              {/* Souris stylisée avec animation */}
              <div className="relative group cursor-pointer">
                <div className="w-8 h-12 border-2 border-white/70 rounded-full flex justify-center bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm group-hover:border-cyan-300 transition-all duration-300">
                  <div className="w-1.5 h-4 bg-gradient-to-b from-white to-cyan-300 rounded-full mt-2 animate-bounce group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300"></div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Découvrir nos services
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Styles CSS personnalisés pour les animations */}
      <style jsx>{`
        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
      `}</style>
    </div>
  )
}

export default Banner