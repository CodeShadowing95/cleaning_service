const PanelCard = ({ 
  title, 
  description, 
  icon, 
  image, 
  colorScheme, 
  imagePosition = 'bottom' 
}) => {
  const {
    gradientFrom,
    gradientVia,
    gradientTo,
    shadowColor,
    iconGradientFrom,
    iconGradientTo,
    iconShadowColor,
    titleGradientFrom,
    titleGradientTo,
    titleHoverFrom,
    titleHoverTo,
    borderGradientFrom,
    borderGradientVia,
    borderGradientTo,
    particleColor1,
    particleColor2,
    backgroundGradientFrom,
    backgroundGradientVia,
    backgroundGradientTo
  } = colorScheme;

  const ImageComponent = () => (
    <div className="relative z-10 overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-all duration-500">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );

  const IconComponent = () => (
    <div className={`relative z-10 w-14 h-14 p-3 bg-gradient-to-br ${iconGradientFrom} ${iconGradientTo} rounded-xl shadow-lg group-hover:shadow-xl ${iconShadowColor} transition-all duration-500 group-hover:scale-110`}>
      <img 
        src={icon} 
        alt={title} 
        className="w-full h-full object-contain filter brightness-0 invert" 
      />
    </div>
  );

  const ContentComponent = () => (
    <div className="relative z-10 space-y-4">
      <h3 className={`text-lg sm:text-xl md:text-lg lg:text-xl font-bold bg-gradient-to-r ${titleGradientFrom} ${titleGradientTo} bg-clip-text text-transparent ${titleHoverFrom} ${titleHoverTo} transition-all duration-500`}>
        {title}
      </h3>
      <p className="text-sm sm:text-base md:text-sm lg:text-base text-gray-600 group-hover:text-gray-700 transition-all duration-500 leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <div className={`relative flex flex-col items-center justify-center p-1 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl overflow-hidden group bg-gradient-to-br ${borderGradientFrom} ${borderGradientVia} ${borderGradientTo}`}>
      <div className={`group relative flex flex-col gap-4 p-6 sm:p-7 md:p-5 lg:p-6 bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo} backdrop-blur-sm border border-white/60 rounded-2xl shadow-lg hover:shadow-2xl ${shadowColor} overflow-hidden transition-all duration-700 ease-out hover:scale-[1.02] hover:-translate-y-2 w-full h-full`}>
      {/* Effet de fond animé */}
      <div className={`absolute inset-0 bg-gradient-to-br ${backgroundGradientFrom} ${backgroundGradientVia} ${backgroundGradientTo} opacity-0 group-hover:opacity-100 transition-all duration-700`} />
      
      {/* Bordure lumineuse */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${borderGradientFrom} ${borderGradientVia} ${borderGradientTo} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`} />
      
      {/* Rendu conditionnel basé sur la position de l'image */}
      {imagePosition === 'top' && <ImageComponent />}
      
      <IconComponent />
      
      <ContentComponent />
      
      {imagePosition === 'bottom' && <ImageComponent />}
      
      {/* Particules flottantes */}
      <div className={`absolute top-4 right-4 w-2 h-2 ${particleColor1} rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className={`absolute ${imagePosition === 'top' ? 'bottom-4' : 'bottom-20'} left-4 w-1.5 h-1.5 ${particleColor2} rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700`} style={{animationDelay: '0.5s'}} />
      </div>
    </div>
  );
};

export default PanelCard;