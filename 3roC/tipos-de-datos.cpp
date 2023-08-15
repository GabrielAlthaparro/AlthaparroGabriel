#include <iostream>

using namespace std;
int main() {
  int entero;
  float real;
  bool booleano;
  char caracter;
  string cadena;

  cout << "Ingresa un numero entero: ";
  cin >> entero;
  cout << "El numero entero ingresado es: " << entero << endl;

  cout << "Ingresa un número real: ";
  cin >> real;
  cout << "El número real ingresado es: " << real << endl;

  booleano = false; // asignamos el valor falso a la variable booleano
  booleano = true;  // ahora le asignamos el valor verdadero, el valor falso se pierde
  if (booleano == true) {
    cout << "El valor es verdadero: ";
  } else {
    cout << "El valor es falso: ";
  }
  cout << booleano << endl;

  cout << "Ingresa un caracter (una sola letra o número): ";
  cin >> caracter;
  cout << "El caracter ingresado es: " << caracter << endl;

  cout << "Ingresa una cadena de caracteres: ";
  cin >> cadena;
  cout << "La cadena de caracteres ingresada es: " << cadena << endl;

  return 0;
}