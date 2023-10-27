let preguntas = [
  'pregunta 0',
  'pregunta 1',
  'pregunta 2',
  'pregunta 3',
]

// la respuesta correcta será la que este en la primera posición, es decir, donde esta 'respuesta 0'
let respuestasDePreguntas = [
  ['respuesta 0', 'respuesta 1', 'respuesta 2', 'respuesta 3'], // pregunta 0
  ['respuesta 0', 'respuesta 1', 'respuesta 2', 'respuesta 3'], // pregunta 1
  ['respuesta 0', 'respuesta 1', 'respuesta 2', 'respuesta 3'], // pregunta 2
  ['respuesta 0', 'respuesta 1', 'respuesta 2', 'respuesta 3'], // pregunta 3
];

let respCorrectaDePreguntas = []; // aca vamos a ir agregando el numero de respuesta (1, 2, 3, 4) que es correcta de esa pregunta, de forma aleatoria

let cantRespCorrectas = 0;

for (let numPreg = 0; numPreg < preguntas.length; numPreg++) {
  let pregunta = preguntas[numPreg];
  let respuestas = respuestasDePreguntas[numPreg]; // en respuestas tengo el array con las repuestas de la pregunta en ese índice (0, 1, 2, 3)

  let pregUsuario = pregunta + "\nRespuestas:\n"; // \n es un string para saltar una línea de la consola 
  let respYaElegidas = [false, false, false, false];

  for (let numResp = 1; numResp <= respuestas.length; numResp++) {

    let numRandom;
    do {
      numRandom = crearNumeroRandom(0, respYaElegidas.length - 1); // devuelve un índice (0, 1, 2, o 3)
    } while (respYaElegidas[numRandom] == true); // elijo una pregunta nueva

    if (numRandom == 0) {
      respCorrectaDePreguntas.push(numResp); // este es el numero de la pregunta correcta que debe ingresar luego el usuario
    }

    respYaElegidas[numRandom] = true;

    let respuesta = respuestas[numRandom];
    pregUsuario = pregUsuario + numResp + ") " + respuesta + "\n";
  }

  let respUsuario = prompt(pregUsuario);
  if (respUsuario == respCorrectaDePreguntas[numPreg]) {
    cantRespCorrectas++;
    alert("Respuesta correcta!");
  } else {
    alert("Respuesta incorrecta");
  }
}

alert("Tu porcentaje de respuestas correctas fue de " + (cantRespCorrectas / preguntas.length) * 100 + "%");

function crearNumeroRandom(min, max) {
  let numAleatorio = Math.random(); // devuelve un numero real aleatorio entre 0 y 1 inclusive
  return Math.floor(numAleatorio * (max - min + 1)) + min;
}