import { servicesDesc } from "../constants"
import Card from "./sub-components/Card"

const Services = () => {
  return (
    <div id="services" className="w-full flex flex-col justify-center items-center px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] pt-32 pb-10 bg-gradient-to-b from-transparent to-blue-900/50">
      <div className="px-4 py-1 flex justify-center items-center text-xs font-semibold text-teal-700 bg-teal-200 rounded-full">Services</div>
      <div className="w-full flex justify-between items-center mt-4 mb-10">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl font-bold text-center capitalize">Nos Prestations, Pensées pour Vous</h1>
          <p className="text-gray-700 text-base lg:text-sm max-w-2xl text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, facilis dolore nobis repellendus ratione mollitia perspiciatis delectus quibusdam consequuntur.</p>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center px-20 gap-8"> */}
      <div className="flex flex-wrap justify-center items-center gap-4">
        {servicesDesc.map((service) => (
          /* 
            We are mapping over the servicesDesc array and rendering a Card component for each item in the array.
            We are using the key prop to assign a unique key to each Card component.
            We are spreading the service object as props to the Card component, so that it can access the properties of the service object.
            The Card component is a presentational component that takes in the service object as a prop and renders a card with the service details.
          */
          <Card key={service.id} {...service} />
        ))}
        
        <div className="flex justify-center items-center relative max-sm:w-[300px] max-sm:h-[400px] w-[250px] h-[314px] rounded-lg overflow-hidden">
          <img src="/services/showcase.jpg" alt="general" className="w-full h-full object-cover" />
          <div className="absolute w-full h-full flex flex-col justify-center items-center bg-blue-950/80 overflow-hidden rounded-lg px-8">
            <p className="text-base font-semibold text-white mb-4">La fenêtre est claire</p>
            <p className="text-[13px] text-white text-pretty font-light text-center mb-10">Découvrez toutes nos panoplies de services adaptés à vos besoins et à vos budgets.</p>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
                En savoir plus
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col justify-between items-center gap-4 mt-10">
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-8">
          <p className="text-3xl text-gray-900 font-bold capitalize">Notre équipe rendra vos locaux propres et soignés</p>
          <p className="text-base text-gray-800 font-medium text-pretty">Que ce soit pour des bureaux, des espaces communs, ou des zones spécifiques, nous veillons à ce que chaque recoin soit soigné, chaque surface éclatante et chaque environnement sain. Faites confiance à notre équipe dynamique et fiable pour un service de nettoyage irréprochable, adapté à vos besoins et respectueux de votre espace.</p>
          <button className="flex items-center gap-2 text-sm font-medium tracking-wide cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-teal-400
          border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-teal-300 shadow-teal-300 active:shadow-none">
            Tous nos services
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12zm6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12z"/></svg>
          </button>
        </div>
        
        <img src="/services/cleaning service-pana.svg" alt="cleaning service" className="lg:w-1/2 w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default Services