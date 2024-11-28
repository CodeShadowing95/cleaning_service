import { useEffect, useState } from "react";
import Navbar from "./Navbar"

const Banner = () => {

  const [contactInfo, setContactInfo] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      contactInfo === 0 ? setContactInfo(1) : setContactInfo(0);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [contactInfo]);


  return (
    <div className="w-full h-[calc(100vh-150px)] relative">
      <img src="/banner_bg.jpg" alt="banner" className="w-full h-full object-cover z-0" />

      <div className="absolute inset-0 z-50 bg-blue-900/85">

        {/* Navbar */}
        <Navbar />

        {/* Banner content */}
        <div className="relative w-full h-full flex justify-between items-center px-[130px] text-white bg-gradient-to-b from-transparent to-black/80">

          <div className="w-1/2 max-[1410px]:w-full flex flex-col justify-center max-[1410px]:items-center h-full gap-8 relative">
            <h1 className="lg:text-[45px] sm:text-[40px] text-3xl leading-[1.4] font-semibold capitalize max-w-[600px]">Améliorez votre activité grâce à nos services de nettoyage professionnels</h1>
            <p className="text-lg leading-7 w-[600px]">Des prestations de nettoyage de haute qualité, adaptées à vos besoins. Offrez-vous un environnement éclatant sans lever le petit doigt.</p>
            <div className="flex gap-x-4">
              <button className="px-8 py-3 bg-white text-gray-900 hover:text-sky-900 font-semibold transition-all duration-500 rounded-full">En savoir plus</button>
              <button className="group/button relative inline-flex items-center justify-center gap-1 overflow-hidden rounded-full bg-blue-500/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white z-10 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20">
                <span className="text-lg">Contactez-nous</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z"/></svg>
                <div
                  className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                >
                  <div className="relative h-full w-10 bg-white/30"></div>
                </div>
              </button>
            </div>
          </div>

          <div className="max-[1410px]:hidden min-w-1/2 h-[100%] flex justify-end items-end">
            <img src="/index-right-img.png" className="w-full h-[85%] object-cover" alt="img-right" />
          </div>

          <div className="max-[1410px]:hidden absolute top-1/4 left-[55%] w-56 h-11 py-0.5 bg-blue-600 rounded-full flex justify-center items-center">
            <div className="w-full h-full bg-blue-800 rounded-full flex justify-center items-center gap-2 text-xs font-semibold">
              <div className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="-mr-1.5" viewBox="0 0 24 24"><path fill="currentColor" d="M3 23v-7q0-2.075 1.463-3.537T8 11h1V3q0-.825.588-1.412T11 1h2q.825 0 1.413.588T15 3v8h1q2.075 0 3.538 1.463T21 16v7zm2-2h2v-3q0-.425.288-.712T8 17t.713.288T9 18v3h2v-3q0-.425.288-.712T12 17t.713.288T13 18v3h2v-3q0-.425.288-.712T16 17t.713.288T17 18v3h2v-5q0-1.25-.875-2.125T16 13H8q-1.25 0-2.125.875T5 16z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="-mr-1.5" viewBox="0 0 24 24"><path fill="currentColor" d="m9 7l1-2V4H9V2h6q.425 0 .713.288T16 3v1l-1 2h-3V5l-2 2zM8 22v-6.85q0-.275.088-.587T8.3 14L12 7h3q.35.35.675.938T16 9v13z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M8.75 23q-.75 0-1.312-.488t-.663-1.237L5 8h14l-1.775 13.275q-.1.75-.663 1.238T15.25 23zM12 16q1.25 0 2.125-.875T15 13v-2h-2v2q0 .425-.288.713T12 14t-.712-.288T11 13v-2H9v2q0 1.25.875 2.125T12 16m3-9q-.625 0-1.062-.437T13.5 5.5t.438-1.062T15 4t1.063.438T16.5 5.5t-.437 1.063T15 7m-5-1q-1.05 0-1.775-.725T7.5 3.5t.725-1.775T10 1t1.775.725T12.5 3.5t-.725 1.775T10 6"/></svg>
              </div>
              Propreté au rendez-vous
            </div>
          </div>

          <div className="max-[1410px]:hidden absolute bottom-12 right-10 w-56 h-11 py-0.5 bg-blue-900 rounded-full flex justify-center items-center z-10">
            <div className="relative w-full h-full bg-blue-950 rounded-full flex justify-center items-center gap-2 text-xs font-semibold capitalize">
              <img src="/positive-review.png" alt="positive review" className="w-5 h-5" />
              Satisfaction cliente
            </div>
          </div>

          <div className="max-[1410px]:hidden absolute top-24 right-16">
            <div className="relative flex items-center justify-center border border-sky-700 bg-sky-800 rounded-full w-28 h-28">
              <img src="/side_img.png" alt="sideImg" />
            </div>
          </div>

          

          <div id="sparkle" className={`absolute top-36 left-1/4`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle1" className={`absolute top-24 right-[35%]`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle2" className={`absolute bottom-10 left-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle3" className={`absolute top-1/3 right-20`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle4" className={`absolute bottom-44 right-5`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>
          <div id="sparkle2" className={`absolute bottom-40 left-[35%]`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z"/></svg>
          </div>

          <div className="absolute left-1/2 bottom-16 cursor-pointer">
            <div className="flex justify-center items-start py-2 w-[28px] h-14 border-[3px] border-white/50 rounded-full gap-2">
              <div id="mouse" className="w-2 h-4 bg-white/50 rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner