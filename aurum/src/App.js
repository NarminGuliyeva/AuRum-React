import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Haqqimizda from "./Pages/Haqqimizda";
import Partnyorlar from "./Pages/Partnyorlar";
import GemiAgentliyi from "./Pages/GemiAgentliyi";
import LimanXidmetleri from "./Pages/LimanXidmetleri";
import Gemiler from './Pages/Gemiler'
import Gemi from './Pages/Gemi'
import Karyera from './Pages/Karyera'
import Elaqe from "./Pages/Elaqe";
import Qalereya from "./Pages/Qalereya";
import Bloqlar from "./Pages/Bloqlar";
import Bloq from "./Pages/Bloq";

function App() {
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<Haqqimizda />} />
      <Route path="partners" element={<Partnyorlar />} />
      <Route path="shipagency" element={<GemiAgentliyi />} />
      <Route path="portservice" element={<LimanXidmetleri />} />
      <Route path="ships" element={<Gemiler />} />
      <Route path="ships/:shipslug" element={<Gemi />} />
      <Route path="career" element={<Karyera />} />
      <Route path="contact" element={<Elaqe />} />
      <Route path="gallery" element={<Qalereya />} />
      <Route path="blogs" element={<Bloqlar />} />
      <Route path="blogs/:blogslug" element={<Bloq />} />
    </Routes>
  );
}

export default App;
