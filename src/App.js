import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';

const App = () => {
  const [alumnas, setAlumnas] = useState(["Lili", "Nil", "Noe", "Celina", "Tefi"])
  const [alumnaNueva, setAlumnaNueva] = useState("")

  const funcionDelPadre = parametros => {
    setAlumnaNueva(parametros)
  }

  const funcionDelPadreSubmit = () => {
    const arrayNuevo = [...alumnas]
    arrayNuevo.push(alumnaNueva)
    setAlumnas(arrayNuevo)
  }
  return (
    <div>
      {alumnas.map(alumna => <p>{alumna}</p>)}
      <Formulario funcionDelPadre={funcionDelPadre} funcionDelPadreSubmit={funcionDelPadreSubmit} />
    </div>
  );
}

export default App;
