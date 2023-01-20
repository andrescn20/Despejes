// Para usar la libreria extract-brackets
// npm i extract-brackets

var Extractor = require('extract-brackets');

var ExtractParents = new Extractor('(');


// Estos comentarios son para aprender a usar el Extractor

// var out2 = ExtractParents.extract('(2x+1)/((3x+4)*(5x+6)) + 5');

// console.log(out2);
// console.log(out2[0].str); //2x+1
// console.log(out2[1].str); //(3x+4)*(5x+6)
// console.log(out2[1].nest[0].str); //(3x+4)
// console.log(out2[1].nest[2].str); //5x+6

// console.log(out2.length, out2[1].nest.length);

// console.log("Ahora a probar las funciones");

// Primero voy a definir una función que extraiga el texto entre paréntesis

function parentesis(string) {
    let grupos = []
    let extract = ExtractParents.extract(string);
    for (let i = 0; i < extract.length; i++){  //Grupos grandes
        grupos.push(extract[i].str);
        for(let j=0; j < extract[i].nest.length; j++){  //Paréntesis dentro de parentesis
            grupos.push(extract[i].nest[j].str);
        }
    }

    let filtrado = grupos.filter(x => x !== undefined); //Se eliminan los grupos undefined
    return filtrado;
}

// Ahora voy a crear una función que elemina de los strings el texto dentro de un paréntesis

function eliminarGrupoParentesis(string){
    let eq = string;
    let grupos = parentesis(eq);  //Se extraen los grupos
    for (let i = 0; i < grupos.length; i++){
        gruposFiltrado = eq.replace(grupos[i], '');
        eq = gruposFiltrado;
    }
    return eq;
}

// Funcion para eliminar terminos no matematicos
// Devuelve true si es un término no matemático
// Devuelve false si es un término matemático
// No matematico solo incluye / * ( )

function noMatematico(str){
    let output = /^[*/() ]+$/.test(str);
    return output;
}

// Funcion que depara por sumas y restas

function sumaResta(str){
    let eq = str;
    let eqFiltrado = eliminarGrupoParentesis(eq);
    let output = eqFiltrado.split(/[+-]+/);
    let outputFiltrado = []; //Array con solo elementos matematicos, pero puede haber repetidos
    for (let i = 0; i < output.length; i++){
        if (!noMatematico(output[i])) {  //Es decir, si es un término matemático
            outputFiltrado.push(output[i]);
        }
    }

    // Eliminar elementos repetidos
    var uniqueOutput = []
    outputFiltrado.forEach((c) => {
        if (!uniqueOutput.includes(c)) {
            uniqueOutput.push(c);
        }
    });
    return uniqueOutput;
}

//Funcion que separa multiplicaciones y divisiones

function multDiv(str){
    let eq = str;
    let eqFiltrado = eliminarGrupoParentesis(eq);
    let output = eqFiltrado.split(/[*/+-]+/);
    let outputFiltrado = [];
    for (let i = 0; i < output.length; i++) {
        if (!noMatematico(output[i])) {  //Es decir, si es un término matemático
            outputFiltrado.push(output[i]);
        }
    }
    return outputFiltrado
}

// Aqui voy a definir la función que calcula los grupos de factores

function grupos(eq) {
    // Se define el arreglo con los grupos 
    var grupos = [];
    //Primero separar el lado izquiero del derecho
    let lados = eq.split("=");
    for (i=0; i<lados.length; i++){
        let gruposParentesis = parentesis(lados[i]);
        let gruposSumaResta = sumaResta(lados[i]);
        let gruposMultDiv = multDiv(lados[i]);
        
        grupos = grupos.concat(gruposParentesis);
        grupos = grupos.concat(gruposSumaResta);
        grupos = grupos.concat(gruposMultDiv);
    }
    // Eliminar parentesis vacíos
    var gruposFiltrado = [];
    for(j=0; j<grupos.length; j++){
        if (!noMatematico(grupos[j])) {  //Es decir, si es un término matemático
            gruposFiltrado.push(grupos[j]);
        }
    }

    // Ahora revisar que no queden paréntesis "()" vacíos
    var gruposFiltrado2 = [];
    for(let k=0; k< gruposFiltrado.length; k++){
        if (!gruposFiltrado[k].includes("()")){
            gruposFiltrado2.push(gruposFiltrado[k].replaceAll(/\s/g, '')); //Se eliminan los espacios en blanco
        }
    }
    return [...new Set(gruposFiltrado2)]; //Para eliminar términos repetidos
}



//Pruebas
var eq1 = "v=d/t";
console.log("grupos de la ecuacion", eq1, "\n", grupos(eq1));

var eq2 = "a=(vf-vi)/t";
console.log("grupos de la ecuacion \n", eq2, "\n", grupos(eq2));

var eq3 = "d = vi*t + a*t**2/2";
console.log("grupos de la ecuacion \n", eq3, "\n", grupos(eq3));

var eq4 = "vf**2 = vi**2 + 2*a*d";
console.log("grupos de la ecuacion \n", eq4, "\n", grupos(eq4));

var eq5 = "d = (vf+vi)*t/2";
console.log("grupos de la ecuacion \n", eq5, "\n", grupos(eq5));

var eq6 = "5 = 1/(x+5) + 3";
console.log("grupos de la ecuacion \n", eq6, "\n", grupos(eq6));

var eq7 = "6*x + 8 = 2*x +9";
console.log("grupos de la ecuacion \n", eq7, "\n", grupos(eq7));

var eq8 = "1 = (x+4)/(3*x+8)";
console.log("grupos de la ecuacion \n", eq8, "\n", grupos(eq8));







