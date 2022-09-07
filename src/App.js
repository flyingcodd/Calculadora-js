import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
    setInput(input + val);
  };
  const calcularResultado = () => {
    if(input !== ""){
      setInput(eval(input).toString());
    }
    else{
      alert("No hay nada que calcular");
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src='https://upload.wikimedia.org/wikipedia/commons/0/04/AllGo.png'
          className='freecodecamp-logo'
          alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>{setInput('')}}>AC</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
