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
    this.eq = eq//.nerdamer.text('fractions'); //String de la ecuación, en formato de nerdamer
    this.eqLeft = undefined; //Se guardará el lado izquierdo de la ecuación
    this.eqRight = undefined; //Se guardará el lado derecho de la ecuación
    this.Latex = undefined; //Se guardará un string en formato de latex
  }

  setEquation() {
    //Método para establecer los lados de la ecuación
    let parts = this.eq.split('='); //Separa el lado izquierdo y el lado derecho de la ecuación
    this.eqLeft = parts[0]; //Lado izquierdo
    this.eqRight = parts[1]; //Lado derecho
    //this.Latex = nerdamer(this.eq).toTeX(); //Crea un string con la ecuación en Latex
    //this.Nerd = nerdamer(this.eq);
    this.Latex = nerdamer.convertToLaTeX(this.eq);
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
    console.log('a', a);
    this.eqLeft = nerdamer('(' + this.eqLeft + ')*(' + a + ')');
    this.eqRight = nerdamer('(' + this.eqRight + ')*(' + a + ')');
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
    console.log("this.Latex", this.Latex);
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
  power(a) {
    //Eleva al cuadrado
    this.eqLeft = nerdamer('(' + this.eqLeft + ')^(' + a + ')');
    this.eqRight = nerdamer('(' + this.eqRight + ')^(' + a + ')');
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }

  negativePower(a) {
    //Eleva al cuadrado
    //Hay que agregar una rutina para eliminar los abs
    this.eqLeft = this.eqLeft.replaceAll("abs", "");
    this.eqRight = this.eqRight.replaceAll("abs", "");
    
    this.eqLeft = nerdamer('(' + this.eqLeft + ')^(1/' + a + ')');
    this.eqRight = nerdamer('(' + this.eqRight + ')^(1/' + a + ')');
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
  expand() {
    //Hace una expanción de la expresión matemática
    this.eqLeft = nerdamer('expand(' + this.eqLeft + ')');
    this.eqRight = nerdamer('expand(' + this.eqRight + ')');
    this.eq = this.eqLeft + '=' + this.eqRight;
    this.Latex = nerdamer(this.eq).toTeX();
  }
}

export default Equation;
