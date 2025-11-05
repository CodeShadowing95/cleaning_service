import { AboutUs, Banner, Contact, Equipments, Footer, HowItWorks, ScrollingMessage, Services, WhyChooseUs } from '../components'
import { useEffect } from 'react'
import { setPageMeta } from '../seo'

const Home = () => {
  useEffect(() => {
    setPageMeta({
      title: 'REHOBOTH Nettoyage — Services de nettoyage professionnels',
      description: "Entreprise de nettoyage à votre service : résidentiel, commercial, vitres, fin de chantier. Devis gratuit.",
      canonical: 'https://rehobothnettoyage.com/'
    })
  }, [])
  return (
    <div className="w-full h-full relative">
      
      <Banner />

      <AboutUs />

      <WhyChooseUs />
      
      <Services />

      <Equipments />

      <HowItWorks />

      <ScrollingMessage />

      <Contact />

      <Footer /> 
      
    </div>
  )
}

export default Home