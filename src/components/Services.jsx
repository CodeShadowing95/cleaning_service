
const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[130px] py-10 bg-gradient-to-b from-transparent to-blue-900/50">
      <div className="px-4 py-1 flex justify-center items-center text-xs font-semibold text-teal-700 bg-teal-200 rounded-full">Services</div>
      <div className="w-full flex justify-between items-center mt-4 mb-10">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl font-bold capitalize">Nos Prestations, Pensées pour Vous</h1>
          <p className="text-gray-700 text-sm max-w-2xl text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, facilis dolore nobis repellendus ratione mollitia perspiciatis delectus quibusdam consequuntur.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-8">

        {/* More Cards */}
        <div className="flex justify-center items-center relative w-[290px] h-[350px] rounded-lg overflow-hidden">
          <img src="/services/showcase.jpg" alt="general" className="w-full h-full object-cover" />
          <div className="absolute w-full h-full flex flex-col justify-center items-center bg-blue-950/80 overflow-hidden rounded-lg px-8">
            <div className="w-14 h-14 flex justify-center items-center bg-white text-blue-800 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.72 10.43C14.68 8.39 14.5 4.66 14.5 4H13v2H9V4H7c0-1.1.9-2 2-2h7v1c0 .08.04 4.63 1.78 6.37zM17 2v2h1V2zm-2 10c-2-2-2-5-2-5H9v2c0 1 0 1-1 2s-1 2-1 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2z"/></svg>
            </div>
            <p className="text-base font-semibold text-white mb-1">La fenêtre est claire</p>
            <p className="text-[13px] text-white text-pretty font-light text-center mb-10">Découvrez toutes nos panoplies de services adaptés à vos besoins et à vos budgets.</p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                En savoir plus
              </span>
            </button>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[290px] h-[350px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/card1.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-xl text-left text-white font-bold">Nettoyage de vos bureaux</p>
                  <div className="w-[20%] h-1 bg-purple-500 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de vos bureaux</p>
                <p className="text-sm text-gray-600 text-pretty">Nos équipes assurent un nettoyage complet et rigoureux de vos bureaux, pour offrir à vos collaborateurs un espace de travail sain et agréable propice à la productivité et au bien-être.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[290px] h-[350px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/card2.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-xl text-left text-white font-bold">Nettoyage de sol et entretien des murs</p>
                  <div className="w-[20%] h-1 bg-green-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de sol et entretien des murs</p>
                <p className="text-sm text-gray-600 text-pretty">Qu’il s’agisse de moquettes, carrelages ou parquets, nous veillons à ce que vos surfaces soient impeccables, sans taches ni traces, tout en préservant leur état d’origine pour une durabilité optimale.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[290px] h-[350px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/card3.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-xl text-left text-white font-bold">Ménage et époussetage</p>
                  <div className="w-[20%] h-1 bg-amber-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Ménage et époussetage</p>
                <p className="text-sm text-gray-500 text-pretty">Nous assurons un dépoussiérage minutieux et un ménage en profondeur de chaque recoin, en apportant une attention particulière aux détails et aux zones souvent négligées, afin de maintenir un espace frais et accueillant.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[290px] h-[350px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/card4.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-xl text-left text-white font-bold">Vidage de poubelles</p>
                  <div className="w-[20%] h-1 bg-blue-500 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Vidage de poubelles</p>
                <p className="text-sm text-gray-500 text-pretty">Nous nous occupons de la collecte et du remplacement des sacs poubelles dans vos espaces de travail, garantissant des bureaux ordonnés et sans encombrement pour plus de confort au quotidien.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[290px] h-[350px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/service.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-xl text-left text-white font-bold">Lavage de vitres et surfaces vitrées</p>
                  <div className="w-[20%] h-1 bg-red-500 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Lavage de vitres et surfaces vitrées</p>
                <p className="text-sm text-gray-500 text-pretty">Nous vous assurons des surfaces vitrées éclatantes, sans traces ni résidus. Des techniques et produits adaptés pour chaque type de surface, pour laisser entrer la lumière et rendre vos espaces plus lumineux et accueillants.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[290px] h-[350px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">

            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/card5.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-xl text-left text-white font-bold">Nettoyage de fin de chantier</p>
                  <div className="w-[20%] h-1 bg-orange-400 mt-2" />
                </div>
              </div>
            </div>

            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de fin de chantier</p>
                <p className="text-sm text-gray-500 text-pretty">Nous intervenons après les travaux pour une remise en état complète de vos espaces. Dépoussiérage, élimination des résidus et des traces de chantier : nos équipes préparent votre environnement pour qu’il soit propre, sécurisé et prêt à être utilisé.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[290px] h-[350px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">

            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/card6.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-xl text-left text-white font-bold">Fourniture de matériels sanitaires</p>
                  <div className="w-[20%] h-1 bg-cyan-400 mt-2" />
                </div>
              </div>
            </div>

            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Fourniture de matériels sanitaires</p>
                <p className="text-sm text-gray-500 text-pretty">Nous assurons l’approvisionnement régulier de matériels sanitaires essentiels : papier hygiénique, savon, serviettes et autres produits indispensables. Un service pensé pour garantir le bien-être de vos équipes et visiteurs.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center mt-10">
          <div className="w-1/2 flex flex-col justify-center items-start gap-8 p-8">
            <p className="text-3xl text-gray-900 font-bold capitalize">Notre équipe rendra vos locaux propres et soignés</p>
            <p className="text-sm text-gray-800 font-medium text-pretty">Que ce soit pour des bureaux, des espaces communs, ou des zones spécifiques, nous veillons à ce que chaque recoin soit soigné, chaque surface éclatante et chaque environnement sain. Faites confiance à notre équipe dynamique et fiable pour un service de nettoyage irréprochable, adapté à vos besoins et respectueux de votre espace.</p>
            <button className="flex items-center gap-2 text-sm font-medium tracking-wide cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-teal-400
            border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-teal-300 shadow-teal-300 active:shadow-none">
              Tous nos services
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12zm6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12z"/></svg>
            </button>
          </div>
          
          <img src="/services/cleaning service-pana.svg" alt="cleaning service" className="w-1/2 object-cover" />
        </div>
      </div>

    </div>
  )
}

export default Services