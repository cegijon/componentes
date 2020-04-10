import React from 'react';

const Formulario = ({ handleChange, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}></input>
    </form>
  )
}

export default Formulario;