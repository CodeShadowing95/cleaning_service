import { AboutUs, Banner, Equipments, Navbar, Services, WhyChooseUs } from "./components";


export default function App() {

  return (
    <div id="root" className="max-w-screen min-h-screen">
      <Navbar />
      
      <Banner />

      <AboutUs />

      <WhyChooseUs />

      <Services />

      <Equipments />

      
      <div className="flex items-center justify-end mt-14 mb-4 px-[130px]">
        <div className="flex items-center p-1 border gap-2 border-blue-600 dark:border-blue-400 rounded-xl">
          <div className="flex justify-center items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-xl transition-all cursor-pointer">
            Équipements
          </div>
          <div className="flex justify-center items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-100 bg-white rounded-xl transition-all cursor-pointer">
            Démo
          </div>
        </div>
      </div>

    </div>
  )
}