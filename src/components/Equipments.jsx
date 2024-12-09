import { useState } from "react";
import Marquee from "react-fast-marquee";
import { generalCleaningServices } from "../constants";

const Equipments = () => {
  const [expandedItems, setExpandedItems] = useState({});

  // Using [id] as key in expandedItems object to keep track of expanded/collapsed state of each item
  // It allows to access or update dynamically the state of each item
  const showMoreServices = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: true })); // Set the item as expanded
  };
  
  const showLessServices = (id) => {
    setExpandedItems((prev) => ({ ...prev, [id]: false })); // Set the item as collapsed
  };

  return (
    <div id="equipments" className="w-full my-20 bg-white py-10 relative overflow-hidden">
      {/* Banner wallpaper */}
      <div className="absolute w-full h-full top-0 left-0 z-0">
        <Marquee pauseOnHover={false} speed={40} gradient={false}>
            <img src="/equipments/wallpaper3.jpg" alt="wallpaper" />
        </Marquee>
      </div>

      <div className="absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-transparent to-white z-0"></div>
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent to-white z-0"></div>

      <p className="text-xl font-bold px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] mb-8 relative">Découvrez les secrets de notre efficacité</p>
      <div className="px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] py-2 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
        {generalCleaningServices.map((service, index) => (
          <div key={index} className="relative flex flex-col px-4 py-6 border rounded-xl bg-zinc-800 text-white border-none hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_#0d9488] hover:border-none transition-all duration-300">
            <div className="flex flex-col">
              {/* Title */}
              <div className="flex justify-between items-center">
                <p className="text-base font-semibold">{service.label}</p>
                <div className="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-200/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </div>
              {/* Services */}
              <div className="flex flex-col gap-2 mt-6">
                {expandedItems[service.id] ?
                  service.items.map((item) => (
                    <div key={item.id} className="text-sm font-medium text-gray-400 flex items-center gap-2">
                      <span className="flex-shrink-0 text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="vertical-middle flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></span>
                      {item.name}
                    </div>
                  ))
                :
                  service.items.slice(0, 4).map((item) => (
                    <div key={item.id} className="text-sm font-medium text-gray-400 flex items-center gap-2">
                      <span className="flex-shrink-0 text-green-500"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="vertical-middle flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></span>
                      {item.name}
                    </div>
                  ))}
              </div>
              {/* Button */}
              <div className="mt-8">
                <button className="text-xs font-bold text-blue-600 uppercase p-1 rounded-md hover:bg-blue-500/10" onClick={() => expandedItems[service.id] ? showLessServices(service.id) : showMoreServices(service.id)}>{expandedItems[service.id] ? "Voir moins" : "Voir plus"}</button>
              </div>
            </div>

            {/* Absolute icon */}
            <div className="absolute bottom-0 right-0 flex justify-center items-center text-gray-500/20 z-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="vertical-middle w-32 h-32" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M17.278 2.613a1 1 0 0 1 1.89.643l-.038.11l-2.61 6.42l.657.175c1.05.281 1.924 1.134 2.09 2.298c.142 1 .275 2.52.092 4.086c-.182 1.552-.69 3.278-1.947 4.546c-.462.466-1.125.54-1.573.548c-.511.008-1.1-.07-1.705-.19c-1.216-.242-2.674-.69-4.054-1.166l-.414-.145l-.813-.294l-.78-.291l-.734-.283l-.978-.388l-.822-.335l-.817-.345a1 1 0 0 1-.228-1.708c1.377-1.08 2.67-2.322 3.761-3.469l.529-.564l.25-.274l.472-.527l.22-.252l.594-.695l.337-.406a3.1 3.1 0 0 1 2.981-1.087l.199.046l.737.197zM10.5 13.348a44 44 0 0 1-3.479 3.444q.863.349 1.733.68a7.3 7.3 0 0 0 1.426-1.338a7 7 0 0 0 .488-.654l.142-.232a1 1 0 0 1 1.747.973c-.234.42-.527.814-.832 1.184a10 10 0 0 1-.792.856c.462.158.924.308 1.372.446c.373-.257.81-.785 1.206-1.385q.239-.36.452-.74l.204-.384a1 1 0 0 1 1.793.887c-.229.462-.496.909-.78 1.339a11 11 0 0 1-.634.868l.421.082c.362.067.744.114 1.089.043c.766-.815 1.163-1.998 1.316-3.305q.053-.456.068-.904zm2.819-2.35a1.09 1.09 0 0 0-1.116.378l-.243.293l5.398 1.446l-.047-.392l-.024-.182c-.037-.253-.216-.491-.511-.61l-.116-.038zM5.565 7.716l.064.14A3.26 3.26 0 0 0 6.866 9.22l.1.058a.068.068 0 0 1 0 .118l-.1.058A3.26 3.26 0 0 0 5.63 10.82l-.064.139a.071.071 0 0 1-.13 0l-.064-.14a3.26 3.26 0 0 0-1.237-1.364l-.1-.058a.068.068 0 0 1 0-.118l.1-.058A3.26 3.26 0 0 0 5.37 7.855l.064-.139a.071.071 0 0 1 .13 0Zm2.832-4.859c.04-.09.166-.09.206 0l.102.222a5.2 5.2 0 0 0 1.97 2.171l.157.093a.108.108 0 0 1 0 .189l-.158.092a5.2 5.2 0 0 0-1.97 2.172l-.1.222a.113.113 0 0 1-.207 0l-.102-.222a5.2 5.2 0 0 0-1.97-2.172l-.158-.092a.108.108 0 0 1 0-.189l.159-.093a5.2 5.2 0 0 0 1.97-2.171l.1-.222Z"/></g></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Equipments