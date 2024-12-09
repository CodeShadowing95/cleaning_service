import { useEffect, useState } from "react";


  const Navbar = () => {
    const [selected, setSelected] = useState(2);
    const [scrolled, setScrolled] = useState(false);
    const [contactInfo, setContactInfo] = useState(0);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleContent, setToggleContent] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        toggleMenu ? setToggleContent(true) : setToggleContent(false);
      }, 200);
    }, [toggleMenu]);

    useEffect(() => {
      if (window.innerWidth <= 1300) {
        setToggleMenu(false);
      }
    }, []);

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

    // Hide the menu when the user clicks outside of it
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (toggleMenu && !event.target.closest(".hamburger_menu") && !event.target.closest(".dropdown_menu")) {
          setToggleMenu(false);
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [toggleMenu]);

  useEffect(() => {
    const currentLocation = window.location.href;

    if (currentLocation.includes("#about-us")) {
      setSelected(2);
    } else if (currentLocation.includes("#why-choose-us")) {
      setSelected(3);
    } else if (currentLocation.includes("#services")) {
      setSelected(4);
    } else if (currentLocation.includes("#equipments")) {
      setSelected(5);
    } else if (currentLocation.includes("#contact")) {
      setSelected(6);
    }

    if (selected === 2) {
      window.location.href = "#about-us";
    }
    if (selected === 3) {
      window.location.href = "#why-choose-us";
    }
    if (selected === 4) {
      window.location.href = "#services";
    }
    if (selected === 5) {
      window.location.href = "#equipments";
    }
    if (selected === 6) {
      window.location.href = "#contact";
    }
  }, []);

  return (
    // <nav className={`fixed inset-0 flex items-center justify-between w-full h-[90px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[130px] z-50 transition-all duration-300 ${scrolled ? "bg-white shadow" : "bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10"}`}>
    <>
    <nav className={`fixed inset-0 flex items-center justify-between w-full h-[90px] px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] z-50 transition-all duration-300 ${scrolled ? "bg-white shadow" : "bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10"}`}>

      <div className="flex items-center p-4 gap-8">
        <div className="flex items-center mr-10">
          <a href="/accueil" className="min-w-[130px]">
            <img src="/logo.png" alt="Logo" className="h-14 w-full" />
          </a>
        </div>

        <div className="max-[1300px]:hidden flex items-center gap-8">
          <a href="#about-us" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-sm transition-colors ${selected === 2 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(2)}>
            L{"'"}entreprise
          </a>
          <a href="#why-choose-us" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-sm transition-colors ${selected === 3 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(3)}>
            Engagements
          </a>
          <a href="#services" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-sm transition-colors ${selected === 4 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(4)}>
            Services
          </a>
          <a href="#equipments" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-sm transition-colors ${selected === 5 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(5)}>
            Catalogue
          </a>
          <a href="#contact" className={`py-1 ${scrolled ? "text-black hover:text-sky-800" : "text-white"} hover:text-sky-100 text-sm transition-colors ${selected === 6 ? "font-bold border-b-2 border-sky-500" : ""}`} onClick={() => setSelected(6)}>
            Contact
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="sm:flex hidden p-[3px] relative">
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

        {/* Menu */}
        <div className={`hamburger_menu ${scrolled ? "text-slate-900" : "text-white"} max-[1300px]:flex hidden justify-center items-center p-2 rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 cursor-pointer`} onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          }
        </div>
      </div>
    </nav>

    {/* Mobile menu */}
    <div className={`dropdown_menu fixed ${toggleMenu ? "opacity-100" : "opacity-0 pointer-events-none"} max-[1300px]:flex hidden top-[90px] left-0 w-full h-full bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 transition-all duration-300 ease-in-out z-50 overflow-hidden`}>
      {/* <div className={`fixed ${toggleMenu ? "translate-y-full" : "-translate-y-full"} max-[1300px]:flex hidden absolute bottom-0 left-0 transform w-full flex-col justify-center items-start h-[350px] px-10 py-4 bg-white transition-all duration-300`}> */}
      <div className={`fixed ${toggleContent ? "translate-y-0" : "-translate-y-full"} absolute top-0 inset-x-0 transform w-full flex-col justify-center items-start h-[350px] px-10 py-4 bg-white transition-all duration-300`}>
          <div className="w-full p-2 flex items-center text-lg font-semibold text-gray-600 rounded-lg hover:text-sky-700 cursor-pointer">L{"'"}entreprise</div>
          <div className="w-full p-2 flex items-center text-lg font-semibold text-gray-600 rounded-lg hover:text-sky-700 cursor-pointer">Engagements</div>
          <div className="w-full p-2 flex items-center text-lg font-semibold text-gray-600 rounded-lg hover:text-sky-700 cursor-pointer">Services</div>
          <div className="w-full p-2 flex items-center text-lg font-semibold text-gray-600 rounded-lg hover:text-sky-700 cursor-pointer">Catalogue</div>
          <div className="w-full p-2 flex items-center text-lg font-semibold text-gray-600 rounded-lg hover:text-sky-700 cursor-pointer">Contact</div>
          <button className="p-[3px] mt-4 relative">
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
        </div>
    </div>
    </>
  )
}

export default Navbar