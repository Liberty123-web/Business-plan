import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hemo from './Components/Home/Hemo.jsx'
import About from './Components/about.jsx'
import Services from './Components/Services.jsx'
import Pricing from './Components/Pricing.jsx'
import Contact from './Components/contact.jsx'

import AboutHome from './Components/Home/AboutHome.jsx'
import ServiceHome from './Components/Home/ServiceHome.jsx'
import PriceHome from './Components/Home/PriceHome.jsx'
import FootHome from './Components/Home/FootHome.jsx'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'

function App() {

  return (
    <>

      <Router>

        <Navbar />


        <Routes>

          <Route path="/" element={
            <>
              <Hemo />
              <AboutHome />
              <ServiceHome />
              <PriceHome />

            </>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <FootHome />


      </Router>
    </>
  )
}

export default App
