import Envelope from "./sub-components/Envelope"

const Contact = () => {

  return (
    <div id="contact" className="w-full relative mb-24 pb-6 overflow-hidden">
      {/* Arrière-plan décoratif avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20"></div>
      
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Bulles d'eau flottantes */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {/* Première vague de bulles */}
        <div className="absolute top-[10%] left-[5%] w-3 h-3 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-cyan-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
        <div className="absolute top-[30%] left-[25%] w-4 h-4 bg-blue-300/25 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-[15%] left-[35%] w-2.5 h-2.5 bg-cyan-300/35 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute top-[40%] left-[45%] w-3.5 h-3.5 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '2.8s'}}></div>
        <div className="absolute top-[25%] left-[55%] w-2 h-2 bg-cyan-400/40 rounded-full animate-bounce" style={{animationDelay: '2.5s', animationDuration: '3.2s'}}></div>
        <div className="absolute top-[35%] left-[65%] w-3 h-3 bg-blue-300/35 rounded-full animate-bounce" style={{animationDelay: '3s', animationDuration: '2.7s'}}></div>
        <div className="absolute top-[10%] left-[75%] w-2.5 h-2.5 bg-cyan-300/30 rounded-full animate-bounce" style={{animationDelay: '3.5s', animationDuration: '4.2s'}}></div>
        <div className="absolute top-[45%] left-[85%] w-4 h-4 bg-blue-400/25 rounded-full animate-bounce" style={{animationDelay: '4s', animationDuration: '3.8s'}}></div>
        <div className="absolute top-[20%] left-[95%] w-2 h-2 bg-cyan-400/35 rounded-full animate-bounce" style={{animationDelay: '4.5s', animationDuration: '2.9s'}}></div>
        
        {/* Deuxième vague de bulles */}
        <div className="absolute top-[50%] left-[8%] w-2.5 h-2.5 bg-blue-500/30 rounded-full animate-bounce" style={{animationDelay: '0.2s', animationDuration: '3.3s'}}></div>
        <div className="absolute top-[60%] left-[18%] w-3.5 h-3.5 bg-cyan-500/25 rounded-full animate-bounce" style={{animationDelay: '0.7s', animationDuration: '2.6s'}}></div>
        <div className="absolute top-[70%] left-[28%] w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '1.2s', animationDuration: '4.1s'}}></div>
        <div className="absolute top-[55%] left-[38%] w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '1.7s', animationDuration: '3.6s'}}></div>
        <div className="absolute top-[80%] left-[48%] w-2.5 h-2.5 bg-blue-300/35 rounded-full animate-bounce" style={{animationDelay: '2.2s', animationDuration: '2.4s'}}></div>
        <div className="absolute top-[65%] left-[58%] w-3 h-3 bg-cyan-300/40 rounded-full animate-bounce" style={{animationDelay: '2.7s', animationDuration: '3.9s'}}></div>
        <div className="absolute top-[75%] left-[68%] w-2 h-2 bg-blue-500/30 rounded-full animate-bounce" style={{animationDelay: '3.2s', animationDuration: '2.8s'}}></div>
        <div className="absolute top-[50%] left-[78%] w-3.5 h-3.5 bg-cyan-500/25 rounded-full animate-bounce" style={{animationDelay: '3.7s', animationDuration: '4.3s'}}></div>
        <div className="absolute top-[85%] left-[88%] w-2.5 h-2.5 bg-blue-400/35 rounded-full animate-bounce" style={{animationDelay: '4.2s', animationDuration: '3.1s'}}></div>
        <div className="absolute top-[60%] left-[98%] w-3 h-3 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '4.7s', animationDuration: '2.5s'}}></div>
        
        {/* Troisième vague de bulles - plus petites */}
        <div className="absolute top-[5%] left-[12%] w-1.5 h-1.5 bg-blue-200/40 rounded-full animate-bounce" style={{animationDelay: '0.3s', animationDuration: '3.7s'}}></div>
        <div className="absolute top-[12%] left-[22%] w-1 h-1 bg-cyan-200/50 rounded-full animate-bounce" style={{animationDelay: '0.8s', animationDuration: '2.3s'}}></div>
        <div className="absolute top-[18%] left-[32%] w-1.5 h-1.5 bg-blue-300/35 rounded-full animate-bounce" style={{animationDelay: '1.3s', animationDuration: '4.4s'}}></div>
        <div className="absolute top-[8%] left-[42%] w-1 h-1 bg-cyan-300/45 rounded-full animate-bounce" style={{animationDelay: '1.8s', animationDuration: '3.4s'}}></div>
        <div className="absolute top-[22%] left-[52%] w-1.5 h-1.5 bg-blue-200/40 rounded-full animate-bounce" style={{animationDelay: '2.3s', animationDuration: '2.6s'}}></div>
        <div className="absolute top-[14%] left-[62%] w-1 h-1 bg-cyan-200/50 rounded-full animate-bounce" style={{animationDelay: '2.8s', animationDuration: '3.8s'}}></div>
        <div className="absolute top-[28%] left-[72%] w-1.5 h-1.5 bg-blue-300/35 rounded-full animate-bounce" style={{animationDelay: '3.3s', animationDuration: '2.7s'}}></div>
        <div className="absolute top-[6%] left-[82%] w-1 h-1 bg-cyan-300/45 rounded-full animate-bounce" style={{animationDelay: '3.8s', animationDuration: '4.5s'}}></div>
        <div className="absolute top-[16%] left-[92%] w-1.5 h-1.5 bg-blue-200/40 rounded-full animate-bounce" style={{animationDelay: '4.3s', animationDuration: '3.2s'}}></div>
        
        {/* Quatrième vague - partie basse */}
        <div className="absolute top-[88%] left-[10%] w-1 h-1 bg-blue-100/50 rounded-full animate-bounce" style={{animationDelay: '0.4s', animationDuration: '2.8s'}}></div>
        <div className="absolute top-[92%] left-[20%] w-1.5 h-1.5 bg-cyan-100/40 rounded-full animate-bounce" style={{animationDelay: '0.9s', animationDuration: '3.5s'}}></div>
        <div className="absolute top-[95%] left-[30%] w-1 h-1 bg-blue-200/45 rounded-full animate-bounce" style={{animationDelay: '1.4s', animationDuration: '2.4s'}}></div>
        <div className="absolute top-[90%] left-[40%] w-1.5 h-1.5 bg-cyan-200/35 rounded-full animate-bounce" style={{animationDelay: '1.9s', animationDuration: '4.6s'}}></div>
        <div className="absolute top-[87%] left-[50%] w-1 h-1 bg-blue-100/50 rounded-full animate-bounce" style={{animationDelay: '2.4s', animationDuration: '3.3s'}}></div>
        <div className="absolute top-[93%] left-[60%] w-1.5 h-1.5 bg-cyan-100/40 rounded-full animate-bounce" style={{animationDelay: '2.9s', animationDuration: '2.7s'}}></div>
        <div className="absolute top-[89%] left-[70%] w-1 h-1 bg-blue-200/45 rounded-full animate-bounce" style={{animationDelay: '3.4s', animationDuration: '3.9s'}}></div>
        <div className="absolute top-[96%] left-[80%] w-1.5 h-1.5 bg-cyan-200/35 rounded-full animate-bounce" style={{animationDelay: '3.9s', animationDuration: '2.5s'}}></div>
        <div className="absolute top-[91%] left-[90%] w-1 h-1 bg-blue-100/50 rounded-full animate-bounce" style={{animationDelay: '4.4s', animationDuration: '4.7s'}}></div>
      </div>
      
      {/* Grille décorative */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 flex xl:flex-row flex-col justify-center xl:gap-12 pt-16 md:pt-20 px-6 sm:px-8 md:px-12 lg:px-14 xl:px-16">

        {/* Section informations de contact */}
        <div className="flex flex-col items-start relative xl:w-1/2">
          {/* Badge décoratif */}
          <div className="inline-flex items-center px-3 py-1.5 mb-4 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200/50 rounded-full">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-semibold text-blue-700">Contactez-nous</span>
          </div>

          {/* Titre principal */}
          <div className="relative mb-5">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent leading-tight">
              Parlons de votre
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                projet de nettoyage
              </span>
            </h1>
            {/* Ligne décorative */}
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-lg">
            Nous sommes là pour vous accompagner dans tous vos besoins de nettoyage. 
            Contactez-nous dès maintenant pour un devis personnalisé et gratuit.
          </p>

          {/* Informations de contact stylisées */}
          <div className="flex flex-col gap-4 mb-6">
            {/* Téléphone */}
            <div className="group flex items-center gap-3 p-3 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-500 mb-1">Téléphone</p>
                <a href="tel:+33759221508" className="text-base font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                  +33 7 59 22 15 08
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-center gap-3 p-3 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <path d="m3 7l9 6l9-6"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-500 mb-1">Email</p>
                <a href="mailto:rehoboth.nettoyage20@gmail.com" className="text-base font-bold text-gray-800 hover:text-cyan-600 transition-colors duration-300 break-all">
                  rehoboth.nettoyage20@gmail.com
                </a>
              </div>
            </div>

            {/* Adresse */}
            <div className="group flex items-center gap-3 p-3 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/>
                  <path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-500 mb-1">Adresse</p>
                <p className="text-base font-bold text-gray-800">
                  1 Rue Albert Schweitzer<br/>
                  69600 Oullins-Pierre-Bénite
                </p>
              </div>
            </div>
          </div>

          {/* Carte Google Maps stylisée */}
          <div className="w-full max-w-xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-1.5 overflow-hidden">
                <iframe 
                  title="REHOBOTH NETTOYAGE Localisation" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.1172136714795!2d4.811204276750525!3d45.70868531709217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4e9733ebaf505%3A0x993a21a5c0748a08!2s1%20Rue%20Albert%20Schweitzer%2C%2069600%20Oullins-Pierre-B%C3%A9nite!5e0!3m2!1sfr!2sfr!4v1733155087851!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="240" 
                  style={{border:0, borderRadius: '12px'}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-300 hover:scale-[1.02]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Section formulaire */}
        <div className="xl:w-1/2 flex justify-center xl:justify-end mt-8 xl:mt-0">
          <Envelope />
        </div>

      </div>
    </div>
  )
}

export default Contact