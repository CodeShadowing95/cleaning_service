
const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 mb-4 px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] py-8 bg-blue-50">
      <div className="flex items-center p-1 border gap-2 border-blue-600 rounded-xl bg-white">
        <div className="flex justify-center items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl transition-all cursor-pointer capitalize">
          comment ça marche ?
        </div>
        <div className="flex justify-center items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-100 bg-white rounded-xl transition-all cursor-pointer">
          Démo
        </div>
      </div>
      
      <div className="w-full flex flex-col justify-center items-center mt-8">
        <h1 className="text-3xl font-bold capitalize max-w-lg text-center">Notre approche méthodique, simple et efficace</h1>
        <div className="w-full flex flex-col justify-center items-center lg:gap-6 gap-12 mt-10 relative">

          {/* Vertical line */}
          <div className="lg:block hidden absolute top-0 left-1/2 h-full transform -translate-x-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-2 border-gray-400 border-dashed z-0" />
          
          <div className="w-full flex md:flex-row flex-col justify-center items-center lg:gap-16 gap-2 z-10">
            <div className="flex flex-col justify-center gap-2 w-[400px] h-[200px] px-4 py-6 rounded-lg bg-white">
              <p className="text-lg font-semibold">Contactez notre service</p>
              <p className="text-[13px] text-gray-600">Facile et rapide, contactez-nous dès maintenant pour une estimation personnalisée. Votre satisfaction est notre priorité, et nous sommes prêts à vous répondre en un instant.</p>
            </div>
            <div className="lg:block hidden p-2 h-fit bg-blue-50 rounded-full">
              <p className="text-2xl font-extrabold text-teal-700">01</p>
            </div>
            <div className="flex justify-center items-center w-[400px] h-[200px] rounded-lg overflow-hidden">
              <img src="/how-it-works/01.jpg" alt="general" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="w-full flex md:flex-row flex-col justify-center items-center lg:gap-16 gap-2 z-10">
            <div className="flex justify-center items-center w-[400px] h-[200px] rounded-lg overflow-hidden">
              <img src="/how-it-works/02.jpg" alt="general" className="w-full h-full object-cover" />
            </div>
            <div className="lg:block hidden p-2 h-fit bg-blue-50 rounded-full">
              <p className="text-2xl font-extrabold text-teal-700">02</p>
            </div>
            <div className="flex flex-col justify-center gap-2 w-[400px] h-[200px] px-4 py-6 rounded-lg bg-white">
              <p className="text-lg font-semibold">L{'\''}équipe arrive</p>
              <p className="text-[13px] text-gray-600">Une fois votre demande validée, notre équipe se rend rapidement sur place. Ponctuels, professionnels et équipés, nous sommes prêts à répondre à toutes vos attentes. Chaque intervention est soigneusement planifiée pour un service irréprochable.</p>
            </div>
          </div>
          
          <div className="w-full flex md:flex-row flex-col justify-center items-center lg:gap-16 gap-2 z-10">
            <div className="flex flex-col justify-center gap-2 w-[400px] h-[200px] px-4 py-6 rounded-lg bg-white">
              <p className="text-lg font-semibold">Processus de nettoyage</p>
              <p className="text-[13px] text-gray-600">Un nettoyage minutieux et organisé pour chaque espace. Nous utilisons des méthodes modernes et des produits adaptés pour un résultat optimal. Notre priorité est de combiner efficacité et respect de vos locaux. Chaque détail compte pour nous !</p>
            </div>
            <div className="lg:block hidden p-2 h-fit bg-blue-50 rounded-full">
              <p className="text-2xl font-extrabold text-teal-700">03</p>
            </div>
            <div className="flex justify-center items-center w-[400px] h-[200px] rounded-lg overflow-hidden">
              <img src="/how-it-works/03.jpg" alt="general" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <div className="w-full flex md:flex-row flex-col justify-center items-center lg:gap-16 gap-2 z-10">
            <div className="flex justify-center items-center w-[400px] h-[200px] rounded-lg overflow-hidden">
              <img src="/how-it-works/04.jpg" alt="general" className="w-full h-full object-cover" />
            </div>
            <div className="lg:block hidden p-2 h-fit bg-blue-50 rounded-full">
              <p className="text-2xl font-extrabold text-teal-700">04</p>
            </div>
            <div className="flex flex-col justify-center gap-2 w-[400px] h-[200px] px-4 py-6 rounded-lg bg-white">
              <p className="text-lg font-semibold">Résultat final</p>
              <p className="text-[13px] text-gray-600">Découvrez des espaces transformés par notre savoir-faire. Propreté, fraîcheur et brillance : nous redonnons vie à vos locaux. Avec nous, chaque coin respire la perfection et votre satisfaction est toujours au rendez-vous.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="relative w-full rounded-xl border flex justify-between mt-20 px-8 py-12 text-white bg-gradient-to-b from-teal-800 to-black">
        <div className="flex flex-col justify-center gap-8 z-10">
          <div className="border-l-4 border-white pl-4">
            <h1 className="text-xl font-bold md:max-w-[700px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[700px]">Découvrez la Différence qu{'\''}un espace propre peut faire - Obtenez un Devis Gratuit maintenant</h1>
          </div>
          <div className="pl-4">
            <p className="text-sm md:max-w-[700px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[700px]">Ne laissez plus la saleté et le désordre ternir votre environnement ! Nous sommes là pour redonner vie à vos locaux et leur offrir l’éclat qu’ils méritent. Laissez-nous vous montrer comment un espace parfaitement propre peut transformer votre quotidien.</p>
          </div>
          <div className="pl-4">
            <button className="flex justify-center items-center gap-2 bg-white text-teal-900 px-4 py-2 font-semibold rounded-lg hover:bg-teal-900 hover:text-white hover:shadow-md hover:shadow-white transition-colors duration-300">
              Je me lance !
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
            </button>
          </div>
        </div>
        <img src="/how-it-works/extra2.png" alt="extra" className="lg:block hidden absolute bottom-0 right-0 h-[400px] z-10" />
        <div className="absolute inset-0 text-white/10 -z-1 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute -top-32 left-1/2 -rotate-45 w-72 h-72" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1"/></svg>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks