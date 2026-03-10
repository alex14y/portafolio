import React from "react";
import "../estilosComponentes/botonDescarga.css";

const BotonDescarga = ({ nombre, href }) => {
  return (
    <a href={href} download class="custom-button">
      {nombre}
    </a>
  );
};

export default BotonDescarga;
