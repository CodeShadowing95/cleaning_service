import { servicesDesc } from "../constants"
import Card from "./sub-components/Card"
import { useState, useEffect } from 'react'

const Services = () => {
  const [animatedElements, setAnimatedElements] = useState({
    badge: false,
    title: false,
    cards: false,
    showcase: false,
    bottom: false
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate')
            if (elementId) {
              setTimeout(() => {
                setAnimatedElements(prev => ({ ...prev, [elementId]: true }))
              }, parseInt(entry.target.getAttribute('data-delay') || '0'))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div id="services" className="relative w-full flex flex-col justify-center items-center px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] pt-32 pb-10 overflow-hidden">
      {/* Arrière-plan animé avec dégradés */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-teal-400/15 to-emerald-400/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Badge avec animation */}
      <div 
        data-animate="badge" 
        data-delay="0"
        className={`relative z-10 px-6 py-3 flex justify-center items-center text-sm font-bold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg transform transition-all duration-700 hover:scale-110 hover:shadow-xl ${animatedElements.badge ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <span className="relative z-10 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          Services Premium
        </span>
      </div>

      {/* Titre avec animation */}
      <div 
        data-animate="title" 
        data-delay="200"
        className="w-full flex justify-between items-center mt-8 mb-12"
      >
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className={`text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 bg-clip-text text-transparent transition-all duration-700 ${animatedElements.title ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Nos Prestations Pensées pour Vous
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-700 ${animatedElements.title ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          <p className={`text-gray-600 text-center max-w-2xl transition-all duration-700 ${animatedElements.title ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: '300ms'}}>
            Découvrez notre gamme complète de services de nettoyage professionnel, adaptés à tous vos besoins
          </p>
        </div>
      </div>

      {/* Section des cartes avec animation en cascade */}
      <div 
        data-animate="cards" 
        data-delay="400"
        className={`relative z-10 flex flex-wrap justify-center items-center gap-6 transition-all duration-700 ${animatedElements.cards ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        {servicesDesc.map((service, index) => (
          <div 
            key={service.id} 
            className="transform transition-all duration-700 hover:scale-105"
            style={{
              transitionDelay: animatedElements.cards ? `${index * 100}ms` : '0ms'
            }}
          >
            <Card {...service} />
          </div>
        ))}
        
        {/* Carte showcase améliorée */}
        <div 
          data-animate="showcase" 
          data-delay="800"
          className={`group relative w-[280px] h-[350px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 ${animatedElements.showcase ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          {/* Image de fond */}
          <div className="absolute inset-0">
            <img 
              src="/services/showcase.jpg" 
              alt="general" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          </div>
          
          {/* Contenu */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Services Complets
            </h3>
            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              Découvrez toutes nos panoplies de services adaptés à vos besoins.
            </p>
            
            {/* Bouton simple et élégant */}
            <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium text-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50">
              <span>Découvrir</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Section inférieure avec contenu et image */}
      <div 
        data-animate="bottom" 
        data-delay="1000"
        className={`relative z-10 w-full flex lg:flex-row flex-col justify-between items-center gap-12 mt-16 transition-all duration-700 ${animatedElements.bottom ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      >
        {/* Contenu textuel */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-8">
          {/* Titre avec dégradé */}
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 bg-clip-text text-transparent leading-tight">
            Notre équipe rendra vos locaux 
            <span className="relative inline-block">
              <span className="relative z-10">propres et soignés</span>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-teal-200 to-cyan-200 -z-10 transform -skew-x-12"></div>
            </span>
          </h2>
          
          {/* Description avec meilleure typographie */}
          <div className="space-y-4">
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Que ce soit pour des bureaux, des espaces communs, ou des zones spécifiques, nous veillons à ce que chaque recoin soit soigné.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Faites confiance à notre équipe dynamique et fiable pour un service de nettoyage irréprochable, adapté à vos besoins et respectueux de votre espace.
            </p>
          </div>
          
          {/* Points clés avec icônes */}
          <div className="flex flex-wrap gap-4 my-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full border border-teal-200">
              <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Service professionnel</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Équipe qualifiée</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-200">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Résultats garantis</span>
            </div>
          </div>
          
          {/* Bouton CTA amélioré */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <a href="#services" className="relative flex items-center gap-3 text-sm font-semibold tracking-wide cursor-pointer transition-all bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-xl border-b-4 border-teal-400 hover:brightness-110 hover:-translate-y-1 hover:border-b-6 active:border-b-2 active:brightness-90 active:translate-y-1 hover:shadow-xl hover:shadow-teal-300/50 shadow-lg shadow-gray-400/20 active:shadow-none transform transition-all duration-200">
              <span>Découvrir tous nos services</span>
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12zm6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        {/* Image avec effets */}
        <div className="lg:w-1/2 w-full relative group">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Arrière-plan décoratif */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Image principale */}
            <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl">
              <img 
                src="/services/cleaning service-pana.svg" 
                alt="cleaning service" 
                className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2" 
              />
            </div>
            
            {/* Éléments décoratifs flottants */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-12 left-8 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services