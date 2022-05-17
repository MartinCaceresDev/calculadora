import React from 'react';
import './Boton.css';

function Boton(props){

  return(
    <div 
      className={ isNaN(props.children) ? 'boton operador' : 'boton' }
      onClick= {() => props.manejarClick(props.children)}>
        <p>{props.children}</p>
    </div>
  );
}

export default Boton;