import { AboutUs, Banner, Contact, Equipments, HowItWorks, ScrollingMessage, Services, WhyChooseUs } from '../components'

const Home = () => {
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
      
    </div>
  )
}

export default Home