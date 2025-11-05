import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { setPageMeta } from '../seo';
import Footer from '../components/Footer';

const QuotePage = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Devis nettoyage — REHOBOTH Nettoyage',
      description: "Demandez un devis gratuit pour vos besoins de nettoyage: rapide et personnalisé.",
      canonical: 'https://rehobothnettoyage.com/devis'
    })
  }, [])
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    frequency: '',
    rooms: '',
    message: '',
    date: new Date().toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }),
    time: new Date().toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    }),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuration EmailJS avec variables d'environnement
      const result = await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email envoyé avec succès:', result.text);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceType: '',
        frequency: '',
        rooms: '',
        message: '',
        date: '',
        time: '',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">      
      {/* Header avec image wave et overlays */}
      <section className="relative w-full">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
          <img src="/wave.png" alt="wave background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="inline-flex items-center px-3 py-1.5 mb-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm font-semibold">Devis gratuit — Réponse rapide</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-sm">Demande de devis</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-8 sm:p-12">
              <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                {/* Champs cachés pour date et heure */}
                <input type="hidden" name="date" value={formData.date} />
                <input type="hidden" name="time" value={formData.time} />
                {/* Informations personnelles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Votre adresse complète"
                    />
                  </div>
                </div>

                {/* Détails du service */}
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Détails du service</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700">
                        Type de service *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="menage-regulier">Ménage régulier</option>
                        <option value="nettoyage-profond">Nettoyage en profondeur</option>
                        <option value="nettoyage-bureaux">Nettoyage de bureaux</option>
                        <option value="nettoyage-fin-chantier">Nettoyage fin de chantier</option>
                        <option value="nettoyage-vitres">Nettoyage de vitres</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="frequency" className="block text-sm font-semibold text-gray-700">
                        Fréquence souhaitée
                      </label>
                      <select
                        id="frequency"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Sélectionnez une fréquence</option>
                        <option value="ponctuel">Ponctuel</option>
                        <option value="hebdomadaire">Hebdomadaire</option>
                        <option value="bi-hebdomadaire">Bi-hebdomadaire</option>
                        <option value="mensuel">Mensuel</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="rooms" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de pièces
                    </label>
                    <input
                      type="number"
                      id="rooms"
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleChange}
                      min="1"
                      className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Ex: 3"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Message ou demandes spéciales
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Décrivez vos besoins spécifiques, contraintes horaires, ou toute autre information utile..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-600 disabled:from-gray-400 disabled:via-gray-500 disabled:to-gray-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-xl disabled:hover:scale-100 disabled:hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                          <span>Envoyer ma demande de devis</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Demande envoyée avec succès !</span>
                    </div>
                    <p className="mt-2 text-sm">Nous vous contacterons dans les plus brefs délais pour établir votre devis personnalisé.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Erreur lors de l&apos;envoi</span>
                    </div>
                    <p className="mt-2 text-sm">Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter directement.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default QuotePage;