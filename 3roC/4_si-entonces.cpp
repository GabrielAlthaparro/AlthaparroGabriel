/*
Estructura si-entonces. Hay 2 formas de utilizarla, dependendiendo de la lógica que necesite nuestro programa:

1)
si CONDICION entonces
  ------
  ------ // código a ejecutar si la condición fue verdadera
  ------
finsi

Si la condicion es verdadera, se ejecuta el bloque de instrucciones dentro del si-finsi, y luego se siguen ejecutando las instrucciones que están luego del finsi. Por el contrario, si la condición es falsa, no se ejecutan las instrucciones del si-finsi, se "saltan", y luego se siguen ejecutando las instrucciones que están luego del finsi.


2)
si CONDICION entonces
  ------
  ------ // código a ejecutar si la condición fue verdadera
  ------
sino
  ------
  ------ // código a ejecutar si la condición fue falsa
  ------
finsi

Si la condición es verdadera, se ejecuta el bloque de instrucciones dentro del si-sino, y, luego, se "saltan" todas las instrucciones que estan entre el sino-finsi. Por el contrario, si la condición es falsa, se "saltan" las instrucciones que se encuentran entre el si-sino, y se ejecutan las instrucciones del bloque sino-finsi. Notar que SIEMPRE alguno de las 2 bloques de instrucciones (si-sino, sino-finsi) se ejecutará.
*/

#include <iostream>
using namespace std;
int main() {
  // sintaxis de la estructura si-entonces en c++:

  // 1)

  if (/*condicion*/){
    // código a ejecutar si la condición fue verdadera
  }


  // 2)
  if (/*condicion*/) {
    // código a ejecutar si la condición fue verdadera
  } else {
    // código a ejecutar si la condición fue falsa
  }
  
  
  return 0;
}
