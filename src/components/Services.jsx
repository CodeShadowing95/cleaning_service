
const Services = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[130px] py-24 bg-blue-50">
      <div className="px-4 py-1 flex justify-center items-center text-xs font-semibold text-teal-700 bg-teal-200 rounded-full">Services</div>
      <div className="w-full flex justify-between items-center mt-2 mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold capitalize">Nos Prestations, Pensées pour Vous</h1>
          <p className="text-gray-500 text-sm max-w-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, facilis dolore nobis repellendus ratione mollitia perspiciatis delectus quibusdam consequuntur.</p>
        </div>
        <button
          className="inline-block text-xs py-2 px-6 rounded-l-xl rounded-t-xl bg-[#7747FF] hover:bg-white hover:text-[#7747FF] focus:text-[#7747FF] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200"
        >
          Tous nos services
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8">

        {/* More Cards */}
        <div className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg overflow-hidden">
          <img src="/services/showcase.jpg" alt="general" className="w-full h-full object-cover" />
          <div className="absolute w-full h-full flex flex-col justify-center items-center bg-blue-950/80 overflow-hidden rounded-lg px-8">
            <div className="w-14 h-14 flex justify-center items-center bg-white text-blue-800 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.72 10.43C14.68 8.39 14.5 4.66 14.5 4H13v2H9V4H7c0-1.1.9-2 2-2h7v1c0 .08.04 4.63 1.78 6.37zM17 2v2h1V2zm-2 10c-2-2-2-5-2-5H9v2c0 1 0 1-1 2s-1 2-1 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2z"/></svg>
            </div>
            <p className="text-base font-semibold text-white mb-1">La fenêtre est claire</p>
            <p className="text-[13px] text-white text-pretty font-light text-center mb-10">Nous fournissons des services de nettoyage complets adaptés à vos besoins et à vos budgets.</p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                En savoir plus
              </span>
            </button>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/service.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-2xl text-white font-bold">Nettoyage de fenêtres</p>
                  <div className="w-[20%] h-1 bg-green-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de fenêtres</p>
                <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste a fuga veniam voluptatibus, rem ullam labore ea totam dignissimos explicabo officiis quaerat facilis quasi placeat dolorum sapiente, veritatis quisquam.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/service.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-2xl text-white font-bold text-balance">Nettoyage de tapis et moquettes</p>
                  <div className="w-[20%] h-1 bg-amber-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de vitres</p>
                <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste a fuga veniam voluptatibus, rem ullam labore ea totam dignissimos explicabo officiis quaerat facilis quasi placeat dolorum sapiente, veritatis quisquam.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/service.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-2xl text-white font-bold">Nettoyage de vitres</p>
                  <div className="w-[20%] h-1 bg-red-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de vitres</p>
                <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste a fuga veniam voluptatibus, rem ullam labore ea totam dignissimos explicabo officiis quaerat facilis quasi placeat dolorum sapiente, veritatis quisquam.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/service.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-2xl text-white font-bold">Nettoyage de vitres</p>
                  <div className="w-[20%] h-1 bg-blue-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de vitres</p>
                <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste a fuga veniam voluptatibus, rem ullam labore ea totam dignissimos explicabo officiis quaerat facilis quasi placeat dolorum sapiente, veritatis quisquam.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/service.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-2xl text-white font-bold">Nettoyage de vitres</p>
                  <div className="w-[20%] h-1 bg-cyan-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de vitres</p>
                <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste a fuga veniam voluptatibus, rem ullam labore ea totam dignissimos explicabo officiis quaerat facilis quasi placeat dolorum sapiente, veritatis quisquam.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/service.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-2xl text-white font-bold">Nettoyage de vitres</p>
                  <div className="w-[20%] h-1 bg-cyan-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de vitres</p>
                <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste a fuga veniam voluptatibus, rem ullam labore ea totam dignissimos explicabo officiis quaerat facilis quasi placeat dolorum sapiente, veritatis quisquam.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div id="flip-card" className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg cursor-pointer">
          <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
            {/* Card Front */}
            <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
              <img src="/services/service.jpg" alt="service" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                <div className="w-full h-full flex flex-col justify-end items-start p-4">
                  <p className="text-2xl text-white font-bold">Nettoyage de vitres</p>
                  <div className="w-[20%] h-1 bg-cyan-400 mt-2" />
                </div>
              </div>
            </div>
            {/* Card Back */}
            <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-4 py-10">
                <p className="text-lg font-bold max-w-[250px]">Nettoyage de vitres</p>
                <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iste a fuga veniam voluptatibus, rem ullam labore ea totam dignissimos explicabo officiis quaerat facilis quasi placeat dolorum sapiente, veritatis quisquam.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services