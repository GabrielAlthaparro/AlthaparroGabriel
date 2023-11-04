/* Subalgoritmos en pseudocódigo

1) Funciones:

Funcion <nombre de funcion>(<nombre de variable>: <tipo de dato>, <nombre de variable>: <tipo de dato>, ...): <tipo de dato que retorna la funcion>

La funcion de abajo en javascript se declararia asi en pseudocódigo:

Funcion miFuncionSuma(num1: número entero, num2: número entero): número entero
Variables
  resultadoSuma: número entero
Comenzar
  resultadoSuma <= num1 + num2
  return resultadoSuma
Fin


2) Procedimientos:

Procedimiento <nombre de procedimiento>(<nombre de variable>: <tipo de dato>, <nombre>: <tipo de dato>, ...)

El procedimientos de abajo en javascript (que no hace lo que queremos (intercambiar los valores)!) se declararia asi en pseudocódigo:

Procedimiento miProcedimientoIntercambiar (x: número entero, y: número entero)
Variables
  aux: número entero
Comenzar
  aux <= x;
  x <= y;
  y <= aux;
Fin

Notar que los procedimientos no usan return, ya que no devuelven nada. Si se necesita devolver algo, sería una  función, no un procedimiento
*/

function miFuncionSuma(num1, num2) {
  let resultadoSuma = num1 + num2;
  return resultadoSuma; // return sirve para retornar un valor al programa que llamo a la funcion.

  let otraVariable = "Esta linea de codigo nunca se ejecutara, porque cuando ejecuto un return la ejecucion de la funcion termina";
}

let numero1 = 1;
let numero2 = 2;

let resultadoSuma = miFuncionSuma(numero1, numero2);
alert(resultadoSuma);

function miProcedimientoIntercambiar(x, y) {
  let aux = x;
  x = y;
  y = aux;

  // implicitamente aca en el final se esta ejecutando un return sin ningun valor
}


// El problema que vimos en clase (parámetros por valor)
// numero1 = 1
// numero2 = 2
miProcedimientoIntercambiar(numero1, numero2);
alert("numero1:" + numero1);
alert("numero2:" + numero2);

// los valores de las variables no cambiaron!! Porque todos los tipos de datos primitivos COPIAN su valor cuando son pasados, es decir, se crean nuevas variables en la funcion y se les asignan esos valores

// Si quisieramos que se intercambien las valores, lo que necesitamos son "parámetros por referencia". Para eso ir al README.md y mirar los videos del TP :)