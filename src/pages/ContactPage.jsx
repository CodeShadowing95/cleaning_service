
import { useEffect } from 'react'
import { setPageMeta } from '../seo'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Contact — REHOBOTH Nettoyage',
      description: "Contactez notre équipe pour vos demandes de nettoyage et d’information.",
      canonical: 'https://rehobothnettoyage.com/contact'
    })
  }, [])
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header avec image wave et overlay gradient */}
      <section className="relative w-full">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
          <img src="/wave.png" alt="wave background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="inline-flex items-center px-3 py-1.5 mb-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm font-semibold">Nous sommes à votre écoute</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Contactez REHOBOTH NETTOYAGE
              </h1>
              <p className="mt-2 text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
                Devis gratuit, réponses rapides et accompagnement personnalisé pour vos projets de nettoyage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal: section Contact compacte */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage