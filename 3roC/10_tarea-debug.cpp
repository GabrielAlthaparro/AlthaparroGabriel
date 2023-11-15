/*
Consigna: Hacer  un debug del siguiente programa en la carpeta. (Tip, recuerden que el operador % me calcula el resto de una división. Ej: 5 % 2 = 1, 4 % 2 = 0, etc.)

Variables
salir: boolean
contador: número entero
suma: número entero

Comenzar
  salir <= false
  contador <= 50
  suma <= 0
  mientras contador > 40 y no salir

    mostrar(contador, " ", contador + 10)
    si contador % 2 == 0 entonces // si contador es un número par
      contador <= contador - 3
    sino
      contador <= contador + 1
    finsi

    suma <= suma + contador
    si suma > 150 entonces
      salir <= true
    finsi
  finmientras
  mostrar(contador)
  mostrar(suma)
Fin
*/



// ejecutar el programa en C++ LUEGO de terminar el debug en la carpeta, para ver si les dan los mismo resultados :)
#include <iostream>
using namespace std;
int main() {
  bool salir;
  int contador;
  int suma;

  suma = 0;
  salir = false;
  contador = 50;
  while (contador > 40 && !salir) {

    cout << contador << " " << contador + 10 << endl;
    if (contador % 2 == 0) { // si contador es un número par
      contador = contador - 3;
    } else {
      contador = contador + 1;
    }

    suma = suma + contador;
    if (suma > 150){
      salir = true;
    }
  }
  // cout << suma << endl;
  // cout << contador << endl;
  
  return 0;
}