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
                    factors: [{ lx: "a", sy: "a" }, { lx: "v_f", sy: "v_f" }, { lx: "v_i", sy: "v_i" }, { lx: "t", sy: "t" }, { lx: "a \\cdot t", sy: "a * t" }],
                    variables: ["v_f", "v_i", "t"],
                },
                {
                    sympy: "Eq(v_f**2, v_i**2 + 2 * a * d)",
                    latex: "v_f^2=v_i^2 + 2 \\cdot a \\cdot d",
                    factors: [
                        {
                            lx: "a", sy: "a"
                        },
                        {
                            lx: "v_f", sy: "v_f"
                        },
                        {
                            lx: "v_i", sy: "v_i"
                        },
                        {
                            lx: "d", sy: "d"
                        },
                        {
                            lx: "v_f^2", sy: "v_f**2"
                        },
                        {
                            lx: "v_i^2", sy: "v_i**2"
                        },
                        { lx: "a \\cdot d", sy: "a * d" }
                    ],
                    variables: ["a", "v_f", "v_i", "d"],
                },
                {
                    sympy: "Eq(d, v_i*t+a*t**2/2)",
                    latex: "d=v_i\\cdot t+a\\cdot \\frac{t^2}{2}",
                    factors: [
                        {
                            lx: "d", sy: "d"
                        },
                        {
                            lx: "v_i", sy: "v_i"
                        },
                        {
                            lx: "a", sy: "a"
                        },
                        {
                            lx: "t", sy: "t"
                        },
                        {
                            lx: "v_i \\cdot t", sy: "v_i * t"
                        },
                        {
                            lx: "\\frac{at^2}{2}", sy: "a*t**2/2"
                        },
                    ],
                    variables: ["v_i", "a", "t"],
                },
                {
                    sympy: "Eq(d, (v_f+v_i)*\\frac{t}{2})",
                    latex: "d=(v_f+v_i)\\cdot \\frac{t}{2}",
                    factors: [
                        {
                            lx: "d", sy: "d"
                        },
                        {
                            lx: "v_i", sy: "v_i"
                        },
                        {
                            lx: "v_f", sy: "v_f"
                        },
                        {
                            lx: "t", sy: "t"
                        },
                        {
                            lx: "(v_f + v_i)", sy: "v_f + v_i"
                        },
                        {
                            lx: "(v_f + v_i) \\cdot \\frac{t}{2}", sy: "(v_f + v_i) * t/2"
                        }
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
                    factors: [{ lx: "g", sy: "g" }, { lx: "v_f", sy: "v_f" }, { lx: "v_i", sy: "v_i" }, { lx: "t", sy: "t" }, { lx: "g \\cdot t", sy: "g * t" }],
                    variables: ["g", "v_i", "t"],
                },
                {
                    sympy: "Eq(v_f**2, v_i**2 - 2 * g * (y_f - y_i))",
                    latex: "v_f^2=v_i^2 - 2 \\cdot g \\cdot d",
                    factors: [
                        {
                            lx: "g", sy: "g"
                        },
                        {
                            lx: "v_f", sy: "v_f"
                        },
                        {
                            lx: "v_i", sy: "v_i"
                        },
                        {
                            lx: "y_f", sy: "y_f"
                        },
                        {
                            lx: "y_i", sy: "y_i"
                        },
                        {
                            lx: "(y_f-y_i)", sy: "(y_f-y_i)"
                        },
                        {
                            lx: "v_f^2", sy: "v_f**2"
                        },
                        {
                            lx: "v_i^2", sy: "v_i**2"
                        },
                        {
                            lx: "g \\cdot d", sy: "g*d"
                        }
                    ],
                    variables: ["g", "v_f", "v_i", "y_f", "y_i"],
                },
                {
                    sympy: "Eq(y_f - y_i, v_i*t-g*t**2/2)",
                    latex: "y_f - y_i=v_i \\cdot t - \\frac{g\\cdot t^2}{2}",
                    factors: [
                        {
                            lx: "y_f", sy: "y_f"
                        },
                        {
                            lx: "y_i", sy: "y_i"
                        },
                        {
                            lx: "(y_f - y_i)", sy: "(y_f-y_i)"
                        },
                        {
                            lx: "v_i", sy: "v_i"
                        },
                        {
                            lx: "g", sy: "g"
                        },
                        {
                            lx: "t", sy: "t"
                        },
                        {
                            lx: "v_i \\cdot t", sy: "v_i*t"
                        },
                        {
                            lx: "g \\cdot \\frac{t^2}{2}", sy: "g * t**2/2"
                        }
                    ],
                    variables: ["v_i", "g", "t", "2", "y_f", "y_i"],
                },
            ],
        },
        {
          sympy: "Eq(a, (v_f-v_i)/t)",
          latex: "a=\\frac{v_f-v_i}{t}",
          factors: [
            { lx: "a", sy: "a" },
            { lx: "v_f", sy: "v_f" },
            { lx: "v_i", sy: "v_i" },
            { lx: "t", sy: "t" },
            { lx: "a \\cdot t", sy: "a * t" },
          ],
          variables: ["v_f", "v_i", "t"],
        },
        {
            name: "Impulso y cantidad de movimiento",
            equations: [
                {
                    sympy: "Eq(p, m * v)",
                    latex: "p = m \\cdot v",
                    factors: [{
                        lx: "p", sy: "p"
                    },
                    {
                        lx: "m", sy: "m"
                    },
                    {
                        lx: "v", sy: "v"
                    }],
                    variables: ["m", "v"],
                },
                {
                    sympy: "Eq(I, F * t)",
                    latex: "I = f \\cdot t",
                    factors: [{
                        lx: "I", sy: "I"
                    },
                    {
                        lx: "F", sy: "F"
                    },
                    {
                        lx: "t", sy: "t"
                    }],
                    variables: ["F", "t"],
                },
                {
                    sympy: "Eq(I, p_f - p_i)",
                    latex: "I = p_f - p_i",
                    factors: [{
                        lx: "I", sy: "I"
                    },
                    {
                        lx: "p_f", sy: "p_f"
                    },
                    {
                        lx: "p_i", sy: "p_i"
                    }],
                    variables: ["p_f", "p_i"],
                },
                {
                    sympy: "Eq(F*t, m*v_f - m*v_i)",
                    latex: "F*t = m \\cdot v_f - m \\cdot v_i",
                    factors: [{
                        lx: "F \\cdot t", sy: "F*t"
                    },
                    {
                        lx: "m \\cdot v_f", sy: "m*v_f"
                    },
                    {
                        lx: "m \\cdot v_i", sy: "m*v_i"
                    },
                    {
                        lx: "F", sy: "F"
                    },
                    {
                        lx: "t", sy: "t"
                    },
                    {
                        lx: "m", sy: "m"
                    },
                    {
                        lx: "v_f", sy: "v_f"
                    },
                    {
                        lx: "v_i", sy: "v_i"
                    },
                    {
                        lx: "v_f - v_i", sy: "v_f - v_i"
                    }],
                    variables: ["v_f", "v_i", "m", "F", "t"],
                },
                

            ]
          sympy: "Eq(v_f**2, v_i**2 + 2 * a * d)",
          latex: "v_f^2=v_i^2 + 2 \\cdot a \\cdot d",
          factors: [
            {
              lx: "a",
              sy: "a",
            },
            {
              lx: "v_f",
              sy: "v_f",
            },
            {
              lx: "v_i",
              sy: "v_i",
            },
            {
              lx: "d",
              sy: "d",
            },
            {
              lx: "v_f^2",
              sy: "v_f**2",
            },
            {
              lx: "v_i^2",
              sy: "v_i**2",
            },
            { lx: "a \\cdot d", sy: "a * d" },
          ],
          variables: ["a", "v_f", "v_i", "d"],
        },
        {
          sympy: "Eq(d, v_i*t+a*t**2/2)",
          latex: "d=v_i\\cdot t+a\\cdot \\frac{t^2}{2}",
          factors: [
            {
              lx: "d",
              sy: "d",
            },
            {
              lx: "v_i",
              sy: "v_i",
            },
            {
              lx: "a",
              sy: "a",
            },
            {
              lx: "t",
              sy: "t",
            },
            {
              lx: "v_i \\cdot t",
              sy: "v_i * t",
            },
            {
              lx: "\\frac{at^2}{2}",
              sy: "a*t**2/2",
            },
          ],
          variables: ["v_i", "a", "t", "2"],
        },
        {
          sympy: "Eq(d, (v_f+v_i)*\\frac{t}{2})",
          latex: "d=(v_f+v_i)\\cdot \\frac{t}{2}",
          factors: [
            {
              lx: "d",
              sy: "d",
            },
            {
              lx: "v_i",
              sy: "v_i",
            },
            {
              lx: "v_f",
              sy: "v_f",
            },
            {
              lx: "t",
              sy: "t",
            },
            {
              lx: "(v_f + v_i)",
              sy: "v_f + v_i",
            },
            {
              lx: "(v_f + v_i) \\cdot \\frac{t}{2}",
              sy: "(v_f + v_i) * t/2",
            },
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
          factors: [
            { lx: "g", sy: "g" },
            { lx: "v_f", sy: "v_f" },
            { lx: "v_i", sy: "v_i" },
            { lx: "t", sy: "t" },
            { lx: "g \\cdot t", sy: "g * t" },
          ],
          variables: ["g", "v_i", "t"],
        },
        {
          sympy: "Eq(v_f**2, v_i**2 - 2 * g * (y_f - y_i))",
          latex: "v_f^2=v_i^2 - 2 \\cdot g \\cdot d",
          factors: [
            {
              lx: "g",
              sy: "g",
            },
            {
              lx: "v_f",
              sy: "v_f",
            },
            {
              lx: "v_i",
              sy: "v_i",
            },
            {
              lx: "y_f",
              sy: "y_f",
            },
            {
              lx: "y_i",
              sy: "y_i",
            },
            {
              lx: "(y_f-y_i)",
              sy: "(y_f-y_i)",
            },
            {
              lx: "v_f^2",
              sy: "v_f**2",
            },
            {
              lx: "v_i^2",
              sy: "v_i**2",
            },
            {
              lx: "g \\cdot d",
              sy: "g*d",
            },
          ],
          variables: ["g", "v_f", "v_i", "y_f", "y_i"],
        },
        {
          sympy: "Eq(y_f - y_i, v_i*t-g*t**2/2)",
          latex: "y_f - y_i=v_i \\cdot t - \\frac{g\\cdot t^2}{2}",
          factors: [
            {
              lx: "y_f",
              sy: "y_f",
            },
            {
              lx: "y_i",
              sy: "y_i",
            },
            {
              lx: "(y_f - y_i)",
              sy: "(y_f-y_i)",
            },
            {
              lx: "v_i",
              sy: "v_i",
            },
            {
              lx: "g",
              sy: "g",
            },
            {
              lx: "t",
              sy: "t",
            },
            {
              lx: "v_i \\cdot t",
              sy: "v_i*t",
            },
            {
              lx: "g \\cdot \\frac{t^2}{2}",
              sy: "g * t**2/2",
            },
          ],
          variables: ["v_i", "g", "t", "2", "y_f", "y_i"],
        },
      ],
    },

    {
      name: "Dinámica",
      equations: [
        {
            name: "Fluidos"
            equations: [
                {
                    sympy: "Eq(P_1+ρ*v_1**2/2+ρ*g*y_1, P_2+ρ*v_2**2/2+ρ*g*y_2)",
                    latex: "P_1 + \\frac{1}{2} \\cdot \\rho \\cdot v_1^2 + \\rho \\cdot g \\cdot y_1 = P_2 + \\frac{1}{2} \\cdot \\rho \\cdot v_2^2 + \\rho \\cdot g \\cdot y_2",
                    factors: [
                        {
                            lx: "\\frac{1}{2} \\cdot \\rho \\cdot v_1^2", sy: "ρ*v_1**2/2"
                        },
                        {   
                            lx: "\\frac{1}{2} \\cdot v_1^2 + g \\cdot y_1 - \\frac{1}{2} \\cdot v_2^2 - g \\cdot y_2", sy: "v_1**2/2+g*y_1-v_2**2/2-g*y_2"
                        },
                        {
                            lx: "P_1-P_2", sy: "P_1-P_2"
                        },
        
                        {
                            lx: "\\rho \\cdot g \\cdot y_1", sy: "ρ*g*y_1"
                        },
                        {
                            lx: "\\frac{1}{2} \\cdot \\rho \\cdot v_2^2", sy: "ρ*v_2**2/2"
                        },
                        {
                            lx: "\\rho \\cdot g \\cdot y_2", sy: "ρ*g*y_2"
                        },
                        {
                            lx: "\\rho", sy: "ρ"
                        },
                        {
                            lx: "g", sy: "g"
                        },
                        {
                            lx: "v_1", sy: "v_1"
                        },
                        {
                            lx: "v_2", sy: "v_2"
                        },
                        {
                            lx: "y_1", sy: "y_1"
                        },
                        {
                            lx: "y_2", sy: "y_2"
                        },
                        {
                            lx: "P_1", sy: "P_1"
                        },
                        {
                            lx: "P_2", sy: "P_2"
                        },],
                    variables: ["g", "v_1", "v_2", "y_1", "y_2", "ρ", "P_1", "P_2"],
                },
          sympy: "Eq(F, m * a)",
          latex: "F = m \\cdot a",
          factors: [
            {
              lx: "F",
              sy: "F",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "a",
              sy: "a",
            },
          ],
          variables: ["m", "a"],
        },
        {
          sympy: "Eq(W, m * g)",
          latex: "W = m \\cdot g",
          factors: [
            {
              lx: "W",
              sy: "W",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "g",
              sy: "g",
            },
          ],
          variables: ["m", "g"],
        },
        {
          sympy: "Eq(f, -k * x)",
          latex: "f = - k\\cdot x",
          factors: [
            {
              lx: "f",
              sy: "f",
            },
            {
              lx: "k",
              sy: "k",
            },
            {
              lx: "x",
              sy: "x",
            },
          ],
          variables: ["k", "x"],
        },
      ],
    },

    {
      name: "Impulso y cantidad de movimiento",
      equations: [
        {
          sympy: "Eq(p, m * v)",
          latex: "P = m \\cdot v",
          factors: [
            {
              lx: "p",
              sy: "p",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "v",
              sy: "v",
            },
          ],
          variables: ["m", "v"],
        },
        {
          sympy: "Eq(I, F * t)",
          latex: "I = f \\cdot t",
          factors: [
            {
              lx: "I",
              sy: "I",
            },
            {
              lx: "F",
              sy: "F",
            },
            {
              lx: "t",
              sy: "t",
            },
          ],
          variables: ["F", "t"],
        },
        {
          sympy: "Eq(I, p_f - p_i)",
          latex: "I = p_f - p_i",
          factors: [
            {
              lx: "I",
              sy: "I",
            },
            {
              lx: "p_f",
              sy: "p_f",
            },
            {
              lx: "p_i",
              sy: "p_i",
            },
          ],
          variables: ["p_f", "p_i"],
        },
        {
          sympy: "Eq(F*t, m*v_f - m*v_i)",
          latex: "F\\cdot t = m \\cdot v_f - m \\cdot v_i",
          factors: [
            {
              lx: "F \\cdot t",
              sy: "F*t",
            },
            {
              lx: "m \\cdot v_f",
              sy: "m*v_f",
            },
            {
              lx: "m \\cdot v_i",
              sy: "m*v_i",
            },
            {
              lx: "F",
              sy: "F",
            },
            {
              lx: "t",
              sy: "t",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "v_f",
              sy: "v_f",
            },
            {
              lx: "v_i",
              sy: "v_i",
            },
            {
              lx: "v_f - v_i",
              sy: "v_f - v_i",
            },
          ],
          variables: ["v_f", "v_i", "m", "F", "t"],
        },
      ],
    },

    {
      name: "Fluidos",
      equations: [
        {
          sympy: "Eq(P_1+ρ*v_1**2/2+ρ*g*y_1, P_2+ρ*v_2**2/2+ρ*g*y_2)",
          latex:
            "P_1 + \\frac{1}{2} \\cdot \\rho \\cdot v_i^2 + \\rho \\cdot g \\cdot y_i = P_2 + \\frac{1}{2} \\cdot \\rho \\cdot v_f^2 + \\rho \\cdot g \\cdot y_f",
          factors: [
            {
              lx: "\\frac{1}{2} \\cdot \\rho \\cdot v_1^2",
              sy: "ρ*v_1**2/2",
            },
            {
              lx: "\\rho \\cdot g \\cdot y_1",
              sy: "ρ*g*y_1",
            },
            {
              lx: "\\frac{1}{2} \\cdot \\rho \\cdot v_2^2",
              sy: "ρ*v_2**2/2",
            },
            {
              lx: "\\rho \\cdot g \\cdot y_2",
              sy: "ρ*g*y_2",
            },
            {
              lx: "\\rho",
              sy: "ρ",
            },
            {
              lx: "g",
              sy: "g",
            },
            {
              lx: "v_1",
              sy: "v_1",
            },
            {
              lx: "v_2",
              sy: "v_2",
            },
            {
              lx: "y_1",
              sy: "y_1",
            },
            {
              lx: "y_2",
              sy: "y_2",
            },
            {
              lx: "P_1",
              sy: "P_1",
            },
            {
              lx: "P_2",
              sy: "P_2",
            },
          ],
          variables: ["g", "v_1", "v_2", "y_1", "y_2", "ρ", "P_1", "P_2"],
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
              lx: "r_1^3",
              sy: "(r_1)**3",
            },
            {
              lx: "T_1^2",
              sy: "(T_1)**2",
            },
            {
              lx: "r_2^3",
              sy: "(r_2)**3",
            },
            {
              lx: "T_2^2",
              sy: "(T_2)**2",
            },
            {
              lx: "r_1",
              sy: "(r_1)",
            },
            {
              lx: "r_2",
              sy: "(r_2)",
            },
            {
              lx: "T_1",
              sy: "(T_1)",
            },
            {
              lx: "T_2",
              sy: "(T_2)",
            },
          ],
          variables: ["r_1", "r_2", "T_1", "T_2"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(F_g, G * m_1 * m_2/r**2)",
          latex: "F_g = \\frac{G \\cdot m_1 \\cdot m_2}{r^2}",
          factors: [
            { lx: "F_g", sy: "(F_g)" },
            { lx: "G", sy: "G" },
            { lx: "m_1", sy: "(m_1)" },
            { lx: "m_2", sy: "(m_2)" },
            { lx: "r", sy: "r" },
          ],
          variables: ["G", "m_1", "m_2", "r"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(g, G * M/(R+h)**2)",
          latex: "g = \\frac{G \\cdot M}{(R + h)^2}",
          factors: [
            { lx: "g", sy: "g" },
            {
              lx: "G",
              sy: "G",
            },
            {
              lx: "M",
              sy: "M",
            },
            {
              lx: "(R+h)",
              sy: "(R+h)",
            },
            {
              lx: "R",
              sy: "R",
            },
            {
              lx: "h",
              sy: "h",
            },
          ],
          variables: ["G", "M", "R", "h"], //v no es una variable, ¡Porque ya está despejada!
        },

        {
          sympy: "Eq(G*M*m/r**2, m*V**2/r)",
          latex: "\\frac{G \\cdot M \\cdot m}{r^2} = \\frac{m \\cdot V^2}{r}",
          factors: [
            {
              lx: "G",
              sy: "G",
            },
            {
              lx: "M",
              sy: "M",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "r",
              sy: "r",
            },
            {
              lx: "V",
              sy: "V",
            },
          ],
          variables: ["G", "M", "r", "V"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(G*M*m/r**2, m*(2*pi*r/T)**2/r)",
          latex:
            "\\frac{G \\cdot M \\cdot m}{r^2} = \\frac{m}{r} \\cdot \\bigg( \\frac{2 \\cdot \\pi \\cdot r}{T} \\bigg)^2",
          factors: [
            {
              lx: "G",
              sy: "G",
            },
            {
              lx: "M",
              sy: "M",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "r",
              sy: "r",
            },
            {
              lx: "T",
              sy: "T",
            },
            { lx: "\\pi", sy: "pi" },
          ],
          variables: ["G", "M", "r", "T"], //v no es una variable, ¡Porque ya está despejada!
        },
      ],
    },

    {
      name: "Energías",
      equations: [
        {
          sympy: "Eq(K, m*v**2/2)",
          latex: "K = \\frac{1}{2} \\cdot m \\cdot v^2",
          factors: [
            {
              lx: "K",
              sy: "K",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "v",
              sy: "v",
            },
          ],
          variables: ["m", "v"],
        },
        {
          sympy: "Eq(U_g, m*g*y)",
          latex: "U_g =  m \\cdot g \\cdot y",
          factors: [
            {
              lx: "U_g",
              sy: "U_g",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "g",
              sy: "g",
            },
            {
              lx: "y",
              sy: "y",
            },
          ],
          variables: ["m", "g", "y"],
        },
        {
          sympy: "Eq(U_e, k*x**2/2)",
          latex: "U_e =  \\frac{1}{2} \\cdot k \\cdot x^2",
          factors: [
            {
              lx: "U_e",
              sy: "U_e",
            },
            {
              lx: "k",
              sy: "k",
            },
            {
              lx: "x",
              sy: "x",
            },
          ],
          variables: ["k", "x"],
        },
        {
          sympy: "Eq(E, K+U)",
          latex: "E = K + U",
          factors: [
            {
              lx: "E",
              sy: "E",
            },
            {
              lx: "K",
              sy: "K",
            },
            {
              lx: "U",
              sy: "U",
            },
          ],
          variables: ["K", "U"],
        },
        {
          sympy: "Eq(m*v_i**2/2+m*g*y_i, m*v_f**2/2+m*g*y_f)",
          latex:
            "\\frac{1}{2} \\cdot m \\cdot v_i^2 + m \\cdot g \\cdot y_i = \\frac{1}{2} \\cdot m \\cdot v_f^2 + m \\cdot g \\cdot y_f",
          factors: [
            {
              lx: "\\frac{1}{2} \\cdot m \\cdot v_i^2",
              sy: "m*v_i**2/2",
            },
            {
              lx: "m \\cdot g \\cdot y_i",
              sy: "m*g*y_i",
            },
            {
              lx: "\\frac{1}{2} \\cdot m \\cdot v_f^2",
              sy: "m*v_f**2/2",
            },
            {
              lx: "m \\cdot g \\cdot y_f",
              sy: "m*g*y_f",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "g",
              sy: "g",
            },
            {
              lx: "v_i",
              sy: "v_i",
            },
            {
              lx: "v_f",
              sy: "v_f",
            },
            {
              lx: "y_i",
              sy: "y_i",
            },
            {
              lx: "y_f",
              sy: "y_f",
            },
          ],
          variables: ["g", "v_i", "v_f", "y_i", "y_i"],
        },
        {
          sympy: "Eq(m*v_e**2/2 - G*M*m/R, 0)",
          latex:
            "\\frac{1}{2} \\cdot m \\cdot v_e^2 - \\frac{G \\cdot M \\cdot m}{R} = 0",
          factors: [
            {
              lx: "\\frac{1}{2} \\cdot m \\cdot v_e^2",
              sy: "m*v_e**2/2",
            },
            {
              lx: "\\frac{G \\cdot M \\cdot m}{R}",
              sy: "G*M*m/R",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "M",
              sy: "M",
            },
            {
              lx: "G",
              sy: "G",
            },
            {
              lx: "R",
              sy: "R",
            },
            {
              lx: "v_e",
              sy: "v_e",
            },
          ],
          variables: ["v_e", "R"],
        },
      ],
    },

    {
      name: "Electromagnetismo",
      equations: [
        {
          sympy: "Eq(F , k*(q_1)*(q_2)/r**2)",
          latex: "F = \\frac{k \\cdot  q_1 \\cdot q_2 }{r^2}",
          factors: [
            {
              lx: "F",
              sy: "F",
            },
            {
              lx: "k",
              sy: "k",
            },
            {
              lx: "q_1",
              sy: "q_1",
            },
            {
              lx: "q_2",
              sy: "q_2",
            },
            {
              lx: "r",
              sy: "r",
            },
          ],
          variables: ["k", "q_1", "q_2", "r"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(E , k*q/r**2)",
          latex: "E = \\frac{k \\cdot  q }{r^2}",
          factors: [
            {
              lx: "E",
              sy: "E",
            },
            {
              lx: "k",
              sy: "k",
            },
            {
              lx: "q",
              sy: "q",
            },
            {
              lx: "r",
              sy: "r",
            },
          ],
          variables: ["k", "q", "r"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(V , k*q/r)",
          latex: "V = \\frac{k \\cdot  q }{r}",
          factors: [
            {
              lx: "V",
              sy: "V",
            },
            {
              lx: "k",
              sy: "k",
            },
            {
              lx: "q",
              sy: "q",
            },
            {
              lx: "r",
              sy: "r",
            },
          ],
          variables: ["k", "q", "r"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(U , k*(q_1)*(q_2)/r)",
          latex: "U = \\frac{k \\cdot  q_1 \\cdot q_2 }{r}",
          factors: [
            {
              lx: "U",
              sy: "U",
            },
            {
              lx: "k",
              sy: "k",
            },
            {
              lx: "q_1",
              sy: "q_1",
            },
            {
              lx: "q_2",
              sy: "q_2",
            },
            {
              lx: "r",
              sy: "r",
            },
          ],
          variables: ["k", "q_1", "q_2", "r"], //v no es una variable, ¡Porque ya está despejada!
        },
      ],
    },
    {
      name: "Relatividad",
      equations: [
        {
          sympy: "Eq(E, m*c**2)",
          latex: "E = m \\cdot c^2",
          factors: [
            { lx: "E", sy: "E" },
            { lx: "m", sy: "m" },
            { lx: "c", sy: "c" },
          ],
          variables: ["m", "c"], //v no es una variable, ¡Porque ya está despejada!
        },
        {
          sympy: "Eq(E**2, p**2*c**2 + m**2*c**4)",
          latex: "E^2= p^2 \\cdot c^2 + m^2 \\cdot c^4",
          factors: [
            {
              lx: "E^2",
              sy: "E**2",
            },
            {
              lx: "p^2 \\cdot c^2",
              sy: "p**2*c**2",
            },
            {
              lx: "m^2 \\cdot c^4",
              sy: "m**2*c**4",
            },
            {
              lx: "E",
              sy: "E",
            },
            {
              lx: "m",
              sy: "m",
            },
            {
              lx: "p",
              sy: "p",
            },
            {
              lx: "c",
              sy: "c",
            },
          ],
          variables: ["m", "p", "c"],
        },
        {
          sympy: "Eq(t, t_0/sqrt(1-v**2/c**2))",
          latex: "t= \\frac{t_0}{\\sqrt{1-\\frac{v^2}{c^2}}}",
          factors: [
            {
              lx: "t",
              sy: "t",
            },
            {
              lx: "t_0",
              sy: "t_0",
            },
            {
              lx: "\\sqrt{1-\\frac{v^2}{c^2}}",
              sy: "sqrt(1-v**2/c**2)",
            },
            {
              lx: "\\frac{v^2}{c^2}",
              sy: "v**2/c**2",
            },
            {
              lx: "\\frac{t_0^2}{t^2}",
              sy: "t_0**2/t**2",
            },
            {
              lx: "v",
              sy: "v",
            },
            {
              lx: "c",
              sy: "c",
            },
          ],
          variables: ["t_0", "v", "c"],
        },
      ],
    },
  ],
  operationsList: {
    basic: [
      {
        name: "Sumar",
        symbol: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-plus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 5l0 14"></path>
            <path d="M5 12l14 0"></path>
          </svg>
        ),
      },
      {
        name: "Restar",
        symbol: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-minus"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
          </svg>
        ),
      },
      {
        name: "Multiplicar",
        symbol: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 12 6 6m6 6 6 6m-6-6 6-6m-6 6-6 6"
            />
          </svg>
        ),
      },
      {
        name: "Dividir",
        symbol: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-divide"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
            <circle cx="12" cy="18" r="1" fill="currentColor"></circle>
            <path d="M5 12l14 0"></path>
          </svg>
        ),
      },
      {
        name: "Potencia",
        symbol: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 42 30"
            width="32"
            height="32"
          >
            <path
              fill="none"
              stroke="#d9d9d9"
              stroke-width="4"
              d="M8,8 L24,24 M8,24 L24,8"
            />
            <rect
              fill="none"
              stroke="#d9d9d9"
              stroke-width="3"
              x="30"
              y="-2"
              width="10"
              height="10"
            />
          </svg>
        ),
      },
      {
        name: "Raiz",
        symbol: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-square-root"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12h2l4 8l4 -16h8"></path>
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
