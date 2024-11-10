
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 bg-white px-[130px]">
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
      {/* <button className="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300  duration-500 before:duration-500 hover:duration-500 underline-offset-2    hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 w-64 border text-left p-3 text-gray-50 text-base font-semibold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
        Contactez-nous
      </button> */}
      <button className="relative group cursor-pointer text-sky-50  overflow-hidden h-10 w-52 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">

        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"></div>
        <p className="z-10">Contactez-nous</p>
      </button>


    </nav>
  )
}

export default Navbar