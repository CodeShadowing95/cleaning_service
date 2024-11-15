import Marquee from "react-fast-marquee";
import { generalCleaningServices } from "../constants";

const Equipments = () => {
  return (
    <div className="w-full my-20 bg-white py-4 relative">
      {/* <p className="text-xl font-bold px-[130px] mb-8">Découvrez les secrets de notre efficacité</p> */}
      <Marquee>
        {/* <div className="flex justify-center items-center w-[300px] h-[200px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-full flex flex-col justify-between p-4 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Title</h2>
              <span className="text-sm bg-white text-gray-800 px-2 py-1 rounded-full">New</span>
            </div>
            <p className="text-sm mt-2">This is an amazing card with stunning visuals and a captivating gradient background. Perfect for showcasing content in style.</p>
            <button className="mt-auto px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">Learn More</button>
          </div>
        </div> */}
        <div className="flex">

          {generalCleaningServices.map((category, index) => (
            <div key={index} className="flex flex-col gap-2 mx-10">
              {/* Catégorie */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ flexShrink: 0, verticalAlign: "middle" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-gray-800">{category.label}</p>
              </div>
              
              {/* Outils */}
              <div className="flex items-center">
                {category.items.map((item, idx) => (
                  <div key={idx} className={category.className}>
                    <div className="w-full h-full flex flex-col justify-center items-center p-4 text-gray-800">
                      <div className="w-12 h-12 bg-white rounded-full p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm mt-2 font-semibold text-center text-white">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
        
      </Marquee>
    </div>
  )
}

export default Equipments