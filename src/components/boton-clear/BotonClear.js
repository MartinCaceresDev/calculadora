import React from 'react';
import './BotonClear.css';

function BotonClear({ manejarClick }){
  return(
    <div 
      className='boton-clear'
      onClick={() => manejarClick('Clear')}>
        <p>Clear</p>
    </div>
  );
}

export default BotonClear;