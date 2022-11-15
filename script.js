const nerdamer = require('nerdamer/all.min'); //Importar nerdamer

/*
La clase Equation contiene los métodos para manipular una ecuación.
Luego se debe investigar como sacar exponentes, raíces, etc...
También se debe investigar cómo presentar las ecuaciones en un formato 
agradable, como LaTex o MathML...

Probablmente sea una buena idea hacer que en la multiplicacion y division
se encierre en un paréntesis los factores que ya estaban.
*/

class Equation {
  constructor(eq) {
    //Método constructor, toma como argumento un string con la ecuación a analizar
    this.eq = eq; //String de la ecuación, en formato de nerdamer
    this.eqLeft = undefined; //Se guardará el lado izquierdo de la ecuación
    this.eqRight = undefined; //Se guardará el lado derecho de la ecuación
    this.Latex = undefined; //Se guardará un string en formato de latex
  }

  setEquation() {
    //Método para establecer los lados de la ecuación
    let parts = this.eq.split('='); //Separa el lado izquierdo y el lado derecho de la ecuación
    this.eqLeft = parts[0]; //Lado izquierdo
    this.eqRight = parts[1]; //Lado derecho
    this.Latex = nerdamer(this.eq).toTeX(); //Crea un string con la ecuación en Latex
  }

  sumaUno() {
    //Suma 1 a ambos lados
    this.eqLeft = nerdamer(this.eqLeft.concat('+1')).toString();
    this.eqRight = nerdamer(this.eqRight.concat('+1')).toString();
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }

  suma(a) {
    //Suma el argumento
    this.eqLeft = nerdamer(this.eqLeft + '+' + a); //Suma el argumento al lado izquierdo
    this.eqRight = nerdamer(this.eqRight + '+' + a); //Suma el argumento al lado derecho
    this.eq = this.eqLeft + '=' + this.eqRight; //Vuelve a montar la ecuación
    this.Latex = nerdamer(this.eq).toTeX(); //Crea un string con la ecuación en Latex
  }
  // Los siguientes métodos son muy parecidos entre sí
  resta(a) {
    //Resta el argumento
    this.eqLeft = nerdamer(this.eqLeft + '-' + a);
    this.eqRight = nerdamer(this.eqRight + '-' + a);
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }

  mult(a) {
    //Multiplica el argumento
    this.eqLeft = nerdamer('(' + this.eqLeft + ')*(' + a + ')');
    this.eqRight = nerdamer('(' + this.eqRight + ')*(' + a + ')');
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }

  div(a) {
    //Divide el argumento
    this.eqLeft = nerdamer('(' + this.eqLeft + ')/(' + a + ')');
    this.eqRight = nerdamer('(' + this.eqRight + ')/(' + a + ')');
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }

  square() {
    //Eleva al cuadrado
    this.eqLeft = nerdamer('(' + this.eqLeft + ')^2');
    this.eqRight = nerdamer('(' + this.eqRight + ')^2');
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }

  root() {
    //Saca raíz cuadrada
    this.eqLeft = nerdamer('sqrt(' + this.eqLeft + ')');
    this.eqRight = nerdamer('sqrt(' + this.eqRight + ')');
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }

  simplify() {
    //Hace una simplificación de la expresión matemática
    this.eqLeft = nerdamer('simplify(' + this.eqLeft + ')');
    this.eqRight = nerdamer('simplify(' + this.eqRight + ')');
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }

  bits() {
    //Extrae los bloques con los que se deben hacer los botones

    /* Se crean unos string del lado izquierdo y derecho de la ecuacion
        donde se expande
        */
    var leftExpand = nerdamer('expand(' + this.eqLeft + ')').toString();
    var rightExpand = nerdamer('expand(' + this.eqRight + ')').toString();

    /* Se crea el array bits, que contiene todos los string donde iran los nombres
        de los botones sugeridos para ser incluidos en cada nivel
        */

    /* Se incluyen los elementos separados por sumas y restas del lado izquierdo
        de la ecuación
         */
    var bits = leftExpand.split(/\+|-/);

    /* Se concatenan los elementos separados por suma y resta del lado derecho
        de la ecuación
        */

    bits = bits.concat(rightExpand.split(/\+|-/));

    /* Se crean unos string del lado izquierdo y derecho de la ecuacion
        donde se factorizan
        */

    var leftFactor = nerdamer('factor(' + this.eqLeft + ')').toString();
    var rightFactor = nerdamer('factor(' + this.eqRight + ')').toString();

    /* Se concatenan los elementos separados por multiplicacion 
        y division del lado izquierdo y derecho de la ecuación
        */
    bits = bits.concat(leftFactor.split(/\*|\//));
    bits = bits.concat(rightFactor.split(/\*|\//));

    /* Se concatenan los elementos separados por "*(" 
        y ")*" del lado izquierdo y derecho de la ecuación
        */

    bits = bits.concat(leftFactor.split(/\)\*|\*\(/));
    bits = bits.concat(rightFactor.split(/\)\*|\*\(/));

    /* Se concatenan los elementos separados por "/("
        y ")/" del lado izquierdo y derecho de la ecuación
        */

    bits = bits.concat(leftFactor.split(/\)\/|\/\(/));
    bits = bits.concat(rightFactor.split(/\)\/|\/\(/));

    var len = bits.length; //Esta variable cuadra el largo del array bits

    // Se eliminan los paréntesis del array bits
    for (let i = 0; i < len; i++) {
      bits[i] = bits[i].replace('(', '').replace(')', '');
    }

    // Elimina elementos vacíos ""
    bits = bits.filter((item) => item);

    len = bits.length; //Esta variable cuadra el largo del array bits

    /*Se verifica por si algún elemento puede ser simplificado
        por ejemplo, a veces se puede reemplazar 'x+x' por '2x'
        */

    for (let i = 0; i < len; i++) {
      bits[i] = nerdamer(bits[i]).toString();
    }

    //Elimina elementos repetidos
    bits = [...new Set(bits)];

    //Imprime el array
    console.log('Los botones sugeridos son: ');
    console.log(bits);
  }
}

// Esto es para probar la clase Equation()
const equation = new Equation('x^2+2*x+1=2*y+4*x+8*x*y');
equation.setEquation();
console.log('La ecuación es:');
console.log(equation.eq);
equation.bits();
//Despejar v
//equation.div("t");
////console.log(equation.eq)
//Despejar t
//equation.mult("t");
//equation.div("v");
//console.log(equation.eq);
//Eleva al cuadrado
//equation.square();
//console.log(equation.eq);
//Saca raíz
//equation.root();
//console.log(equation.eq);
//Simplifica
//equation.simplify();
//console.log(equation.eq);
//Saca raíz de nuevo
//equation.root();
//console.log(equation.eq);
//Imprime el latex
//console.log(equation.Latex);
