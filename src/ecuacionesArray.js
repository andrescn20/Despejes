//Un array de objectos, donde cada objeto es una ecuacion. 

const ecuaciones = [
    {MRU: [
{ ecuacion: v=d/t,
  factores: [v, d, t,],
    },
    ]},
{MRUA:[
{ ecuacion: a=(vբ-vᵢ)/t,
  factores: [a, vբ, vᵢ, t, a*t,],
    },
{ ecuacion: vբ**2=vᵢ**2 + 2 * a * d,
  factores: [a, vբ, vᵢ, d, 2,vբ**2, vᵢ**2,a * d,],
	},
{ ecuacion: d=vᵢ*t+a*t**2/2,
    factores: [d, vᵢ, a, t, 2, vᵢ*t, a* t**2/2,],
    },
{ ecuacion: d=(vբ+vᵢ)*t/2,
    factores: [d, vᵢ, vբ, t, 2, (vբ + vᵢ), (vբ + vᵢ) * t / 2,],
    },
]},
];

