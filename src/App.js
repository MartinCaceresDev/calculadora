import './App.css';
import Display from './components/display/Display';
import Boton from './components/boton/Boton';
import BotonClear from './components/boton-clear/BotonClear';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [valorDisplay, setValorDisplay] = useState('');

  const handleClick = input => {

    if(input === '*' || input === '/' || input === '+' || input === '-'){
      if(valorDisplay.endsWith('*') || valorDisplay.endsWith('/') || valorDisplay.endsWith('+') || valorDisplay.endsWith('-')){
        setValorDisplay(valorDisplay.slice(0,-1) + input);
      } 
      else {
        setValorDisplay(valorDisplay + input);
      }
    }
    else if(!isNaN(input)){
      if(valorDisplay !== '0'){
        setValorDisplay(valorDisplay + input)
      }
      else {
        setValorDisplay(input);
      }
    }
    else if(input === '.' && !valorDisplay.endsWith('.')) {
        setValorDisplay(valorDisplay + input);
    } 
    else if(input === '='){
      if(valorDisplay === ''){
        setValorDisplay('');
      }
      else{
        let valor = evaluate(valorDisplay);
        valor = valor.toFixed(4);
        valor = valor.toString();
        if(valor.includes('.')){
          let partes = valor.split('.');
          let parteEntera = partes[0];
          let parteDecimal = partes[1];
          if(parteDecimal.endsWith('0000')){
            valor = parteEntera;
          }else if(parteDecimal.endsWith('000')){
            valor = parteEntera + '.' + parteDecimal[0];
          }else if(parteDecimal.endsWith('00')){
            valor = parteEntera + '.' + parteDecimal.slice(0,1);
          }else if(parteDecimal.endsWith('0')){
            valor = parteEntera + '.' + parteDecimal.slice(0,2);
          }
        }
        setValorDisplay(valor);
      }
    }
    else if(input === 'Clear'){
      setValorDisplay('');
    }
  }
  
  return (
    <div className="App">
      <div className='calculadora'>
        <Display valorDisplay = {valorDisplay} />
        <div className='fila'>
          <Boton manejarClick={handleClick}>1</Boton>
          <Boton manejarClick={handleClick}>2</Boton>
          <Boton manejarClick={handleClick}>3</Boton>
          <Boton manejarClick={handleClick}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={handleClick}>4</Boton>
          <Boton manejarClick={handleClick}>5</Boton>
          <Boton manejarClick={handleClick}>6</Boton>
          <Boton manejarClick={handleClick}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={handleClick}>7</Boton>
          <Boton manejarClick={handleClick}>8</Boton>
          <Boton manejarClick={handleClick}>9</Boton>
          <Boton manejarClick={handleClick}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={handleClick}>=</Boton>
          <Boton manejarClick={handleClick}>0</Boton>
          <Boton manejarClick={handleClick}>.</Boton>
          <Boton manejarClick={handleClick}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
