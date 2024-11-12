import { useEffect, useState } from "react";


  const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [contactInfo, setContactInfo] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
      document.addEventListener("scroll", handleScroll);
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }, [scrolled]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        contactInfo === 0 ? setContactInfo(1) : setContactInfo(0);
      }, 10000);
      return () => clearInterval(intervalId);
    }, [contactInfo]);

  return (
    <nav className={`flex items-center justify-between w-full h-20 bg-white px-[130px] sticky top-0 z-50 transition-shadow duration-500 ${scrolled ? "shadow-md" : ""}`}>
      <div className="flex items-center">
        <a href="#">
          <img src="/rehonet_logo.png" alt="Logo" className="h-14" />
        </a>
      </div>
      <div className="flex items-center space-x-2 p-4 font-medium">
        <a href="#" className="px-4 py-2 hover:text-sky-700 transition-all duration-500">
          Accueil
        </a>
        <a href="#" className="px-4 py-2 hover:text-sky-700 transition-all duration-500">
          L{`'`}entreprise
        </a>
        <a href="#" className="px-4 py-2 hover:text-sky-700 transition-all duration-500">
          Services
        </a>
        <a href="#" className="px-4 py-2 hover:text-sky-700 transition-all duration-500">
          Équipements
        </a>
        <a href="#" className="px-4 py-2 hover:text-sky-700 transition-all duration-500">
          Contact
        </a>
      </div>

      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="w-[200px] h-8 flex flex-col justify-center items-center bg-black rounded-[6px]  relative group transition duration-200 text-xs font-semibold text-white hover:bg-transparent overflow-hidden">
          <div className={`flex items-center gap-2 transition-transform duration-500 ${contactInfo == 0 ? 'translate-y-1/2' : '-translate-y-[130%]'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z"/></svg>
            +33 7 24 89 62 47
          </div>
          <div className={`flex items-center gap-2 transition-transform duration-500 ${contactInfo == 0 ? 'translate-y-[130%]' : '-translate-y-1/2'}`}>
            rehonettoyage@yahoo.com
          </div>
        </div>
      </button>


    </nav>
  )
}

export default Navbar