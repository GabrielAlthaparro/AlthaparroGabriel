// Esto es un comentario de linea. La computadora ignora todo este texto, no lo ejecuta

// despues tenemos el comentario multilinea, se escribe con /* */. Ejemplo:

/* Esto es un comentario multilinea

let numero1 = prompt("Ingrese un numero por favor");
let numero2 = prompt("Ingrese otro numero por favor");

El problma que teniamos en clase con estas dos lineas de codigo es que el dato que ingresamos usando prompt() es una cadena de caracteres (string). Tenemos que "castearlo" a tipo de dato numérico.
*/
let numero1 = parseInt(prompt("Ingrese un numero por favor")); // declaramos e inicializamos la variable con el valor casteado usando parseInt()

let numero2 = prompt("Ingrese otro numero por favor"); // declaramos una variable para guardar el numero2, que en este momento es un string. Por ejemplo, si ingresamos 10, entonces: numero2 <= "10"
numero2 = parseInt(numero2); // parseInt() castea el dato pasado entre los parentesis a tipo de dato numérico entero
// numero2 <= 10, en este ejemplo :)

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let producto = numero1 * numero2;

if (numero2 != 0) {
  let division = numero1 / numero2;
  alert("Division: " + division);
}

alert("Suma: " + suma);
alert("Resta: " + resta);
alert("Producto: " + producto);