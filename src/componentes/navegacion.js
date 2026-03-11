import React, { useState } from "react";
import "../estilosComponentes/navegacion.css";

const Navegacion = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <button onClick={toggleMenu} id="menu-toggle" className="menu-button">
        ☰
      </button>

      <nav className={`navbar ${menuVisible ? "show-menu" : ""}`}>
        <a href="#section-inicio" className="nav-item">
          Inicio
        </a>
        <a href="#section-habilidad" className="nav-item">
          Habilidades
        </a>
        <a href="#section-proyecto" className="nav-item">
          Proyectos
        </a>
        <a href="#section-exp" className="nav-item">
          Experiencia
        </a>
      </nav>
    </>
  );
};

export default Navegacion;