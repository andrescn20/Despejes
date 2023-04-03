import Botones from './Botones';
import Extractor from 'extract-brackets';
import React, { useEffect } from 'react';
import nerdamer from 'nerdamer';

export default function Factores({ equation, changeCurrentFactor }) {
  const [equationFactors, setEquationFactors] = React.useState([]);

  var ExtractParents = new Extractor('(');

  // Primero voy a definir una función que extraiga el texto entre paréntesis

  function parentesis(string) {
    let grupos = [];
    let extract = ExtractParents.extract(string);
    for (let i = 0; i < extract.length; i++) {
      //Grupos grandes
      grupos.push(extract[i].str);
      for (let j = 0; j < extract[i].nest.length; j++) {
        //Paréntesis dentro de parentesis
        grupos.push(extract[i].nest[j].str);
      }
    }

    let filtrado = grupos.filter((x) => x !== undefined); //Se eliminan los grupos undefined
    return filtrado;
  }

  // Ahora voy a crear una función que elemina de los strings el texto dentro de un paréntesis

  function eliminarGrupoParentesis(string) {
    let gruposFiltrado;
    let eq = string;
    let grupos = parentesis(eq); //Se extraen los grupos
    for (let i = 0; i < grupos.length; i++) {
      gruposFiltrado = eq.replace(grupos[i], '');
      eq = gruposFiltrado;
    }
    return eq;
  }

  // Funcion para eliminar terminos no matematicos
  // Devuelve true si es un término no matemático
  // Devuelve false si es un término matemático
  // No matematico solo incluye / * ( )

  function noMatematico(str) {
    //let output = str.replaceAll("()", "");
    let output = /^[*/() ]+$/.test(str);
    return output;
  }

  // Funcion que depara por sumas y restas

  function sumaResta(str) {
    let eq = str;
    let eqFiltrado = eliminarGrupoParentesis(eq);
    let output = eqFiltrado.split(/[+-]+/);
    let outputFiltrado = []; //Array con solo elementos matematicos, pero puede haber repetidos
    for (let i = 0; i < output.length; i++) {
      if (!noMatematico(output[i])) {
        //Es decir, si es un término matemático
        outputFiltrado.push(output[i]);
      }
    }

    // Eliminar elementos repetidos
    var uniqueOutput = [];
    outputFiltrado.forEach((c) => {
      if (!uniqueOutput.includes(c)) {
        uniqueOutput.push(c);
      }
    });
    return uniqueOutput;
  }

  //Funcion que separa multiplicaciones y divisiones

  function multDiv(str) {
    let eq = str;
    let eqFiltrado = eliminarGrupoParentesis(eq);
    eqFiltrado = eqFiltrado.replaceAll('^()', '');
    let output = eqFiltrado.split(/[*/+-]+/);
    //console.log("output", output);
    let outputFiltrado = [];
    for (let i = 0; i < output.length; i++) {
      if (!noMatematico(output[i])) {
        //Es decir, si es un término matemático
        outputFiltrado.push(output[i]);
      }
    }
    return outputFiltrado;
  }

  //  Aqui la función para separar fracciones

  function fracciones(str) {
    let eqOriginal = str;
    // Primero se extrae el texto de los parentesis
    let parentesisOriginal = [];
    parentesisOriginal = parentesis(eqOriginal);
    parentesisOriginal = parentesisOriginal.sort(function (a, b) {
      return b.length - a.length;
    }); // https://stackoverflow.com/questions/10630766/how-to-sort-an-array-based-on-the-length-of-each-element
    //console.log("parentesisOriginal", parentesisOriginal);
    // Se modifica el texto de los parentesis con MAS y MENOS
    let parentesisCambiado = [];
    for (let i = 0; i < parentesisOriginal.length; i++) {
      let a = parentesisOriginal[i].replaceAll('+', 'MAS');
      let b = a.replaceAll('-', 'MENOS');
      parentesisCambiado.push(b);
    }
    //console.log("parentesisCambiado", parentesisCambiado);
    //Ahora se crea un string donde se cambia + por MAS y - por MENOS
    let eqCambiado = eqOriginal;
    for (let j = 0; j < parentesisOriginal.length; j++) {
      eqCambiado = eqOriginal.replace(
        parentesisOriginal[j],
        parentesisCambiado[j]
      );
      eqOriginal = eqCambiado;
    }
    //console.log("eqCambiado", eqCambiado);
    // Ahora vamos a separar por + y -
    let outputOriginal = eqCambiado.split(/[+-]+/);

    //console.log("outputOriginal", outputOriginal);
    // Ahora se crea la variable que se sustituye MAS por + y MENOS por -
    let outputCambiado = [];
    for (let k = 0; k < outputOriginal.length; k++) {
      let c = outputOriginal[k].replaceAll('MAS', '+');
      let d = c.replaceAll('MENOS', '-');
      outputCambiado.push(d);
    }
    //console.log("outputCambiado", outputCambiado);
    return outputCambiado;
  }

  // Aqui voy a definir la función que calcula los grupos de factores

  function grupos(eq) {
    // Se define el arreglo con los grupos
    var grupos = [];
    //Primero separar el lado izquiero del derecho
    let lados = eq.split('=');
    for (let i = 0; i < lados.length; i++) {
      let gruposParentesis = parentesis(lados[i]);
      let gruposSumaResta = sumaResta(lados[i]);
      let gruposMultDiv = multDiv(lados[i]);
      let gruposFracciones = fracciones(lados[i]);

      grupos = grupos.concat(gruposParentesis);
      grupos = grupos.concat(gruposSumaResta);
      grupos = grupos.concat(gruposMultDiv);
      grupos = grupos.concat(gruposFracciones);
    }

    // console.log('grupos', grupos);
    // Eliminar parentesis vacíos
    var gruposFiltrado = [];
    for (let j = 0; j < grupos.length; j++) {
      if (!noMatematico(grupos[j])) {
        //Es decir, si es un término matemático
        gruposFiltrado.push(grupos[j]);
      }
    }

    // Ahora revisar que no queden paréntesis "()" vacíos
    var gruposFiltrado2 = [];
    for (let k = 0; k < gruposFiltrado.length; k++) {
      if (
        !gruposFiltrado[k].includes('()') &&
        gruposFiltrado[k] !== '0' &&
        gruposFiltrado[k].split('(').length - 1 ===
          gruposFiltrado[k].split(')').length - 1
      ) {
        // Se agrega un seguro para impedir que "0" sea un factor
        gruposFiltrado2.push(gruposFiltrado[k].replaceAll(/\s/g, '')); //Se eliminan los espacios en blanco
      }
    }
    gruposFiltrado2.push('-1'); //Se agrega -1 por defecto
    gruposFiltrado2.push('1');
    gruposFiltrado2.push('2');
    gruposFiltrado2.push('3');
    gruposFiltrado2.push('4');
    gruposFiltrado2.push('5');
    gruposFiltrado2.push('6');
    gruposFiltrado2.push('7');
    gruposFiltrado2.push('8');
    gruposFiltrado2.push('9');

    // console.log('gruposFiltrado2', gruposFiltrado2);
    let gruposFiltrado3 = gruposFiltrado2.filter((x) => x !== undefined); //Se eliminan los grupos undefined

    // console.log('gruposFiltrado3 original', gruposFiltrado3);

    //Aqui empieza el intento para hacer que todos sean factores bonitos
    // console.log('gruposFiltrado3.length', gruposFiltrado3.length);
    for (let m = 0; m < gruposFiltrado3.length; m++) {
      gruposFiltrado3[m] = gruposFiltrado3[m].replaceAll('abs', ''); //Se eliminan los valores absolutos, para permitir las raices cuadradas

      //nerdamer(gruposFiltrado3[m]).text('fractions') se encarga de que el programa no convierta las cosas a decimal
      //La función convertToLaTeX() básicamente lo que hace es convertir a un formato de latex donde
      // agarra la convención de poner ^(-1) de nerdamer, y transformar a \frac{}{} de laTeX
      gruposFiltrado3[m] = nerdamer.convertToLaTeX(
        nerdamer(gruposFiltrado3[m]).text('fractions')
      );
      gruposFiltrado3[m] = gruposFiltrado3[m].replaceAll('^{1}', ''); //Eliminar los a la uno redundantes
      //console.log("gruposFiltrado3", m, gruposFiltrado3[m]);
    }
    // console.log('gruposFiltrado3', gruposFiltrado3);
    // console.log('sin repetir', [...new Set(gruposFiltrado3)]);
    // Aquí termina el arreglo
    setEquationFactors([...new Set(gruposFiltrado3)]); //Para eliminar términos repetidos
  }

  const sendCurrentOperation = (currentOperation) => {
    changeCurrentFactor(currentOperation);
  };

  //   const removeParenthesis = (array) => {
  //     //Funcion para remover parentesis cuando sea necesario
  //     return array.replace(/\(|\)/g, '');
  //   };

  // function equationSeparator() {
  //     //Funcion principal que separa los distintos factores
  //     let monomios = removeParenthesis(equation).split(/\+|-|=/); //Remueve parentesis y luego separa en monomios

  //     let flatMultiplication = equation.replace(/\)\(/g, '*'); //Homogeniza la notacion p[ara multiplicacion
  //     let factors = removeParenthesis(flatMultiplication).split(/\*|\/|=/); //Remueve parentesis y luego separa todos los factores correspondientes
  //     let allFactors = monomios.concat(factors); //Unificacion de todos los factores generados

  //     let finalFactors = [...new Set(allFactors)]; //Elimina los monomios repetidos

  //     console.log("finalFactors", finalFactors);

  //     setEquationFactors(finalFactors); //Modifica el estado definido
  // }

  useEffect(() => {
    grupos(equation);
  }, [equation]);

  return (
    <div>
      <Botones
        factores={equationFactors}
        sendCurrentOperation={sendCurrentOperation}
      />
    </div>
  );
}
