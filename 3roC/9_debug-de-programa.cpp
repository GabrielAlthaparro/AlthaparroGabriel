/*
Para hacer un debug de un programa, nos tenemos que poner en el papel de la cpu, y ejecutarlo línea por línea. En este proceso, deberemos dibujar una cajita para cada variable, y cada vez que se le asigna un valor, reemplazar el anterior (tachandolo, no lo borren). También dibujaremos una pantalla, en donde deberemos escribir los mensajes que hacemos con la instrucción mostrar()

Variables
  cont: número entero
Comenzar
  cont <= 6
  repetir
    mostrar(cont)
    cont <= cont - 2
  mientras cont < 0
  mostrar("Fin")
Fin
*/

#include <iostream>
using namespace std;
int main() {
  int cont;

  cont = 6;
  do {
    cout << cont << endl;
    cont = cont - 2;
  } while(cont < 0);
  cout << "Fin";
  
  return 0;
}

// link para probar el programa: https://www.onlinegdb.com/online_c++_compiler
