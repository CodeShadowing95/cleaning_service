
// Design compact spécifique à la section WhyChooseUs

const WhyChooseUs = () => {
  const panelsData = [
    {
      title: "Service sur mesure",
      description: "Nous comprenons que chaque espace et chaque client est unique. C'est pourquoi nous adaptons nos services de nettoyage à vos besoins spécifiques, pour un résultat qui vous satisfait pleinement.",
      icon: "/service.png",
      image: "/wcu1.jpg",
      imagePosition: "bottom",
      colorScheme: {
        gradientFrom: "from-white",
        gradientVia: "via-blue-50/30",
        gradientTo: "to-cyan-50/20",
        shadowColor: "hover:shadow-blue-500/20",
        iconGradientFrom: "from-blue-500",
        iconGradientTo: "to-cyan-500",
        iconShadowColor: "group-hover:shadow-blue-500/40",
        titleGradientFrom: "from-gray-800",
        titleGradientTo: "to-blue-900",
        titleHoverFrom: "group-hover:from-blue-600",
        titleHoverTo: "group-hover:to-cyan-600",
        borderGradientFrom: "from-blue-400/20",
        borderGradientVia: "via-cyan-400/20",
        borderGradientTo: "to-blue-500/20",
        particleColor1: "bg-blue-400/60",
        particleColor2: "bg-cyan-400/70",
        backgroundGradientFrom: "from-blue-600/5",
        backgroundGradientVia: "via-cyan-500/5",
        backgroundGradientTo: "to-indigo-600/5"
      }
    },
    {
      title: "Équipe de confiance",
      description: "Notre équipe, formée et passionnée, est engagée à offrir un service fiable et de qualité. Vous pouvez compter sur notre professionnalisme et notre souci du détail à chaque intervention.",
      icon: "/team-building.png",
      image: "/team.jpg",
      imagePosition: "top",
      colorScheme: {
        gradientFrom: "from-white",
        gradientVia: "via-emerald-50/30",
        gradientTo: "to-teal-50/20",
        shadowColor: "hover:shadow-emerald-500/20",
        iconGradientFrom: "from-emerald-500",
        iconGradientTo: "to-teal-500",
        iconShadowColor: "group-hover:shadow-emerald-500/40",
        titleGradientFrom: "from-gray-800",
        titleGradientTo: "to-emerald-900",
        titleHoverFrom: "group-hover:from-emerald-600",
        titleHoverTo: "group-hover:to-teal-600",
        borderGradientFrom: "from-emerald-400/20",
        borderGradientVia: "via-teal-400/20",
        borderGradientTo: "to-green-500/20",
        particleColor1: "bg-emerald-400/60",
        particleColor2: "bg-teal-400/70",
        backgroundGradientFrom: "from-emerald-600/5",
        backgroundGradientVia: "via-teal-500/5",
        backgroundGradientTo: "to-green-600/5"
      }
    },
    {
      title: "Produits écologiques et parfumés",
      description: "Nous utilisons des produits de nettoyage respectueux de l'environnement, combinant efficacité et parfums agréables pour un espace non seulement propre, mais aussi rafraîchi par des senteurs subtiles et durables.",
      icon: "/cleaning.png",
      image: "/items.jpg",
      imagePosition: "bottom",
      colorScheme: {
        gradientFrom: "from-white",
        gradientVia: "via-green-50/30",
        gradientTo: "to-lime-50/20",
        shadowColor: "hover:shadow-green-500/20",
        iconGradientFrom: "from-green-500",
        iconGradientTo: "to-lime-500",
        iconShadowColor: "group-hover:shadow-green-500/40",
        titleGradientFrom: "from-gray-800",
        titleGradientTo: "to-green-900",
        titleHoverFrom: "group-hover:from-green-600",
        titleHoverTo: "group-hover:to-lime-600",
        borderGradientFrom: "from-green-400/20",
        borderGradientVia: "via-lime-400/20",
        borderGradientTo: "to-emerald-500/20",
        particleColor1: "bg-green-400/60",
        particleColor2: "bg-lime-400/70",
        backgroundGradientFrom: "from-green-600/5",
        backgroundGradientVia: "via-lime-500/5",
        backgroundGradientTo: "to-emerald-600/5"
      }
    },
    {
      title: "Flexibilité et réactivité",
      description: "Nous savons nous adapter rapidement à vos besoins, vos budgets et à vos contraintes de temps. Disponibles et réactifs, nous faisons de votre satisfaction notre priorité.",
      icon: "/flexible.png",
      image: "/flexibilite.jpg",
      imagePosition: "top",
      colorScheme: {
        gradientFrom: "from-white",
        gradientVia: "via-purple-50/30",
        gradientTo: "to-indigo-50/20",
        shadowColor: "hover:shadow-purple-500/20",
        iconGradientFrom: "from-purple-500",
        iconGradientTo: "to-indigo-500",
        iconShadowColor: "group-hover:shadow-purple-500/40",
        titleGradientFrom: "from-gray-800",
        titleGradientTo: "to-purple-900",
        titleHoverFrom: "group-hover:from-purple-600",
        titleHoverTo: "group-hover:to-indigo-600",
        borderGradientFrom: "from-purple-400/20",
        borderGradientVia: "via-indigo-400/20",
        borderGradientTo: "to-violet-500/20",
        particleColor1: "bg-purple-400/60",
        particleColor2: "bg-indigo-400/70",
        backgroundGradientFrom: "from-purple-600/5",
        backgroundGradientVia: "via-indigo-500/5",
        backgroundGradientTo: "to-violet-600/5"
      }
    }
  ];

  return (
    <div id="why-choose-us" className="relative w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-28 pt-16 sm:pt-20 md:pt-24 flex flex-col justify-center items-center">
      <div className="relative w-full flex flex-col justify-center items-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 tracking-tight leading-tight max-w-4xl">
          <span className="block sm:inline">Notre</span>
          <span className="block sm:inline text-blue-600 ml-0 sm:ml-3 sm:mr-3">Engagement</span>
          <span className="block sm:inline">envers vous</span>
        </h1>
        <div className="absolute sm:block hidden bottom-0 lg:right-10 right-0">
          <img src="/img-wcu.png" alt="aspirateur-rouge" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32" loading="lazy" decoding="async" />
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
        <p className="text-gray-500 text-base md:text-lg leading-relaxed md:leading-relaxed text-center font-medium">
          Motivés par l'excellence et l'attention aux détails, nous mettons un point d'honneur à offrir des services modernes, efficaces et respectueux de l'environnement. 
          <span className="block mt-3 sm:inline sm:mt-0 sm:ml-1">Avec une équipe dynamique et passionnée, nous répondons aux besoins de nos clients en leur garantissant des espaces impeccables et un service personnalisé.</span>
        </p>
      </div>

      <div className="mt-8 md:mt-12 pb-8 relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {panelsData.map((panel, index) => (
          <div
            key={index}
            className={`group relative flex flex-col justify-between gap-4 p-4 bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
          >
            <div>
              {/* En-tête compact avec icône et titre */}
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 p-2 bg-gradient-to-br ${panel.colorScheme.iconGradientFrom} ${panel.colorScheme.iconGradientTo} rounded-xl shadow-md`}> 
                  <img 
                    src={panel.icon} 
                    alt={panel.title} 
                    className="w-full h-full object-contain filter brightness-0 invert" 
                    loading="lazy" 
                    decoding="async" 
                  />
                </div>
                <h3 className={`text-base md:text-lg font-semibold bg-gradient-to-r ${panel.colorScheme.titleGradientFrom} ${panel.colorScheme.titleGradientTo} bg-clip-text text-transparent`}>
                  {panel.title}
                </h3>
              </div>

              {/* Description compacte et lisible */}
              <p className="text-sm text-gray-600 leading-snug mb-3">
                {panel.description}
              </p>
            </div>

            {/* Image compacte en pied de card */}
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={panel.image} 
                alt={panel.title} 
                className="w-full h-56 object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                loading="lazy" 
                decoding="async" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}

        {/* Éléments décoratifs */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>
    </div>
  )
}

export default WhyChooseUs