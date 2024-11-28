
const Footer = () => {
  return (
    <div className="w-full bg-zinc-950 px-[130px] pt-16 pb-8 text-white">
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          {/* Logo, name, description */}
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 bg-white rounded-full" />
            <div className="flex flex-col">
              <p className="text-xl font-bold">REHOBOTH NETTOYAGE</p>
              <p className="text-sm font-medium text-gray-400">Service de nettoyage professionnel</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-[14px] leading-6 text-gray-400 mt-3 max-w-md">
            Nous fournissons des services de haute qualité, adaptés à vos besoins. Offrez-vous un environnement éclatant sans lever le petit doigt.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4 mt-10">
            <div className="w-8 h-8 flex justify-center items-center border rounded-full hover:bg-white/10 cursor-pointer transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </div>
            <div className="w-8 h-8 flex justify-center items-center border rounded-full hover:bg-white/10 cursor-pointer transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </div>
            <div className="w-8 h-8 flex justify-center items-center border rounded-full hover:bg-white/10 cursor-pointer transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </div>
            <div className="w-8 h-8 flex justify-center items-center border rounded-full hover:bg-white/10 cursor-pointer transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </div>
          </div>
        </div>

        {/* Entreprise */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold mb-4">Entreprise</p>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Accueil</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Qui sommes-nous ?</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Notre engagement</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Prestations</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Équipements</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Démonstration</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Contact</a>
        </div>

        {/* Entreprise */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold mb-4">Nos Services</p>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Nettoyage de bureaux</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Nettoyage après travaux de chantier</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Entretien de vitreries</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Désinfection complète</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Entretien spécialisé</a>
          <a href="/" className="text-[14px] leading-6 text-gray-400 hover:text-white transition-all duration-300">Fournitures de matériels de nettoyage</a>
        </div>

        {/* Entreprise */}
        <div className="flex flex-col gap-2">
          <p className="text-xl font-bold mb-4">Contact.</p>
          <a href="/" className="flex gap-2 text-sm text-gray-400 mb-2 hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>
            +33 7 24 89 62 47
          </a>
          <a href="/" className="flex gap-2 text-sm text-gray-400 mb-2 hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7l9 6l9-6"/></g></svg>
            rehonettoyage@yahoo.com
          </a>
          <a href="/" className="flex gap-2 text-sm text-gray-400 hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"/></g></svg>
            1 Rue Albert Schweitzer,<br/>69600 Oullins
          </a>
        </div>
      </div>
      
      <div className="w-full h-[70px] flex justify-between items-center bg-zinc-900/70 mt-10 px-8">
        <p className="text-[14px] text-gray-400 font-semibold">© 2024 Rehonettoyage. Tous droits reservés.</p>
        <div className="flex items-center gap-4">
          <a href="/" className="text-[14px] text-gray-400 hover:underline underline-offset-4 transition-all duration-300">Mentions Légales</a>
          <span className="text-[14px] text-gray-400 hover:text-white transition-all duration-300">&#8226;</span>          
          <a href="/" className="text-[14px] text-gray-400 hover:underline underline-offset-4 transition-all duration-300">Politique de Confidentialité</a>
          <span className="text-[14px] text-gray-400 hover:text-white transition-all duration-300">&#8226;</span>          
          <a href="/" className="text-[14px] text-gray-400 hover:underline underline-offset-4 transition-all duration-300">Cookies</a>
        </div>
      </div>
    </div>
  )
}

export default Footer