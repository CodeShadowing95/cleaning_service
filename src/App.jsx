import { AboutUs, Banner, Navbar, Services, WhyChooseUs } from "./components";


export default function App() {

  return (
    <div id="root" className="w-screen min-h-screen">
      <Navbar />
      
      <Banner />

      <AboutUs />

      <WhyChooseUs />

      <Services />

    </div>
  )
}