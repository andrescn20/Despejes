//Un array de objectos, donde cada objeto es una equation.
//Mejor de momento no ponerle nombre a las equationes
//No se me ocurre un nombre apropiado, y además es más fácil identificarlas con números
//No se incluye como variable aquellas que ya están despejadas

const AppData = {
  equationsList:
    [
      {name: 'Cinemática',
      equations: [
          {
            sympy: "Eq(v, d/t)",
            latex: "v=\\frac{d}{t}",
            factors: ["v", "d", "t"],
            variables: ["d", "t"], //v no es una variable, ¡Porque ya está despejada!
          },
          {
            sympy: "Eq(a, (v_f-v_i)/t)",
            latex: "a=\\frac{v_f-v_i}{t}",
            factors: ["a", "v_f", "v_i", "t", "a \\cdot t"],
            variables: ["v_f", "v_i", "t"],
          },
          {
            sympy: "Eq(v_f**2, v_i**2 + 2 * a * d)",
            latex: "v_f^2=v_i^2 + 2 \\cdot a \\cdot d",
            factors: ["a", "v_f", "v_i", "d", "2", "v_f^2", "v_i^2", "a \\cdot d"],
            variables: ["a", "v_f", "v_i", "d"],
          },
          {
            sympy: "Eq(d, v_i*t+a*t**2/2)",
            latex: "d=v_i\\cdot t+a\\cdot \\frac{t^2}{2}",
            factors: ["d", "v_i", "a", "t", "2", "v_i \\cdot t", "\\frac{at^2}{2}"],
            variables: ["v_i", "a", "t", "2"],
          },
          {
            sympy: "Eq(d, (v_f+v_i)*t/2)",
            latex: "d=(v_f+v_i)\\cdot t/2",
            factors: ["d","v_i","v_f","t","2","(v_f + v_i)","(v_f + v_i) \\cdot t / 2",],
            variables: ["v_i", "v_f", "t"],
          },
        ]},
      {name: 'Electromagnetismo',
      equations:[
        {
          sympy: "Eq(E , (k/r**2)(q_1))",
          latex: "E=(k/r^2)(q_1)",
          factors: ["k", "q_1", "q_2", "r"],
          variables: ["d", "t"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(F , (k/r**2)(q_1*q_2))",
                    latex: "F=(k/r^2)(q_1\\cdot q_2)",
          factors: ["k", "q_1", "q_2", "r"],
          variables: ["d", "t"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(V , (k/r)(q_1))",
                    latex: "V=(k/r)(q_1)",
          factors: ["k", "q_1", "q_2", "r"],
          variables: ["d", "t"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(U , (k/r)(q_1*q_2))",
                    latex: "U=(k/r)(q_1\\cdot q_2)",
          factors: ["k", "q_1", "q_2", "r"],
          variables: ["d", "t"], //v no es una variable, ¡Porque ya está despejada!
        },
      ]}
    ],
  operationsList: {
    basic: [
      { name: "Sumar", symbol: "+" },
      { name: "Restar", symbol: "-" },
      { name: "Multiplicar", symbol: "x" },
      { name: "Dividir", symbol: "/" },
      { name: "Potencia", symbol: "^"},
      { name: "Raiz", symbol: <svg width="14" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2223 0.191999H18.7023L11.3343 22.656H7.47025L3.43825 11.04H0.294252V8.136H6.19825L9.77425 19.128H9.03025L15.2223 0.191999Z" fill="#D9D9D9"/>
      </svg>
       },
    ],
    helpers: [{name:"Simplificar" , symbol:"SIMPLIFICAR"},{name: "Expandir", symbol:"EXPANDIR"}],
  },
};

export default AppData;
