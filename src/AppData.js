//Un array de objectos, donde cada objeto es una equation.
//Mejor de momento no ponerle nombre a las equationes
//No se me ocurre un nombre apropiado, y además es más fácil identificarlas con números
//No se incluye como variable aquellas que ya están despejadas

const AppData = {
  equationsList: [
    {
      name: "Cinemática",
      equations: [
        {
          sympy: "Eq(v, d/t)",
          latex: "v=\\frac{d}{t}",
          factors: [{ lx: "v", sy: "v" }, { lx: "d", sy: "d" }, { lx: "t", sy: "t" }],
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
          factors: [
            "a",
            "v_f",
            "v_i",
            "d",
            "2",
            "v_f^2",
            "v_i^2",
            "a \\cdot d",
          ],
          variables: ["a", "v_f", "v_i", "d"],
        },
        {
          sympy: "Eq(d, v_i*t+a*t**2/2)",
          latex: "d=v_i\\cdot t+a\\cdot \\frac{t^2}{2}",
          factors: [
            "d",
            "v_i",
            "a",
            "t",
            "2",
            "v_i \\cdot t",
            "\\frac{at^2}{2}",
          ],
          variables: ["v_i", "a", "t", "2"],
        },
        {
          sympy: "Eq(d, (v_f+v_i)*\\frac{t}{2})",
          latex: "d=(v_f+v_i)\\cdot \\frac{t}{2}",
          factors: [
            "d",
            "v_i",
            "v_f",
            "t",
            "2",
            "(v_f + v_i)",
            "(v_f + v_i) \\cdot \\frac{t}{2}",
          ],
          variables: ["v_i", "v_f", "t"],
        },
      ],
    },
    {
      name: "Caída libre",
      equations: [
        {
          sympy: "Eq(v_f, v_i - g*t)",
          latex: "v_f = v_i - g*t",
          factors: ["v_f", "v_i", "g", "t", "g \\cdot t"],
          variables: ["g", "v_i", "t"],
        },
        {
          sympy: "Eq(v_f**2, v_i**2 - 2 * g * (y_f - y_i))",
          latex: "v_f^2=v_i^2 - 2 \\cdot g \\cdot d",
          factors: [
            "g",
            "v_f",
            "v_i",
            "y_f",
            "y_i",
            "(y_f-y_i)",
            "2",
            "v_f^2",
            "v_i^2",
            "g \\cdot d",
          ],
          variables: ["g", "v_f", "v_i", "y_f", "y_i"],
        },
        {
          sympy: "Eq(y_f - y_i, v_i*t-g*t**2/2)",
          latex: "y_f - y_i=v_i\\cdot t - \\frac{g\\cdot t^2}{2}",
          factors: [
            "y_f",
            "y_i",
            "(y_f - y_i)",
            "v_i",
            "g",
            "t",
            "2",
            "v_i \\cdot t",
            "g \\cdot \\frac{t^2}{2}",
          ],
          variables: ["v_i", "g", "t", "2", "y_f", "y_i"],
        },
      ],
    },

    {
      name: "Dinámica",
      equations: [
        {
          sympy: "Eq(F, m * a)",
          latex: "F = m \\cdot a",
          factors: ["F", "m", "a"],
          variables: ["m", "a"],
        },
        {
          sympy: "Eq(W, m * g)",
          latex: "W = m \\cdot g",
          factors: ["W", "m", "g"],
          variables: ["m", "g"],
        },
        {
          sympy: "Eq(f, -k * x)",
          latex: "f = - k\\cdot x",
          factors: ["f", "k", "x"],
          variables: ["k", "x"],
        },
      ],
    },
    {
      name: "Gravitación",
      equations: [
        {
          sympy: "Eq((r_1)**3/(T_1)**2, (r_2)**3/(T_2)**2)",
          latex: "\\frac{r_1^3}{T_1^2} = \\frac{r_2^3}{T_2^2}",
          factors: [
            "r_1^3",
            "T_1^2",
            "r_2^3",
            "T_2^2",
            "r_1",
            "r_2",
            "T_1",
            "T_2",
          ],
          variables: ["r_1", "r_2", "T_1", "T_2"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(F_g, G * m_1 * m_2/r**2)",
          latex: "F_g = \\frac{G * m_1 * m_2}{r^2}",
          factors: ["F_g", "G", "m_1", "m_2", "r"],
          variables: ["G", "m_1", "m_2", "r"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(g, G * M/(R+h)**2)",
          latex: "g = \\frac{G * M}{(R + h)^2}",
          factors: ["g", "G", "M", "(R+h)", "R", "h"],
          variables: ["G", "M", "R", "h"], //v no es una variable, ¡Porque ya está despejada!
        },
      ],
    },
    {
      name: "Electromagnetismo",
      equations: [
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
      ],
    },
  ],
  operationsList: {
    basic: [
      { name: "Sumar", symbol: "+" },
      { name: "Restar", symbol: "-" },
      { name: "Multiplicar", symbol: "x" },
      { name: "Dividir", symbol: "/" },
      { name: "Potencia", symbol: "^" },
      {
        name: "Raiz",
        symbol: (
          <svg
            width="14"
            viewBox="0 0 19 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2223 0.191999H18.7023L11.3343 22.656H7.47025L3.43825 11.04H0.294252V8.136H6.19825L9.77425 19.128H9.03025L15.2223 0.191999Z"
              fill="#D9D9D9"
            />
          </svg>
        ),
      },
    ],
    helpers: [
      { name: "Simplificar", symbol: "SIMPLIFICAR" },
      { name: "Expandir", symbol: "EXPANDIR" },
    ],
  },
};

export default AppData;
