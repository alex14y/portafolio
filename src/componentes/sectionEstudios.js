import React from "react";
import "../estilosComponentes/sectionEstudios.css";


const SectionEstudios = () => {
  return (
    <section
      style={{ paddingTop: "140px" }}
      id="section-estudios"
      className="sect-estudios"
    >
       <ol class="timeline">
        <li>
            <div class="dot"></div>
            <time>February 2022</time>
            <h3>Application UI code in Tailwind CSS</h3>
            <p>Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
            <a href="#" class="cta-link">Learn more</a>
        </li>
        <li>
            <div class="dot"></div>
            <time>March 2022</time>
            <h3>Marketing UI design in Figma</h3>
            <p>All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
        </li>
        <li>
            <div class="dot"></div>
            <time>April 2022</time>
            <h3>E-Commerce UI code in Tailwind CSS</h3>
            <p>Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </li>
    </ol>
   


    </section>
  );
};

export default SectionEstudios;
