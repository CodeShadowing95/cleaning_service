import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Envelope = () => {

  const formRef = useRef(null);

  const [formData, setFormData] = useState({ user_name: "", user_email: "", user_phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setFormData({ user_name: "", user_email: "", user_phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <div className="relative bg-black lg:flex hidden w-[350px] md:w-[550px] lg:w-[600px] h-[320px] md:h-[420px] lg:h-[450px] group transition-all duration-700 items-center justify-center cursor-pointer translate-y-28 hover:translate-y-36">
      {/* Hint besides the envelope */}
      {/* <div className="absolute top-0 -left-32 transform rotate-[-20deg] text-base font-medium text-gray-500">Survolez-moi</div> */}

      <div className="transition-all flex flex-col p-4 duration-300 group-hover:duration-1000 bg-gradient-to-br from-slate-50 to-gray-100 w-full h-full absolute group-hover:-translate-y-56 shadow-inner overflow-hidden">
        <div className="mb-2">
          <p className="px-8 text-[13px] font-semibold text-slate-700 tracking-wide">Cher visiteur,</p>
          <p className="px-8 text-[11px] leading-4 font-medium text-slate-600 mt-1 italic">Nous espérons que vous avez apprécié la visite et que nous vous avons convaincu de votre choix de service de nettoyage. Laissez-nous un message.</p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2 mt-1 px-8 flex-1">
          <div className="relative">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Nom complet" 
              className="w-full p-1.5 text-xs font-medium focus:outline-none px-2.5 bg-white/70 border border-slate-200 rounded-md focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all duration-200 placeholder:text-slate-400 shadow-sm" 
              onChange={handleChange} 
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              name="user_email" 
              placeholder="Adresse e-mail" 
              className="w-full p-1.5 text-xs font-medium focus:outline-none px-2.5 bg-white/70 border border-slate-200 rounded-md focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all duration-200 placeholder:text-slate-400 shadow-sm" 
              onChange={handleChange} 
            />
          </div>
          <div className="relative">
            <input 
              type="tel" 
              name="user_phone" 
              placeholder="Numéro de téléphone" 
              className="w-full p-1.5 text-xs font-medium focus:outline-none px-2.5 bg-white/70 border border-slate-200 rounded-md focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all duration-200 placeholder:text-slate-400 shadow-sm" 
              onChange={handleChange} 
            />
          </div>
          <div className="relative">
            <textarea 
              name="message" 
              placeholder="Votre message..." 
              rows="4" 
              className="w-full h-full p-1.5 text-xs font-medium focus:outline-none px-2.5 bg-white/70 border border-slate-200 rounded-md focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all duration-200 placeholder:text-slate-400 shadow-sm resize-none min-h-[50px]" 
              onChange={handleChange} 
            />
          </div>
          <div className="w-full flex justify-center items-center mt-1">
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            ) : (
              <input 
                type="submit" 
                className="text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-200 font-semibold rounded-lg text-xs px-5 py-2 text-center transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 cursor-pointer" 
                value="Envoyer" 
              />
            )}
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