
const WhyChooseUs = () => {
  return (
    <div className="relative w-full px-[130px] py-32 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Pourquoi nous choisir ?</h1>
      <div className="absolute top-14 left-3/4">
        <img src="/img-wcu.png" alt="aspirateur-rouge" className="w-32 h-32" />
      </div>
      <p className="text-gray-600 text-[14px] leading-6 mt-8 text-center max-w-5xl relative">
        Nous apportons un souffle nouveau au monde du nettoyage. Motivés par l’excellence et l’attention aux détails, nous mettons un point d’honneur à offrir des services modernes, efficaces et respectueux de l’environnement. Avec une équipe dynamique et passionnée, nous répondons aux besoins de nos clients en leur garantissant des espaces impeccables et un service personnalisé.
        <img src="/sparkles.png" alt="sparkles" className="absolute -top-12 -left-10 -rotate-[20deg] w-14 h-14 animate-spin" />
        <img src="/sparkles.png" alt="sparkles" className="absolute -bottom-4 right-0 -rotate-[20deg] w-8 h-8 animate-spin" />
      </p>

      <div className="mt-16 relative grid grid-cols-4 gap-14 w-full">
        
        {/* 1st panel */}
        <div className="flex flex-col gap-3">
          <img src="/service.png" alt="service" className="w-12 h-12" />
          <p className="text-sm font-semibold m-0 p-0 capitalize">Service sur mesure</p>
          <p className="text-[13px] font-medium m-0 p-0">Nous comprenons que chaque espace et chaque client est unique. C’est pourquoi nous adaptons nos services de nettoyage à vos besoins spécifiques, pour un résultat qui vous satisfait pleinement.</p>
          <img src="/wcu1.jpg" alt="desc1" className="rounded-xl mt-6 w-full h-full object-cover" />
        </div>
        
        {/* 2nd panel */}
        <div className="flex flex-col gap-3">
          <img src="/team.jpg" alt="desc1" className="rounded-xl mb-6 w-full h-full object-cover" />
          <img src="/team-building.png" alt="service" className="w-12 h-12" />
          <p className="text-sm font-semibold m-0 p-0 capitalize">Équipe de confiance</p>
          <p className="text-[13px] font-medium m-0 p-0">Notre équipe, formée et passionnée, est engagée à offrir un service fiable et de qualité. Vous pouvez compter sur notre professionnalisme et notre souci du détail à chaque intervention.</p>
        </div>
        
        {/* 3rd panel */}
        <div className="flex flex-col gap-3">
          <img src="/cleaning.png" alt="service" className="w-12 h-12" />
          <p className="text-sm font-semibold m-0 p-0 capitalize">Produits écologiques et parfumés</p>
          <p className="text-[13px] font-medium m-0 p-0">Nous utilisons des produits de nettoyage respectueux de l’environnement, combinant efficacité et parfums agréables pour un espace non seulement propre, mais aussi rafraîchi par des senteurs subtiles et durables.</p>
          <img src="/items.jpg" alt="desc1" className="rounded-xl mt-6 w-full h-full object-cover" />
        </div>
        
        {/* 4th panel */}
        <div className="flex flex-col gap-3">
          <img src="/flexibilite.jpg" alt="desc1" className="rounded-xl mb-6 w-full h-full" />
          <img src="/flexible.png" alt="service" className="w-12 h-12" />
          <p className="text-sm font-semibold m-0 p-0 capitalize">Flexibilité et réactivité</p>
          <p className="text-[13px] font-medium m-0 p-0">Nous savons nous adapter rapidement à vos besoins, vos budgets et à vos contraintes de temps. Disponibles et réactifs, nous faisons de votre satisfaction notre priorité.</p>
        </div>

        <img src="/sparkles.png" alt="sparkles" className="absolute bottom-[30%] -right-14 -rotate-[20deg] w-14 h-14 animate-spin " />
        <img src="/sparkles.png" alt="sparkles" className="absolute bottom-2 -left-16 -rotate-[20deg] w-10 h-10 animate-spin " />
      </div>
    </div>
  )
}

export default WhyChooseUs