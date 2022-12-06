import React from "react";
import { Contact } from "../Home/Contact";
import { NavIns } from "../../components/navbar insc-con/NavIns";
import "./Connexion.css";
const Connexion = () => {
  return (
    <div>
      <NavIns />
      <div className="connexion">
        <Contact />
      </div>
    </div>
  );
};

export default Connexion;
