import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Insc from "./pages/inscription/Insc";
import Faq from "./pages/faq/Faq";
import "./App.css";
import Connexion from "./pages/connexion/Connexion";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Insc />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/FAQs" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
