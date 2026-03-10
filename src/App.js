import "./App.css";
//import BotonGeneral from "./componentes/botonGeneral.js";
import BotonDescarga from "./componentes/botonDescarga.js";
import SectionHabilidad from "./componentes/sectionHabilidad.js";
import SectionProyecto from "./componentes/sectionProyecto.js";
import Navegacion from "./componentes/navegacion.js";
import BotonWhatsapp from "./componentes/botonWhatsapp.js";
import SectionEstudios from "./componentes/sectionEstudios.js";
import SectionExp from "./componentes/sectionExp.js";
import perfil from "./imagenes/yo.jpeg";

function App() {
  return (
    <>
      <body>
        <Navegacion />
        <section id="section-inicio" class="sect">
          <div class="custom-div">
            <div class="contenedor-redondo">
              <img src={perfil} alt="Foto" className="foto" />
            </div>
          </div>
          <div className="custom-div">
            <div class="animacion">
              <h2>DESARROLLADOR WEB</h2>
            </div>
            <br />
            <p className="parrafo">
              ¡Hola! soy{" "}
              <span style={{ color: "#5468FF" }}>Alejandro Sampayo</span>, un desarrollador web con un enfoque creativo y orientado a soluciones tecnológicas innovadoras. Mi camino en el mundo del desarrollo comenzó con la curiosidad por explorar nuevas posibilidades y la pasión por crear experiencias digitales impactantes.
            </p>
            <br />

            <BotonDescarga nombre={"Descargar HV"} href={"./H_Alejandro.pdf"} />
          </div>
        </section>
        <SectionHabilidad />
        <SectionProyecto />
        <SectionExp />
      </body>
      <BotonWhatsapp />
    </>
  );
}

export default App;
