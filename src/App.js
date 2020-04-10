import React, { useState } from 'react';
import './App.css';
import Formulario from './components/Formulario';

const App = () => {
  const [alumnas, setAlumnas] = useState(["Lili", "Nil", "Noe", "Celina", "Tefi"])
  const [alumnaNueva, setAlumnaNueva] = useState("")

  const handleChange = evento => {
    setAlumnaNueva(evento.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const arrayNuevo = [...alumnas]
    arrayNuevo.push(alumnaNueva)
    setAlumnas(arrayNuevo)
  }
  return (
    <div>
      {alumnas.map(alumna => <p>{alumna}</p>)}
      <Formulario handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
