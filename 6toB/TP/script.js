'use strict';

// MIREN LOS VIDEOS PRIMERO!!

// Para ver la calculadora, desde el explorador de archivos abran el index.html, y cuando les habra la calculadora en el navegador pulsen F12 (o sino click derecho, inspeccionar)

// Despues vayan a la seccion "console" de arriba a la derecha, click, y ahi van a poder ver las cosas que muestren usando console.log

const numberButtons = document.querySelectorAll('[numero]'); // retorna un array de objetos "button", uno por cada numero, ordenados por el orden que estan en el html.
console.log(numberButtons);
// [button, button, button, button, button, button, button, button, button, button, button];

const operationButtons = document.querySelectorAll('[operacion]'); // lo mismo, pero estos son los botones de operaciones
console.log(operationButtons);
// [button, button, button, button, button]


// estos variables solo tienen un objeto cada uno. Cuando es un objeto del html, lo llamamos "elemento".
const equalsButton = document.querySelector('[igual]');
const deleteButton = document.querySelector('[borrar]');
const allClearButton = document.querySelector('[limpiar-todo]');
const previousOperand = document.querySelector('[operando-previo]');
const currentOperand = document.querySelector('[operando-actual]');
const selectedOperation = document.querySelector('[operacion-seleccionada]');

// puedo acceder al valor de un elemento (que es un objeto) a través de la propiedad textContext. Ejemplo:
alert(equalsButton.textContent); // CUIDADO!! textContent es un string, si es boton que tiene un numero deberemos convertirlo a (number) primero, para poder hacer operacion matematicas

// Los elementos "button" tienen un método (funcion) que nos sirve para escuchar un "evento" (como por ejemplo cuando le haces click) y cada vez que suceda ese evento ejecutar una funcion. Ejemplo:

const botonNumero1 = numberButtons[0]; // el primer elemento numero del html era el 1
function funcionQueSeEjecutaCuandoHacesClickEnBoton() {
  alert("Me tocaste!. Mi valor es: " + botonNumero1.textContent)  
}
botonNumero1.addEventListener('click', funcionQueSeEjecutaCuandoHacesClickEnBoton);