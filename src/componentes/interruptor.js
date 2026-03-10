// En el archivo componentes/Interruptor.js
import React, { useState, useEffect } from 'react';
import '../estilosComponentes/interruptor.css';

const Interruptor = () => {
  const [fondoNegro, setFondoNegro] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = fondoNegro ? '#00010B' : 'white';
    document.body.style.color = fondoNegro ? 'white' : '#00010B';
    
  }, [fondoNegro]);

  const cambiarFondo = () => {
    setFondoNegro(!fondoNegro);
  };

  return (

    <label class="toggle-switch">
    <input type="checkbox" onClick={cambiarFondo}/>
    <div class="toggle-switch-background">
      <div class="toggle-switch-handle"></div>
    </div>
  </label>
  );
};

export default Interruptor;


