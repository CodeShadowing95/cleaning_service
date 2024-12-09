
const Envelope = () => {
  return (
    <div className="relative bg-black lg:flex hidden md:w-[550px] w-[350px] md:h-[350px] h-[250px] group transition-all duration-700 aspect-video items-center justify-center cursor-pointer translate-y-16 hover:translate-y-36">
      {/* Hint besides the envelope */}
      {/* <div className="absolute top-0 -left-32 transform rotate-[-20deg] text-base font-medium text-gray-500">Survolez-moi</div> */}

      <div className="transition-all flex flex-col p-5 duration-300 group-hover:duration-1000 bg-gray-100 w-full h-full absolute group-hover:-translate-y-60">
        <p className="px-10 text-[12px] font-medium text-gray-800">Cher visiteur,</p>
        <p className="px-10 text-[12px] leading-4 font-medium text-gray-700 mt-2">Nous espérons que vous avez apprécié la visite et que nous vous avons convaincu de votre choix de service de nettoyage. Laissez-nous un message.</p>
        <form className="flex flex-col gap-2 mt-5 px-10">
          <input type="text" placeholder="Nom" className="p-1 text-xs font-medium focus:outline-none px-2 border-b border-gray-400" />
          <input type="email" placeholder="Adresse mail" className="p-1 text-xs font-medium focus:outline-none px-2 border-b border-gray-400" />
          <input type="phone" placeholder="Numéro de téléphone" className="p-1 text-xs font-medium focus:outline-none px-2 border-b border-gray-400" />
          <textarea placeholder="Votre message..." rows="4" className="p-1 text-xs font-medium focus:outline-none px-2 border-b border-gray-400" />
          <div className="w-full flex justify-center items-center">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center">Envoyer</button>
          </div>
        </form>
      </div>

      {/* Accessoires de l'enveloppe */}
      <button className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
        RBN
      </button>
      <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]" />
      <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]" />
      <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]" />
      <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]" />
    </div>
  )
}

export default Envelope