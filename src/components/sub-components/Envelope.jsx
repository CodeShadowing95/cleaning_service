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
    <div className="relative lg:flex hidden w-[500px] md:w-[700px] lg:w-[800px] h-[450px] md:h-[550px] lg:h-[600px] group transition-all duration-700 items-center justify-center cursor-pointer translate-y-56 hover:translate-y-96">
      {/* Arrière-plan avec effet de verre et dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/30 to-cyan-50/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl shadow-blue-500/10"></div>
      
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="transition-all flex flex-col p-8 duration-500 group-hover:duration-1000 bg-gradient-to-br from-white/90 via-blue-50/80 to-cyan-50/70 backdrop-blur-lg w-full h-full absolute group-hover:-translate-y-[400px] shadow-2xl shadow-blue-500/20 rounded-3xl border border-white/40 overflow-hidden">
        {/* En-tête élégant */}
        <div className="mb-6 relative">
          <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
          <div className="relative">
            <div className="inline-flex items-center px-4 py-2 mb-3 bg-gradient-to-r from-blue-100/80 to-cyan-100/80 border border-blue-200/50 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-700">Contactez-nous</span>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-blue-700 bg-clip-text text-transparent mb-2">
              Parlons de votre projet
            </h3>
            <p className="text-sm leading-relaxed font-medium text-gray-600">
              Décrivez-nous vos besoins et recevez un devis personnalisé sous 24h.
            </p>
          </div>
        </div>
        
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
          {/* Nom complet */}
          <div className="relative group/input">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-300"></div>
            <input 
              type="text" 
              name="user_name" 
              placeholder="Nom complet" 
              className="relative w-full p-4 text-sm font-medium focus:outline-none bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100/50 transition-all duration-300 placeholder:text-gray-400 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 group-hover/input:scale-[1.02]" 
              onChange={handleChange} 
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          {/* Email */}
          <div className="relative group/input">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-300"></div>
            <input 
              type="email" 
              name="user_email" 
              placeholder="Adresse e-mail" 
              className="relative w-full p-4 text-sm font-medium focus:outline-none bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100/50 transition-all duration-300 placeholder:text-gray-400 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 group-hover/input:scale-[1.02]" 
              onChange={handleChange} 
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          {/* Téléphone */}
          <div className="relative group/input">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-300"></div>
            <input 
              type="tel" 
              name="user_phone" 
              placeholder="Numéro de téléphone" 
              className="relative w-full p-4 text-sm font-medium focus:outline-none bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl focus:border-purple-400 focus:ring-2 focus:ring-purple-100/50 transition-all duration-300 placeholder:text-gray-400 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 group-hover/input:scale-[1.02]" 
              onChange={handleChange} 
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          {/* Message */}
          <div className="relative group/input flex-1">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover/input:opacity-100 transition-opacity duration-300"></div>
            <textarea 
              name="message" 
              placeholder="Décrivez votre projet de nettoyage..." 
              rows="4" 
              className="relative w-full h-full p-4 text-sm font-medium focus:outline-none bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-xl focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100/50 transition-all duration-300 placeholder:text-gray-400 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 resize-none min-h-[100px] group-hover/input:scale-[1.02]" 
              onChange={handleChange} 
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/5 to-blue-500/5 opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          
          {/* Bouton d'envoi */}
          <div className="w-full flex justify-center items-center mt-4">
            {loading ? (
              <div className="flex items-center justify-center w-full py-4">
                <div className="relative">
                  <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-8 h-8 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin animate-reverse"></div>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-600">Envoi en cours...</span>
              </div>
            ) : (
              <button 
                type="submit" 
                className="group/btn relative w-full py-4 px-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Envoyer le message
                </span>
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Sceau élégant */}
      <button className="seal absolute z-40 w-16 h-16 bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-500 group-hover:opacity-0 group-hover:scale-0 group-hover:rotate-180 border-4 border-white/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
        <span className="relative">RBN</span>
      </button>
      <div className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]" />
      <div className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]" />
      <div className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]" />
      <div className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]" />
    </div>
  )
}

export default Envelope