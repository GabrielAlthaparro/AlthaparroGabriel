// esto es un comentario de linea
/* esto es un
  comentario multilinea
*/

// declaramos las variables. En javascript no se dice el tipo de dato de una variable, sino que este variara de forma dinámica (cuando el programa se esta ejecutando) en base al valor que tenga en ese momento la variable
let aux;
let x;
let y;

// si quisieramos que x e y guarden datos de tipo string (textos), ya que en este ejercicio no nos importa el tipo de dato de las variables, lo podemos hacer sin usar el parseInt:
// x = prompt("Ingrese el primer valor por favor:");
// y = prompt("Ingrese el segundo valor por favor:");

x = parseInt(prompt("Ingrese el primer valor por favor:"));
y = parseInt(prompt("Ingrese el segundo valor por favor:"));

// mostramos por pantalla los valores de x e y
alert("x: " + x);
alert("y: " + y);

// intercambiamos sus valores usando una variable auxiliar para no perder el valor que tiene x
aux = x;
x = y;
y = aux;

// mostramos por pantalla los valores intercambiados de x e y
alert("x: " + x);
alert("y: " + y);