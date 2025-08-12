import { useEffect, useState } from "react";


  const Navbar = () => {
    const [selected, setSelected] = useState(0);
    const [scrolled, setScrolled] = useState(false);

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
  }, []);

  const goToSection = (index) => {
    setSelected(index);
    setToggleMenu(false);
  };

  return (
    // <nav className={`fixed inset-0 flex items-center justify-between w-full h-[90px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[130px] z-50 transition-all duration-300 ${scrolled ? "bg-white shadow" : "bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10"}`}>
    <>
    <nav className={`fixed inset-0 flex items-center justify-between w-full h-[90px] px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px] 2xl:px-[160px] z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20" : "bg-white/10 backdrop-blur-xl border-b border-white/20"}`}>

      <div className="flex items-center p-4 gap-8">
        <div className="flex items-center mr-10">
          <a href="/accueil" className="min-w-[130px] group">
            <img src="/logo.png" alt="Logo" className="h-14 w-full transition-transform duration-300 group-hover:scale-105" />
          </a>
        </div>

        <div className="max-[1300px]:hidden flex items-center gap-10">
          <a href="#about-us" className={`relative py-2 px-1 ${scrolled ? "text-gray-800 hover:text-cyan-600" : "text-white hover:text-cyan-200"} font-medium text-sm transition-all duration-300 group ${selected === 2 ? "text-cyan-600" : ""}`} onClick={() => setSelected(2)}>
            L{"'"}entreprise
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full ${selected === 2 ? "w-full" : ""}`}></span>
          </a>
          <a href="#why-choose-us" className={`relative py-2 px-1 ${scrolled ? "text-gray-800 hover:text-cyan-600" : "text-white hover:text-cyan-200"} font-medium text-sm transition-all duration-300 group ${selected === 3 ? "text-cyan-600" : ""}`} onClick={() => setSelected(3)}>
            Engagements
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full ${selected === 3 ? "w-full" : ""}`}></span>
          </a>
          <a href="#services" className={`relative py-2 px-1 ${scrolled ? "text-gray-800 hover:text-cyan-600" : "text-white hover:text-cyan-200"} font-medium text-sm transition-all duration-300 group ${selected === 4 ? "text-cyan-600" : ""}`} onClick={() => setSelected(4)}>
            Services
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full ${selected === 4 ? "w-full" : ""}`}></span>
          </a>
          <a href="#equipments" className={`relative py-2 px-1 ${scrolled ? "text-gray-800 hover:text-cyan-600" : "text-white hover:text-cyan-200"} font-medium text-sm transition-all duration-300 group ${selected === 5 ? "text-cyan-600" : ""}`} onClick={() => setSelected(5)}>
            Catalogue
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full ${selected === 5 ? "w-full" : ""}`}></span>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="sm:flex hidden group relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 overflow-hidden border-2 border-transparent hover:border-white/50 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:shadow-cyan-500/50">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          <div className="relative flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              <svg className="relative w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-wide group-hover:text-cyan-100 transition-colors duration-300">Obtenez un devis gratuitement*</span>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
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
      <div className={`fixed ${toggleContent ? "translate-y-0" : "-translate-y-full"} absolute top-0 inset-x-0 transform w-full flex-col justify-center items-start h-[320px] px-10 py-4 bg-white transition-all duration-300`}>
          <a href="#about-us" className="w-full p-3 flex items-center text-lg font-semibold text-gray-700 rounded-lg hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200 cursor-pointer" onClick={() => goToSection(2)}>L{"'"}entreprise</a>
          <a href="#why-choose-us" className="w-full p-3 flex items-center text-lg font-semibold text-gray-700 rounded-lg hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200 cursor-pointer" onClick={() => goToSection(3)}>Engagements</a>
          <a href="#services" className="w-full p-3 flex items-center text-lg font-semibold text-gray-700 rounded-lg hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200 cursor-pointer" onClick={() => goToSection(4)}>Services</a>
          <a href="#equipments" className="w-full p-3 flex items-center text-lg font-semibold text-gray-700 rounded-lg hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200 cursor-pointer" onClick={() => goToSection(5)}>Catalogue</a>
          <button className="mt-6 group relative bg-white border-2 border-gray-200 hover:border-cyan-300 text-gray-800 hover:text-cyan-700 font-semibold py-3 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 via-blue-50/50 to-cyan-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <svg className="relative w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-wide transition-colors duration-300">Obtenez un devis gratuitement*</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-300 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
          </button>
        </div>
    </div>
    </>
  )
}

export default Navbar