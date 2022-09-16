import React from 'react';

export default function Botones(props) {
  const botones = props.factores.map((factor) => {
    return <button value={factor}>{factor}</button>;
  });

  return <div>{botones}</div>;
}
