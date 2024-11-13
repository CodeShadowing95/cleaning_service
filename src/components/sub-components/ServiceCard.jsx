/* eslint-disable no-unused-vars */

const ServiceCard = ({ title, backtitle, description, image, hbarColor, link }) => {
  return (
    <div id="flip-card" className="flex justify-center items-center relative w-[320px] h-[400px] rounded-lg cursor-pointer">
      <div id="flip-card-inner" className="relative w-full h-full text-center transition-transform duration-500 shadow-md rounded-lg">
        {/* Card Front */}
        <div id="flip-card-front" className="absolute w-full h-full overflow-hidden rounded-lg">
          <img src={image} alt="service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80">
            <div className="w-full h-full flex flex-col justify-end items-start p-4">
              <p className="text-xl text-left text-white font-bold">{title}</p>
              <div className={`w-[20%] h-1 ${hbarColor} mt-2`} />
            </div>
          </div>
        </div>
        {/* Card Back */}
        <div id="flip-card-back" className="absolute w-full h-full rounded-lg overflow-hidden">
          <div className="w-full h-full flex flex-col items-center gap-4 bg-white px-8 py-10">
            <p className="text-lg font-bold max-w-[250px]">{backtitle}</p>
            <p className="text-sm text-gray-500 text-justify">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard