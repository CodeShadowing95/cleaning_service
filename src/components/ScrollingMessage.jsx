import Marquee from "react-fast-marquee"

const services = [
  "Nettoyage de bureaux",
  "Nettoyage de sols et entretiens des murs",
  "Ménage et époussetage",
  "Vidage de poubelles",
  "Lavage de vitres et surfaces vitrées",
  "Nettoyage de fin de chantier",
  "Founitures de matériels de nettoyage",
];

const ScrollingMessage = () => {
  return (
    <div className="w-full h-[100px] flex justify-center items-center my-20 bg-blue-600 overflow-hidden relative -rotate-2 z-10">
        <Marquee className="h-full border-none outline-none" pauseOnHover={true} speed={100} gradient={false}>
          <div className="flex justify-center items-center gap-16 border-none outline-none">
            {services.map((service, index) => (
              <div key={index} className={`flex items-center gap-2 text-white text-xl font-semibold ${index === 0 ? 'ml-16' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.5 7.5 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.5 7.5 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.5 7.5 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.5 7.5 0 0 0 4.464-4.464Z"/></svg>
                {service}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
  )
}

export default ScrollingMessage