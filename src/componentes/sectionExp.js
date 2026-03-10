import React from "react";
import "../estilosComponentes/sectionExp.css";

const SectionEstudios = () => {
  return (
    <>
      <div
        class="animacion"
        id="exp-animado"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "40px",
        }}
      >
        <h2 id="section-exp" className="h1-proyectos">
          EXPERIENCIA LABORAL
        </h2>
      </div>
      <div id="contenedor">
        <div id="contenedor-interno">
          <div id="contenido1">
            <h2>Desarrollador web</h2>
            <label style={{ fontSize: "13px" }}>015/02/2023 - Actual</label>
          </div>
          <div id="contenido2">
            <h3>Clinica de la costa</h3>
            <br />
            <p id="parrafo-exp" className="parrafo">
              Desarrollo del software web (Backend y FrontEnd) interno de la
              empresa con lenguaje de programación{" "}
              <span style={{ color: "#5468FF" }}>java(Sprint Boot)</span> y{" "}
              <span style={{ color: "#5468FF" }}>javascript</span>, maquetado de
              las páginas con <span style={{ color: "#5468FF" }}>html</span> y{" "}
              <span style={{ color: "#5468FF" }}>bootstrap</span>, uso de{" "}
              <span style={{ color: "#5468FF" }}>jquery</span> y{" "}
              <span style={{ color: "#5468FF" }}>ajax</span>. Trabajé con base
              de datos Postgres para la gestión de los datos de la empresa y tambien
              con <span style={{ color: "#5468FF" }}>git</span> para el control
              de versiones del código.
            </p>
          </div>
        </div>
      </div>



      <div id="contenedor">
       
      </div>
    </>
  );
};

export default SectionEstudios;
