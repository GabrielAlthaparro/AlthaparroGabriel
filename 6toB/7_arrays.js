// arrays

let notas = [4, 7, 10];

console.log(notas);
console.log("length: " + notas.length);

// Puedo recorrer un array con un for:
for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  console.log(nota);
}

// le puedo agregar un dato al final del array usando el metodo push()

notas.push(1);
console.log(notas);
// el array queda asi: [4, 7, 10, 1];
