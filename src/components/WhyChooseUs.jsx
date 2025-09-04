
const WhyChooseUs = () => {
  return (
    <div id="why-choose-us" className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-20 sm:pt-24 md:pt-32 flex flex-col justify-center items-center">
      <div className="relative w-full flex flex-col justify-center items-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 tracking-tight leading-tight max-w-4xl">
          <span className="block sm:inline">Pourquoi nous</span>
          <span className="block sm:inline text-blue-600 ml-0 sm:ml-3">choisir ?</span>
        </h1>
        <div className="absolute sm:block hidden bottom-0 lg:right-10 right-0">
          <img src="/img-wcu.png" alt="aspirateur-rouge" className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32" />
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20">
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-relaxed md:leading-loose text-center font-medium">
          Motivés par l'excellence et l'attention aux détails, nous mettons un point d'honneur à offrir des services modernes, efficaces et respectueux de l'environnement. 
          <span className="block mt-3 sm:inline sm:mt-0 sm:ml-1">Avec une équipe dynamique et passionnée, nous répondons aux besoins de nos clients en leur garantissant des espaces impeccables et un service personnalisé.</span>
        </p>
      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 relative grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        
        {/* 1st panel */}
        <div className="flex flex-col gap-3 p-4 sm:p-5 md:p-3 border border-gray-200 rounded-xl relative overflow-hidden hover:scale-105 transition-all duration-500 group">
          <div className="absolute -top-9 -left-6 w-[100px] h-[100px] bg-gradient-to-t from-gray-900 to-gray-600 rounded-full -z-10 group-hover:scale-[1500%] transition-all duration-500" />
          <img src="/service.png" alt="service" className="w-12 h-12" />
          <p className="text-lg sm:text-xl md:text-sm lg:text-base font-semibold m-0 p-0 capitalize group-hover:text-gray-200 transition-all duration-500">Service sur mesure</p>
          <p className="text-base sm:text-lg md:text-[13px] lg:text-sm font-normal m-0 p-0 group-hover:text-gray-200 transition-all duration-500 leading-relaxed">Nous comprenons que chaque espace et chaque client est unique. C'est pourquoi nous adaptons nos services de nettoyage à vos besoins spécifiques, pour un résultat qui vous satisfait pleinement.</p>
          <img src="/wcu1.jpg" alt="desc1" className="rounded-xl mt-6 w-full h-full object-cover" />
        </div>
        
        {/* 2nd panel */}
        <div className="flex flex-col gap-3 p-4 sm:p-5 md:p-3 border border-gray-200 rounded-xl relative overflow-hidden hover:scale-105 transition-all duration-500 group">
          <div className="absolute bottom-52 -left-14 w-[90px] h-[90px] bg-gradient-to-t from-gray-900 to-gray-600 rounded-full -z-10 group-hover:scale-[1500%] transition-all duration-500" />
          <img src="/team.jpg" alt="desc1" className="rounded-xl mb-6 w-full h-full object-cover" />
          <img src="/team-building.png" alt="service" className="w-12 h-12" />
          <p className="text-lg sm:text-xl md:text-sm lg:text-base font-semibold m-0 p-0 capitalize group-hover:text-gray-200 transition-all duration-500">Équipe de confiance</p>
          <p className="text-base sm:text-lg md:text-[13px] lg:text-sm font-normal m-0 p-0 group-hover:text-gray-200 transition-all duration-500 leading-relaxed">Notre équipe, formée et passionnée, est engagée à offrir un service fiable et de qualité. Vous pouvez compter sur notre professionnalisme et notre souci du détail à chaque intervention.</p>
        </div>
        
        {/* 3rd panel */}
        <div className="flex flex-col gap-3 p-4 sm:p-5 md:p-3 border border-gray-200 rounded-xl relative overflow-hidden hover:scale-105 transition-all duration-500 group">
          <div className="absolute -top-9 -left-6 w-[100px] h-[100px] bg-gradient-to-t from-gray-900 to-gray-600 rounded-full -z-10 group-hover:scale-[1500%] transition-all duration-500" />
          <img src="/cleaning.png" alt="service" className="w-12 h-12" />
          <p className="text-lg sm:text-xl md:text-sm lg:text-base font-semibold m-0 p-0 capitalize group-hover:text-gray-200 transition-all duration-500">Produits écologiques et parfumés</p>
          <p className="text-base sm:text-lg md:text-[13px] lg:text-sm font-normal m-0 p-0 group-hover:text-gray-200 transition-all duration-500 leading-relaxed">Nous utilisons des produits de nettoyage respectueux de l'environnement, combinant efficacité et parfums agréables pour un espace non seulement propre, mais aussi rafraîchi par des senteurs subtiles et durables.</p>
          <img src="/items.jpg" alt="desc1" className="rounded-xl mt-6 w-full h-full object-cover" />
        </div>
        
        {/* 4th panel */}
        <div className="flex flex-col gap-3 p-4 sm:p-5 md:p-3 border border-gray-200 rounded-xl relative overflow-hidden hover:scale-105 transition-all duration-500 group">
          <div className="absolute bottom-52 -left-14 w-[90px] h-[90px] bg-gradient-to-t from-gray-900 to-gray-600 rounded-full -z-10 group-hover:scale-[1500%] transition-all duration-500" />
          <img src="/flexibilite.jpg" alt="desc1" className="rounded-xl mb-6 w-full h-full object-cover" />
          <img src="/flexible.png" alt="service" className="w-12 h-12" />
          <p className="text-lg sm:text-xl md:text-sm lg:text-base font-semibold m-0 p-0 capitalize group-hover:text-gray-200 transition-all duration-500">Flexibilité et réactivité</p>
          <p className="text-base sm:text-lg md:text-[13px] lg:text-sm font-normal m-0 p-0 group-hover:text-gray-200 transition-all duration-500 leading-relaxed">Nous savons nous adapter rapidement à vos besoins, vos budgets et à vos contraintes de temps. Disponibles et réactifs, nous faisons de votre satisfaction notre priorité.</p>
        </div>

        {/* <img src="/sparkles.png" alt="sparkles" className="absolute bottom-[30%] -right-14 -rotate-[20deg] w-14 h-14 animate-spin " />
        <img src="/sparkles.png" alt="sparkles" className="absolute bottom-2 -left-16 -rotate-[20deg] w-10 h-10 animate-spin " /> */}
      </div>
    </div>
  )
}

export default WhyChooseUs