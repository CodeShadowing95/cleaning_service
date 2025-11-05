import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import ServicesPage from "./pages/ServicesPage";
import CGVPage from "./pages/CGVPage";


export default function App() {

  return (
    <div id="root" className="max-w-screen min-h-screen">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/accueil" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/devis" element={<QuotePage />} />
          <Route path="/services-details" element={<ServicesPage />} />
          <Route path="/cgv" element={<CGVPage />} />
        </Routes>
      </Router>
    </div>
  )
}