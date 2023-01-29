import React, { useState } from "react";
import Revision from "./Revision";
import Boton from "./Boton";

export default function RevisionContainer({
  submitVariable,
  handleVariableChange,
  equation,
  variable,
}) {
  const [isRevisionOpen, setisRevisionOpen] = useState(false);

  const manageRevision = () => {
    console.log(isRevisionOpen);
    setisRevisionOpen((isRevisionOpen) => !isRevisionOpen);
  };

  const displayRevision = (
    <div className="flex flex-col items-center gap-4 mt-4 border-2 p-2 rounded-xl">
      <h2>Revisión</h2>
      <p>Elija la variable para la cuál desea despejar</p>
      <form onSubmit={submitVariable} className="flex">
        <input
          className="bg-slate-200 p-2 mx-2 rounded-xl font-medium text-center shadow-lg w-24"
          type="text"
          placeholder="a"
          onChange={handleVariableChange}
        ></input>
        <Boton type="submit" text="Elegir variable" />
      </form>
      
      <Revision equation={equation} variable={variable} />
      <Boton text={"Cerrar Revisión"} onClick={manageRevision} isRed={true} />
    </div>
  );

  if (!isRevisionOpen) {
    return <div className="flex justify-center"><Boton text={"Abrir Revisión"} onClick={manageRevision}  /> </div>
  }
  return displayRevision;
}
