/*
link de página para programar en javascript (programiz):

https://www.programiz.com/javascript/online-compiler/

Consigna: escribir un programa que muestre por pantalla 100 veces la palabra "hola"

pseudocodigo:

Programa mostrarHola
Variables
  contador: numérico entero
Comenzar
  contador <= 1
  repetir
    mostrar("hola")
    contador <= contador + 1
  mientras contador < 100
Fin

*/

// programa mostrarHola en javascript, pruebenlo en la página que les deje arriba:
let contador = 1; // declaramos la variable cantidad y le asignamos el valor 1
do {
  alert("hola " + contador);
  contador = contador + 1;
} while (contador <= 100);