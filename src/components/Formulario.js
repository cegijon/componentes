import React from 'react';

const Formulario = ({ funcionDelPadre, funcionDelPadreSubmit }) => {

  const handleChange = e => {
    funcionDelPadre(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    funcionDelPadreSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}></input>
    </form>
  )
}


export default Formulario