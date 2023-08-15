#include <iostream>

using namespace std;

int main()
{
  // esto es un comentario de línea. La computadora no ejecuta el codigo luego de encontrar "//". Tambien existen los comentarios multilinea, con los caracteres "/*" para abrir, y los caracteres "*/" para terminar. Ejemplo:

  /* Este es un comentario multilínea,
  y la computadora lo ignora. :)
  */

  int numero1; // declaramos la variable numero1, de tipo numérico entero
  int numero2; // declaramos la variable numero2, de tipo numérico entero
  int suma, resta, producto; // también podemos declarar varias variables de un mismo tipo en una sola línea
  cout << "Ingresa dos números enteros por favor:" << endl; // mostramos mensaje por pantalla. endl es un "enter", para saltar de linea

  // leemos los números ingresados por el usuario, y los guardamos en las variables numero1 y numero2
  cin >> numero1;
  cin >> numero2;

  suma = numero1 + numero2;
  resta = numero1 - numero2;
  producto = numero1 * numero2;

  cout << "Suma: " << suma<<endl;
  cout << "Resta" << resta<<endl;
  cout << "Producto" << producto<<endl;

  // Nos falta mostrar la division, lo hacemos en clase :)

  return 0;
}
