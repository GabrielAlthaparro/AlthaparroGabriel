/*
Pseudocódigo

Programa tablaPitagorica
Variables
  num, cont: numérico entero

Comenzar
  mostrar("Ingrese un número por favor:\n") // \n = endl de C++. Sirve para saltar una línea de la pantalla
  leer(num)
  mostrar("Tabla del ", num, "\n")
  para cont <= 0 hasta 10 hacer
    mostrar(num, " x ", cont, " = ", num * cont, "\n")
Fin

*/


// C++
#include <iostream>
using namespace std;

int main() {
  int num, cont;
  cout << "Ingrese un número por favor:" << endl;
  cin >> num;
  cout << "Tabla del " << num << ":" << endl;
  for (cont = 0; cont <= 10; cont++) {
    cout << num << " x " << cont << " = " << num * cont << endl;
  }

  return 0;
}