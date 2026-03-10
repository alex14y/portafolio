import React from "react";
import "../estilosComponentes/sectionProyecto.css";
import miImagen from "../imagenes/iconReact.png";
import miImagen2 from "../imagenes/proyecto2.png";
import miImagen3 from "../imagenes/proyecto1.png";
import css from "../imagenes/css.png";
import html from "../imagenes/html.png";
import wolan from "../imagenes/wolan2.png";

import js from "../imagenes/js.png";
import mysql from "../imagenes/mysql.png";
import wordpress from "../imagenes/wordpress.png";
import php from "../imagenes/php.png";
import boots from "../imagenes/boots.png";
import portf from "../imagenes/portf.png";
import sistemaPortf from "../imagenes/sistemaPortf.png";

const SectionProyecto = () => {
  return (
    <div style={{ paddingTop: "390px" }}>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        class="animacion"
      >
        <h2 className="h1-proyectos">PROYECTOS WEB</h2>
      </div>
      <section id="section-proyecto" className="sect-habilidad">
      <div className="column">
          <div class="card">
            <div class="card-image">
              <img
                class="img-habilidad"
                src={wolan}
                alt="Proyecto noticias"
              />
            </div>
            <div class="card-description">
              <p class="text-title">Página wifi</p>
              <p class="text-body">
                Pagina hecha en wordpress con plugin elementor, intuitiva para venta de red wifi.
              </p>
              <div class="image-container">
                <img src={wordpress} alt="Imagen 1" class="round-image" />
                <img src={html} alt="Imagen 1" class="round-image" />
                <img src={css} alt="Imagen 1" class="round-image" />
                
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div class="card">
            <div class="card-image">
              <img
                class="img-habilidad"
                src={miImagen2}
                alt="Proyecto noticias"
              />
            </div>
            <div class="card-description">
              <p class="text-title">Buscador de recetas</p>
              <p class="text-body">
                Página moderna con buscador de receta mediante consumo de API.
              </p>
              <div class="image-container">
                <img src={miImagen} alt="Imagen 1" class="round-image" />
                <img src={boots} alt="Imagen 1" class="round-image" />
                <img src={css} alt="Imagen 1" class="round-image" />
                <img src={js} alt="Imagen 1" class="round-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div class="card">
            <div class="card-image">
              <img class="img-habilidad" src={portf} alt="Proyecto noticias" />
            </div>
            <div class="card-description">
              <p class="text-title">Portafolio web</p>
              <p class="text-body">
                Portafolio web con distintas secciones con información
                profesional y personal.
              </p>
              <div class="image-container">
                <img src={miImagen} alt="Imagen 1" class="round-image" />
                <img src={mysql} alt="Imagen 1" class="round-image" />
                <img src={html} alt="Imagen 1" class="round-image" />
                <img src={css} alt="Imagen 1" class="round-image" />
                <img src={js} alt="Imagen 1" class="round-image" />
              </div>
            </div>
          </div>
        </div>
      
      </section>
    </div>
  );
};

export default SectionProyecto;
