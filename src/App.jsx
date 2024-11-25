import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";


export default function App() {

  return (
    <div id="root" className="max-w-screen min-h-screen">
      {/* <Navbar /> */}
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/accueil" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  )
}