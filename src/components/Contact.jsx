import Envelope from "./sub-components/Envelope"

const Contact = () => {
  return (
    <div className="w-full h-[calc(100vh-25rem)] relative my-20">
      {/* <img src="/contact/line.jpg" alt="grid" className="w-full h-full object-center" /> */}
      <div className="absolute inset-0 flex justify-center gap-20 pt-32 px-10 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[130px]">

        <Envelope />

        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold capitalize max-w-lg text-center">Contactez-nous</h1>
          <p className="text-[13px] font-medium text-gray-500 mt-2 max-w-lg">Nous sommes présents pour vous aider, laissez-nous un message et nous vous contacterons dans les plus brefs delais.</p>
          <div className="flex flex-col gap-2 mt-4">
            <a href="/" className="flex gap-2 text-[13px] font-medium text-gray-700 mb-2 hover:text-gray-900 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>
              +33 7 24 89 62 47
            </a>
            <a href="/" className="flex gap-2 text-[13px] font-medium text-gray-700 mb-2 hover:text-gray-900 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7l9 6l9-6"/></g></svg>
              rehonettoyage@yahoo.com
            </a>
            {/* <a href="/" className="flex gap-2 text-[13px] text-gray-700 hover:text-white transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>
              1 Rue Albert Schweitzer,<br/>69600 Oullins
            </a> */}
            <div className="w-full">
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.1172136714795!2d4.811204276750525!3d45.70868531709217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4e9733ebaf505%3A0x993a21a5c0748a08!2s1%20Rue%20Albert%20Schweitzer%2C%2069600%20Oullins-Pierre-B%C3%A9nite!5e0!3m2!1sfr!2sfr!4v1733155087851!5m2!1sfr!2sfr" width="600" height="230" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact