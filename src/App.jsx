import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <div id="root" className="w-screen min-h-screen">
      <Navbar />
      
      <Banner />
    </div>
  )
}