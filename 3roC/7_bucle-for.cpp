/*
estructura de repetición PARA (for):

Esta estructura de repetición nos va a servir cuando tenemos que repetir instrucciones una CANTIDAD FIJA DE VECES. La variable que usamos solo puede ser numérica. En la primer iteración (cada vez que entra a ejecutar las instrucciones) a la VARIABLE se le asigna el VALOR_INICIO, y cada vez que llega al final del bloque de instrucciones se incrementa el valor de la VARIABLE en 1 (es decir, variable <= variable + 1). Esto se repite hasta que a la VARIABLE se le asigna el VALOR_FINAL (inclusive), y luego de ejecutar esa iteración saldra del ciclo.

Estructura

para VARIABLE <= VALOR_INICIO hasta VALOR_FINAL hacer
  ---------
  --------- // instucciones que se repiten hasta que la VARIABLE supere el VALOR_FINAL
  ---------
finpara

pseudocodigo:

Programa ejemploPara
Variables
  contador: numérico entero
Comenzar
  para contador <= 1 hasta 100 hacer
    mostrar(contador)
  finpara
Fin

*/

// programa EjemploPara en C++:

#include <iostream>
using namespace std;
int main() {
  int contador;

//for (inicialización;   condición  ; incremento)

  for (contador = 0; contador <= 100; contador++) {
    cout << contador << endl; // instrucciones a repetir
  }

  return 0;
}
