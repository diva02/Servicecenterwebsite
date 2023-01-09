import React from "react";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Spares from "./Spares/Spares";
import Hero from "./hero/hero";

function App() {
  return (
    <>
   
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/spares" element={<Spares />} />
    </Routes>
    
  </BrowserRouter>
   <Footer /> 
    </>
  );
}

export default App;
