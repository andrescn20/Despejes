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
            latex: "v=d/t",
            factors: ["v", "d", "t"],
            variables: ["d", "t"], //v no es una variable, ¡Porque ya está despejada!
          },
          {
            sympy: "Eq(a, (v_f-v_i)/t)",
            latex: "a=(v_f-v_i)/t",
            factors: ["a", "v_f", "v_i", "t", "a*t"],
            variables: ["v_f", "v_i", "t"],
          },
          {
            sympy: "Eq(v_f**2, v_i**2 + 2 * a * d)",
            latex: "v_f^2=v_i^2 + 2 \\cdot a \\cdot d",
            factors: ["a", "v_f", "v_i", "d", "2", "v_f**2", "v_i**2", "a * d"],
            variables: ["a", "v_f", "v_i", "d"],
          },
          {
            sympy: "Eq(d, v_i*t+a*t**2/2)",
            latex: "d=v_i\\cdot t+a\\cdot t^2/2",
            factors: ["d", "v_i", "a", "t", "2", "v_i*t", "at**2/2"],
            variables: ["v_i", "a", "t", "2"],
          },
          {
            sympy: "Eq(d, (v_f+v_i)*t/2)",
            latex: "d=(v_f+v_i)\\cdot t/2",
            factors: ["d","v_i","v_f","t","2","(v_f + v_i)","(v_f + v_i) * t / 2",],
            variables: ["v_i", "v_f", "t"],
          },
        ]},
      {name: 'Electromagnetismo',
      equations:[
        {
          sympy: "Eq(E, d/t)",
          latex: "E=(k/r^2)(q_1\\cdot q_2)",
          factors: ["k", "q_1", "q_2", "r"],
          variables: ["d", "t"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(v, d/t)",
          latex: "v=d/t",
          factors: ["v", "d", "t"],
          variables: ["d", "t"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(v, d/t)",
          latex: "v=d/t",
          factors: ["v", "d", "t"],
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
      { name: "Potencia", symbol: "^" },
      { name: "Raiz", symbol: "raiz" },
    ],
    helpers: [{name:"Simplificar" , symbol:"Simplificar"},{name: "Expandir", symbol:"Expandir"}],
  },
};

export default AppData;
