// implementacion en C++ del ejercicio del promedio de la tarea:
/*
Escribir un programa en C++ que solicite al usuario tres calificaciones (números enteros) y calcule el promedio de las tres calificaciones. Si el promedio es:

Menor a 4, mostrar por pantalla: "Has aplazado!"
Mayor o igual a 4, y menor a 7, mostrar por pantalla: "Has desaprobado!"
Mayor o igual a 7, mostrar por pantalla: "Has aprobado!"
*/

#include <iostream>
using namespace std;
int main()
{
  // declaramos las variables para nuestro programa
  int nota1, nota2, nota3;
  float promedio;

  // le pedimos al usuario que ingrese las 3 notas y las guardamos en variables
  cout << "Ingrese 3 notas (del 1 al 10) por favor:" << endl;
  cin >> nota1;
  cin >> nota2;
  cin >> nota3;

  // calculamos el promedio y lo mostramos por pantalla
  promedio = (nota1 + nota2 + nota3) / 3.0;
  cout <<"Su promedio es: " << promedio << endl;

  // usamos la estructura si-entonces para mostrar un texto u otro, en base al valor calculado en la variable promedio
  if (promedio >= 7) {
    cout << "Has aprobado!";
  } else {
    if (promedio >= 4) {
      cout << "Has desaprobado!";
    } else {
      cout << "Has aplazado!";
    }
  }

  return 0;
}
