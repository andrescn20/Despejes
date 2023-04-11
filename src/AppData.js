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
                    factors: [{ lx: "a", sy: "a" }, { lx: "v_f", sy: "v_f" }, { lx: "v_i", sy: "v_i" }, { lx: "t", sy: "t" }, { lx: "a \\cdot t", sy: "a * t"}],
                    variables: ["v_f", "v_i", "t"],
                },
                {
                    sympy: "Eq(v_f**2, v_i**2 + 2 * a * d)",
                    latex: "v_f^2=v_i^2 + 2 \\cdot a \\cdot d",
                    factors: [
                        {
                            lx: "a", sy: "a"},
                        {
                            lx: "v_f", sy: "v_f"},
                        {
                            lx: "v_i", sy: "v_i"},
                        {
                            lx: "d", sy: "d"},
                        {
                            lx: "2", sy: "2"},
                        {
                            lx: "v_f^2", sy: "v_f**2"},
                        {
                            lx: "v_i^2", sy: "v_i**2"},
                        { lx: "a \\cdot d", sy: "a * d"}
                    ],
                    variables: ["a", "v_f", "v_i", "d"],
                },
                {
                    sympy: "Eq(d, v_i*t+a*t**2/2)",
                    latex: "d=v_i\\cdot t+a\\cdot \\frac{t^2}{2}",
                    factors: [
                        {
                            lx:"d",sy: "d"},
                        {
                            lx:"v_i",sy: "v_i"},
                        {
                            lx:"a",sy: "a"},
                        {
                            lx:"t",sy: "t"},
                        {
                            lx:"2", sy: "2"},
                        {
                            lx: "v_i \\cdot t", sy: "v_i * t"},
                        {
                            lx: "\\frac{at^2}{2}", sy: "a*t**2/2" },
                    ],
                    variables: ["v_i", "a", "t", "2"],
                },
                {
                    sympy: "Eq(d, (v_f+v_i)*\\frac{t}{2})",
                    latex: "d=(v_f+v_i)\\cdot \\frac{t}{2}",
                    factors: [
                        {
                            lx:"d",sy: "d"},
                        {
                            lx:"v_i",sy: "v_i"},
                        {
                            lx:"v_f",sy: "v_f"},
                        {
                            lx:"t",sy: "t"},
                        {
                            lx:"2",sy: "2"},
                        {
                            lx: "(v_f + v_i)", sy: "v_f + v_i"},
                        {
                            lx: "(v_f + v_i) \\cdot \\frac{t}{2}", sy: "(v_f + v_i) * t/2"}
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
                    latex: "v_f = v_i - g \\cdot t",
                    factors: [{ lx: "g", sy: "g" }, { lx: "v_f", sy: "v_f" }, { lx: "v_i", sy: "v_i" }, { lx: "t", sy: "t" }, { lx: "g \\cdot t", sy: "g * t"}],
                    variables: ["g", "v_i", "t"],
                },
                {
                    sympy: "Eq(v_f**2, v_i**2 - 2 * g * (y_f - y_i))",
                    latex: "v_f^2=v_i^2 - 2 \\cdot g \\cdot d",
                    factors: [
                        {
                            lx:"g",sy: "g"},
                        {
                            lx:"v_f",sy: "v_f"},
                        {
                            lx:"v_i",sy: "v_i"},
                        {
                            lx:"y_f",sy: "y_f"},
                        {
                            lx:"y_i",sy: "y_i"},
                        {
                            lx: "(y_f-y_i)", sy: "(y_f-y_i)"},
                        {
                            lx:"2",sy: "2"},
                        {
                            lx:"v_f^2",sy: "v_f**2"},
                        {
                            lx:"v_i^2",sy: "v_i**2"},
                        {
                            lx:"g \\cdot d",sy: "g*d"}
                    ],
                    variables: ["g", "v_f", "v_i", "y_f", "y_i"],
                },
                {
                    sympy: "Eq(y_f - y_i, v_i*t-g*t**2/2)",
                    latex: "y_f - y_i=v_i \\cdot t - \\frac{g\\cdot t^2}{2}",
                    factors: [
                        {
                            lx:"y_f",sy: "y_f"},
                        {
                            lx:"y_i",sy: "y_i"},
                        {
                            lx:"(y_f - y_i)", sy: "(y_f-y_i)"},
                        {
                            lx:"v_i", sy: "v_i"},
                        {
                            lx:"g",sy: "g"},
                        {
                            lx:"t",sy: "t"},
                        {
                            lx:"2",sy: "2"},
                        {
                            lx:"v_i \\cdot t",sy: "v_i*t"},
                        {
                            lx: "g \\cdot \\frac{t^2}{2}", sy: "g * t**2/2"}
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
                    factors: [{
                        lx: "F", sy: "F"
                    },
                        {
                            lx: "m", sy: "m"
                        },
                        {
                            lx: "a", sy: "a"
                        }],
                    variables: ["m", "a"],
                },
                {
                    sympy: "Eq(W, m * g)",
                    latex: "W = m \\cdot g",
                    factors: [{
                        lx: "W", sy: "W"
                    },
                        {
                            lx: "m", sy: "m"
                        },
                        {
                            lx: "g", sy: "g"
                        }],
                    variables: ["m", "g"],
                },
                {
                    sympy: "Eq(f, -k * x)",
                    latex: "f = - k\\cdot x",
                    factors: [{
                        lx: "f", sy: "f"
                    },
                        {
                            lx: "k", sy: "k"
                        },
                        {
                            lx: "x", sy: "x"
                        }],
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
                        {
                            lx: "r_1^3", sy: "(r_1)**3"},
                        {
                            lx:"T_1^2", sy: "(T_1)**2"},
                        {
                            lx:"r_2^3", sy: "(r_2)**3"},
                        {
                            lx:"T_2^2", sy: "(T_2)**2"},
                        {
                            lx:"r_1", sy: "(r_1)"},
                        {
                            lx:"r_2",sy: "(r_2)"},
                        {
                            lx:"T_1",sy: "(T_1)"},
                        {
                            lx:"T_2",sy: "(T_2)"}
                    ],
                    variables: ["r_1", "r_2", "T_1", "T_2"], //v no es una variable, ¡Porque ya está despejada!
                },
                {
                    sympy: "Eq(F_g, G * m_1 * m_2/r**2)",
                    latex: "F_g = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}",
                    factors: [{lx: "F_g", sy: "(F_g)"},  {lx: "G", sy: "G"},   {lx: "m_1", sy: "(m_1)"}, {lx: "m_2", sy: "(m_2)"},  {lx: "r", sy: "r"}],
                    variables: ["G", "m_1", "m_2", "r"], //v no es una variable, ¡Porque ya está despejada!
                },
                {
                    sympy: "Eq(g, G * M/(R+h)**2)",
                    latex: "g = \\frac{G \\cdot M}{(R + h)^2}",
                    factors: [{lx: "g", sy: "g"},{
                    lx: "G", sy: "G"
                        }, {
            lx: "M", sy: "M"
                        }, {
        lx: "(R+h)",  sy: "(R+h)"
                        },{
        lx: "R", sy: "R"
                        }, {
        lx:"h", sy: "h"
                        }],
                    variables: ["G", "M", "R", "h"], //v no es una variable, ¡Porque ya está despejada!
                },

                {
                    sympy: "Eq(G*M*m/r^2, m*V**2/r)",
                    latex: "\\frac{G \\cdot M \\cdot m}{r^2} = \\frac{m \\cdot V^2}{r}",
                    factors: [
                        {
                            lx: "G", sy: "G"
                        },
                        {
                            lx: "M", sy: "M"
                        },
                        {
                            lx: "m", sy: "m"
                        },
                        {
                            lx: "r", sy: "r"
                        },
                        {
                            lx: "V", sy: "V"
                        }
                    ],
                    variables: ["G", "M", "r", "V"], //v no es una variable, ¡Porque ya está despejada!
                },
                {
                    sympy: "Eq(G*M*m/r^2, m*(2*pi*r/T)**2/r)",
                    latex: "\\frac{G \\cdot M \\cdot m}{r^2} = \\frac{m}{r} \\cdot \\bigg( \\frac{2 \\cdot \\pi \\cdot r}{T} \\bigg)^2",
                    factors: [
                        {
                            lx: "G", sy: "G"
                        },
                        {
                            lx: "M", sy: "M"
                        },
                        {
                            lx: "m", sy: "m"
                        },
                        {
                            lx: "r", sy: "r"
                        },
                        {
                            lx: "T", sy: "T"
                        }
                    ],
                    variables: ["G", "M", "r", "T"], //v no es una variable, ¡Porque ya está despejada!
                },
            ],
        },
        {
            name: "Electromagnetismo",
            equations: [
                {
                    sympy: "Eq(F , k*(q_1)*(q_2)/r**2)",
                    latex: "F = \\frac{k \\cdot  q_1 \\cdot q_2 }{r^2}",
                    factors: [{
                        lx: "F", sy: "F"
                    },{
                        lx: "k", sy: "k"
                    }, {
                        lx: "q_1", sy: "q_1"
                        }, {
                            lx: "q_2", sy: "q_2"
                        }, {
                            lx: "r", sy: "r"
                        }],
                    variables: ["k", "q_1", "q_2", "r"], //v no es una variable, ¡Porque ya está despejada!
                },
                {
                    sympy: "Eq(E , k*q/r**2)",
                    latex: "E = \\frac{k \\cdot  q }{r^2}",
                    factors: [{
                        lx: "E", sy: "E"
                    }, {
                            lx: "k", sy: "k"
                        }, {
                            lx: "q", sy: "q"
                        }, {
                            lx: "r", sy: "r"
                        }],
                    variables: ["k", "q", "r"], //v no es una variable, ¡Porque ya está despejada!
                },
                {
                    sympy: "Eq(V , k*q/r)",
                    latex: "V = \\frac{k \\cdot  q }{r}",
                    factors: [{
                        lx: "V", sy: "V"
                    }, {
                            lx: "k", sy: "k"
                        }, {
                            lx: "q", sy: "q"
                        }, {
                            lx: "r", sy: "r"
                        }],
                    variables: ["k", "q", "r"], //v no es una variable, ¡Porque ya está despejada!
                },
                {
                    sympy: "Eq(U , k*(q_1)*(q_2)/r)",
                    latex: "U = \\frac{k \\cdot  q_1 \\cdot q_2 }{r}",
                    factors: [{
                        lx: "U", sy: "U"
                    }, {
                            lx: "k", sy: "k"
                        }, {
                            lx: "q_1", sy: "q_1"
                        }, {
                            lx: "q_2", sy: "q_2"
                        }, {
                            lx: "r", sy: "r"
                        }],
                    variables: ["k", "q_1", "q_2", "r"], //v no es una variable, ¡Porque ya está despejada!
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
