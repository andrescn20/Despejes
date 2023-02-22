//Un array de objectos, donde cada objeto es una ecuacion.
//Mejor de momento no ponerle nombre a las ecuaciones
//No se me ocurre un nombre apropiado, y además es más fácil identificarlas con números
//No se incluye como variable aquellas que ya están despejadas

const ecuaciones = [
  {
    ecuacion: 'v=d/t',
    factores: ['v', 'd', 't'],
    variables: ['d', 't'], //v no es una variable, ¡Porque ya está despejada!
  },
  {
    ecuacion: 'a=(v_f-v_i)/t',
    factores: ['a', 'v_f', 'v_i', 't', 'a*t'],
    variables: ['v_f', 'v_i', 't'],
  },
  {
    ecuacion: 'v_f^2=v_i^2 + 2 * a * d',
    factores: ['a', 'v_f', 'v_i', 'd', '2', 'v_f^2', 'v_i^2', 'a * d'],
    variables: ['a', 'v_f', 'v_i', 'd'],
  },
  {
    ecuacion: 'd=v_i*t+a*t^2/2',
    factores: ['d', 'v_i', 'a', 't', '2', 'v_i*t', 'a*t^2/2'],
    variables: ['v_i', 'a', 't', '2'],
  },
  {
    ecuacion: 'd=(v_f+v_i)*t/2',
    factores: [
      'd',
      'v_i',
      'v_f',
      't',
      '2',
      '(v_f + v_i)',
      '(v_f + v_i) * t / 2',
    ],
    variables: ['v_i', 'v_f', 't'],
  },
];

export default ecuaciones;

//ecuaciones.MRUA.ecuacion1.ecuacion
//ecuaciones.MRUA[2].factores

// MRU: [
//     {
//       ecuacion: 'v=d/t',
//       factores: ['v', 'd', 't'],
//       variables: ['d', 't'], //v no es una variable, ¡Porque ya está despejada!
//     },
//   ],
//   MRUA: [
//     {
//       ecuacion: 'a=(v_f-v_i)/t',
//       factores: ['a', 'v_f', 'v_i', 't', 'a*t'],
//       variables: ['v_f', 'v_i', 't'],
//     },
//     {
//       ecuacion: 'v_f^2=v_i^2 + 2 * a * d',
//       factores: ['a', 'v_f', 'v_i', 'd', '2', 'v_f^2', 'v_i^2', 'a * d'],
//       variables: ['a', 'v_f', 'v_i', 'd'],
//     },
//     {
//       ecuacion: 'd=v_i*t+a*t^2/2',
//       factores: ['d', 'v_i', 'a', 't', '2', 'v_i*t', 'a*t^2/2'],
//       variables: ['v_i', 'a', 't', '2'],
//     },
//     {
//       ecuacion: 'd=(v_f+v_i)*t/2',
//       factores: [
//         'd',
//         'v_i',
//         'v_f',
//         't',
//         '2',
//         '(v_f + v_i)',
//         '(v_f + v_i) * t / 2',
//       ],
//       variables: ['v_i', 'v_f', 't'],
//     },
//   ],
// };
