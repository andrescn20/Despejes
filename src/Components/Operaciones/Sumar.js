import React, { useEffect, useState } from 'react';
import Operacion from '../Operacion';

export default function Sumar({ equation, name, handleOperation, factor }) {
  const [newEquation, setNewEquation] = useState('');

  useEffect(() => {
    setNewEquation(equation);
  }, []);

  useEffect(() => {
    handleOperation(newEquation);
  }, [newEquation]);

  const updateEquation = (e) => {
    e.preventDefault();

    fetch('/Sumar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        equation: newEquation,
        factor: factor,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewEquation(data.result);
      });
  };

  return (
    <form onSubmit={updateEquation}>
      <Operacion text={name} />
    </form>
  );
}
