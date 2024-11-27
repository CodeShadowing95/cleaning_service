import { useEffect, useState } from "react";


  const Navbar = () => {
    const [selected, setSelected] = useState(1);
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
    <nav className={`fixed inset-0 flex items-center justify-between w-full h-[90px] px-[130px] z-50 transition-all duration-300 ${scrolled ? "bg-white shadow" : "bg-blue-950/60"}`}>

      <div className="flex items-center p-4 gap-8">
        <div className="flex items-center mr-10">
          {/* <a href="/accueil">
            <img src="/rehonet_logo.png" alt="Logo" className="h-14" />
          </a> */}
          <a href="/accueil" className={`${scrolled ? "text-black" : "text-white"} uppercase font-bold text-lg max-w-[250px]`}>
            rehoboth nettoyage
          </a>
        </div>
        <a href="/accueil" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-base transition-colors ${selected === 1 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(1)}>
          Accueil
        </a>
        <a href="#" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-base transition-colors ${selected === 2 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(2)}>
          Qui sommes-nous ?
        </a>
        <a href="#" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-base transition-colors ${selected === 3 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(3)}>
          Services
        </a>
        <a href="#" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-base transition-colors ${selected === 4 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(4)}>
          Équipements
        </a>
        <a href="/contact" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-base transition-colors ${selected === 5 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(5)}>
          Contact
        </a>
      </div>

      <button className="p-[3px]  relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="w-[200px] h-8 flex flex-col justify-center items-center bg-black rounded-[6px]  relative group transition duration-200 text-xs font-semibold text-white hover:bg-transparent overflow-hidden">
          <div className={`flex items-center gap-2 transition-transform duration-500 ${contactInfo == 0 ? 'translate-y-[40%]' : '-translate-y-[130%]'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1c-.3-1.1-.5-2.4-.5-3.6c0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1c0 9.4 7.6 17 17 17c.5 0 1-.5 1-1v-3.5c0-.5-.5-1-1-1M5 5h1.5c.1.9.3 1.8.5 2.6L5.8 8.8C5.4 7.6 5.1 6.3 5 5m14 14c-1.3-.1-2.6-.4-3.8-.8l1.2-1.2c.8.2 1.7.4 2.6.4z"/></svg>
            +33 7 24 89 62 47
          </div>
          <div className={`flex items-center gap-2 transition-transform duration-500 ${contactInfo == 0 ? 'translate-y-[130%]' : '-translate-y-[65%]'}`}>
            rehonettoyage@yahoo.com
          </div>
        </div>
      </button>

    </nav>
  )
}

export default Navbar