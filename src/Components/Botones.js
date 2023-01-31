import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import nerdamer from 'nerdamer';

export default function Botones({ sendCurrentOperation, factores }) {
  // const [operationList, setOperationList] = useState([]);

  const handleClick = (e) => {
    let currentOperation = e.target.value;
    sendCurrentOperation(currentOperation);
    updateFocus(e.target);
  };

  const updateFocus = (btnActual) => {
    let factorBtns = Array.from(document.getElementsByClassName('factor'));
    factorBtns.forEach((btn) => {
      if (btn.value === btnActual.value) {
        console.log(btnActual.value);
        btnActual.setAttribute('id', 'activeFactor');
      } else {
        btn.removeAttribute('id');
      }
    });

    // botones.forEach(btn => {
    //   if(btn.key == btnActual.value){
    //     console.log(btnActual)
    //     btnActual.classList.add('activeFactor')
    //   }else{
    //     console.log(btn);
    //     // btn.classList.remove('btnFactor')
    //   }
    //  });
  };
  // const operationArray = factores.map((factor) => {
  //   return factor;
  // });

  const botones = factores.map((factor) => {
    if (factor === '') {
      return null;
    } else {
      return (
        <div className='relative rounded-2xl grow flex justify-center py-2 px-2'>
          <div className='text-slate-800 text-center items-center flex justify-center rounded-2xl scale-90'>
            <InlineMath math={factor} className='self-center font-md' />
          </div>
          <button
            onClick={handleClick}
            key={factor}
            value={nerdamer.convertFromLaTeX(factor)}
            className='h-full w-full absolute top-0 left-0 z-30 factor rounded-lg shadow-sm shadow-gray-500'
          ></button>
        </div>
      );
    }
  });
  return (
    <div className='flex justify-center flex-wrap gap-4 px-8'>{botones}</div>
  );
}

// function parentesis(string) {
//   let grupos = [];
//   let extract = ExtractParents.extract(string);
//   grupos.forEach((grupo, i) => {
//     //Grupos grandes
//     grupos.push(grupo.str);
//     extract.forEach((extract, j) => {
//       //Paréntesis dentro de parentesis
//       grupos.push(extract[i].nest[j].str);
//     });
//   });

// function eliminarGrupoParentesis(string) {
//   let gruposFiltrado;
//   let eq = string;
//   let grupos = parentesis(eq); //Se extraen los grupos
//   grupos.forEach((grupo) => {
//     gruposFiltrado = eq.replace(grupo, '');
//     eq = gruposFiltrado;
//   });
//   return eq;
// }
