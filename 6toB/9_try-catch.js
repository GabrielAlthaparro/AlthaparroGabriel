/*
MIRAR LOS VIDEOS PRIMERO!! Después vuelvan aca y prueben

Lo que nos importa de esta estructura es que si tenemos un error dentro de una funcion, y no se usa try-catch, está termina su ejecución y el error se "propaga" (recorre las funciones que están en el call stack) hasta el programa principal, terminando la ejecución con un error.

En cambio, si en alguna función del stack la línea que tiró el error se encontraba dentro del bloque del "try", el error se dejará de propagar, y se ejecutará el código del bloque del "catch". Ejemplo:
*/

function funcionQueTiraError() {
  throw "Soy un error";
}

function funcionQueLlamaAOtraFuncionQueTiraError() {

  // comenten y descomenten los /* */ del codigo 1) primero, prueben el programa, despúes vuelvan a comentarlo, y despues prueben con el codigo 2) para probar como funciona la estructura

  // 1) sin try-catch (descomenten la linea despues borrando los /* */)
  /*
  funcionQueTiraError();
  */


  // 2) con try-catch (descomenten el codigo, es decir, borren el /* y el */)
  /*
  try {
    funcionQueTiraError();
    alert("Esto no se llega a ejecutar, porque si hay un error dentro del bloque del try entonces se detiene la ejecución del bloque, y se ejecuta el catch");
  } catch (error) {
    alert("Capture un error! El error es: " + error);
  }
  */
}

funcionQueLlamaAOtraFuncionQueTiraError();

alert("No tiro error! Puedo seguir ejecutando");