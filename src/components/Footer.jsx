
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-slate-950 via-zinc-950 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-600/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-emerald-400/12 via-cyan-500/8 to-blue-600/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-purple-500/8 via-pink-500/6 to-rose-500/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-40 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-emerald-400/50 rounded-full animate-bounce" style={{ animationDelay: '3.5s' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] pt-24 pb-12 text-white">
        {/* Main content wrapper with glass morphism */}
        <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
          <div className="w-full flex md:flex-row flex-col justify-between gap-12">
            <div className="flex flex-col max-w-2xl">
              {/* Enhanced Logo section */}
              <div className="group relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative flex flex-col justify-center gap-4 p-6 bg-gradient-to-r from-white/10 via-cyan-500/5 to-blue-500/5 rounded-2xl border border-white/20 backdrop-blur-sm">
                  <div className="relative">
                    <img src="/logo.png" alt="logo-footer" className="h-20 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-1">
                      REHOBOTH NETTOYAGE
                    </h3>
                    <p className="text-sm max-w-md text-gray-300 font-semibold">
                      Améliorez votre activité grâce à nos services de nettoyage professionnels. Ne tardez pas, contactez-nous dès aujourd'hui pour obtenir un devis gratuitement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="relative group mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative p-8 bg-gradient-to-br from-white/8 via-cyan-500/5 to-blue-500/8 rounded-2xl border border-white/20 backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30 flex-shrink-0">
                      <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Notre Mission</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Nous fournissons des services de haute qualité, adaptés à vos besoins. Offrez-vous un environnement éclatant sans lever le petit doigt. Notre expertise et notre engagement garantissent des résultats exceptionnels pour tous vos projets de nettoyage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Media */}
              <div className="relative">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                      Suivez-nous
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <div className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 flex justify-center items-center bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-blue-400/30 border border-cyan-400/40 rounded-2xl hover:from-blue-500 hover:to-cyan-400 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-cyan-500/30">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600/30 to-blue-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 flex justify-center items-center bg-gradient-to-br from-cyan-600/30 via-blue-500/20 to-cyan-400/30 border border-blue-400/40 rounded-2xl hover:from-cyan-500 hover:to-blue-400 cursor-pointer transition-all duration-500 hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:shadow-blue-500/30">
                      <Twitter className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 flex justify-center items-center bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-purple-400/30 border border-purple-400/40 rounded-2xl hover:from-purple-500 hover:to-pink-400 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-purple-500/30">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/30 to-blue-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative w-14 h-14 flex justify-center items-center bg-gradient-to-br from-indigo-600/30 via-blue-500/20 to-indigo-400/30 border border-indigo-400/40 rounded-2xl hover:from-indigo-500 hover:to-blue-400 cursor-pointer transition-all duration-500 hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:shadow-indigo-500/30">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 ml-0 md:ml-8 mt-8 lg:mt-0">
              {/* Enhanced Entreprise Section */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative p-6 bg-gradient-to-br from-white/8 via-cyan-500/5 to-blue-500/8 rounded-2xl border border-white/20 backdrop-blur-md h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">
                      <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-blue-300 transition-all duration-500">
                      Entreprise
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="group/item">
                      <a href="/" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Accueil
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#about-us" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Qui sommes-nous ?
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#why-choose-us" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Notre engagement
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#services" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Prestations
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#equipments" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Équipements
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#demonstration" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Démonstration
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#contact" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Enhanced Services Section */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/10 via-cyan-500/10 to-blue-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative p-6 bg-gradient-to-br from-white/8 via-emerald-500/5 to-cyan-500/8 rounded-2xl border border-white/20 backdrop-blur-md h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-emerald-400/30">
                      <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent group-hover:from-emerald-200 group-hover:to-cyan-300 transition-all duration-500">
                      Nos Services
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="group/item">
                      <a href="#services" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Nettoyage de bureaux
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#services" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Nettoyage après travaux
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#services" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Entretien de vitreries
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#services" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Désinfection complète
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#services" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Entretien spécialisé
                      </a>
                    </li>
                    <li className="group/item">
                      <a href="#services" className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 group-hover/item:translate-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                        Fournitures matériels
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Enhanced Contact Section */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/10 via-pink-500/10 to-rose-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative p-6 bg-gradient-to-br from-white/8 via-purple-500/5 to-pink-500/8 rounded-2xl border border-white/20 backdrop-blur-md h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-400/30">
                      <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-pink-300 transition-all duration-500">
                      Contact
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div className="group/contact flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/contact:text-white transition-colors">+33 7 59 22 15 08</span>
                    </div>
                    <div className="group/contact flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <path d="m3 7l9 6l9-6" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/contact:text-white transition-colors text-xs">rehoboth.nettoyage20@gmail.com</span>
                    </div>
                    <div className="group/contact flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0" />
                          <path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0" />
                        </svg>
                      </div>
                      <span className="text-gray-300 group-hover/contact:text-white transition-colors text-xs">
                    1 Rue Albert Schweitzer, 69600 Oullins
                  </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Copyright Section */}
      <div className="relative mt-16">
        {/* Decorative separator */}
        <div className="relative flex items-center justify-center mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex items-center gap-4 px-8 bg-gradient-to-r from-slate-950 via-zinc-950 to-black">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-orange-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div className="relative p-8 bg-gradient-to-br from-white/5 via-cyan-500/3 to-blue-500/5 rounded-2xl border border-white/10 backdrop-blur-md">
          <div className="flex md:flex-row flex-col justify-between items-center gap-6">
            {/* Enhanced Copyright text */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-400/30">
                <svg className="w-4 h-4 text-cyan-300 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <p className="text-lg font-semibold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                © {new Date().getFullYear()} Rehoboth Nettoyage. Tous droits réservés.
              </p>
            </div>

            {/* Enhanced Legal links */}
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/" className="group relative px-4 py-2 bg-gradient-to-r from-white/10 via-cyan-500/5 to-blue-500/10 rounded-xl border border-white/20 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Mentions Légales</span>
              </a>
              <a href="/" className="group relative px-4 py-2 bg-gradient-to-r from-white/10 via-emerald-500/5 to-cyan-500/10 rounded-xl border border-white/20 hover:from-emerald-500/20 hover:to-cyan-500/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Politique de Confidentialité</span>
              </a>
              <a href="/" className="group relative px-4 py-2 bg-gradient-to-r from-white/10 via-purple-500/5 to-pink-500/10 rounded-xl border border-white/20 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Cookies</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;