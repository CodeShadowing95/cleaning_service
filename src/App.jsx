import { AboutUs, Banner, Equipments, HowItWorks, Navbar, Services, WhyChooseUs } from "./components";


export default function App() {

  return (
    <div id="root" className="max-w-screen min-h-screen">
      <Navbar />
      
      <Banner />

      <AboutUs />

      <WhyChooseUs />

      <Services />

      <Equipments />

      <HowItWorks />

    </div>
  )
}