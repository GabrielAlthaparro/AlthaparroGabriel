let preguntas = [
  'pregunta 0',
  'pregunta 1',
  'pregunta 2',
  'pregunta 3',
]

let respuestasDePreguntas = [
  ['respuesta 0', 'respuesta 1', 'respuesta 2', 'respuesta 3'], // pregunta 0
  ['respuesta 0', 'respuesta 1', 'respuesta 2', 'respuesta 3'], // pregunta 1
  ['respuesta 0', 'respuesta 1', 'respuesta 2', 'respuesta 3'], // pregunta 2
  ['respuesta 0', 'respuesta 1', 'respuesta 2', 'respuesta 3'], // pregunta 3
];

let cantRespCorrectas = 0;

for (let numPreg = 0; numPreg < preguntas.length; numPreg++) {
  let pregunta = preguntas[numPreg];
  let respuestas = respuestasDePreguntas[numPreg]; // en respuestas tenga el array con las repuestas de la pregunta en ese índice (0, 1, 2, 3)

  let pregUsuario = pregunta + "\nRespuestas:\n"; // \n es un string para saltar una línea de la consola 
  for (let numResp = 1; numResp <= respuestas.length; numResp++) {
    let respuesta = respuestas[numResp - 1]; // la primera posicion inicia en 0, por eso restamos 1
    pregUsuario = pregUsuario + numResp + ") " + respuesta + "\n";
  }

  let respUsuario = prompt(pregUsuario);
  if (respUsuario == "1") {
    cantRespCorrectas++;
    alert("Respuesta correcta!");
  } else {
    alert("Respuesta incorrecta");
  }
}

alert("Tu porcentaje de respuestas correctas fue de " + (cantRespCorrectas / preguntas.length) * 100 + "%");