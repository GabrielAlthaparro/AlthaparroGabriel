// estas dos líneas tienen que estar para que nuestro programa pueda usar el cin y el cout
#include <iostream>
using namespace std;

// en C++ todas las líneas de código deben terminar con el caracter punto y coma ;

// Variables
int edad; // edad: numérico entero
int numero1; // numero1: numérico entero
int numero2; // numero2: numérico entero
int suma, resta, producto; // en c++ también podemos declarar varias variables de un mismo tipo en una sola línea
float division; // division: numérico real


// Comenzar
int main()
{

  // aca es donde escribimos nuestro código. También podemos declarar variables en esta parte, en vez de hacerlo arriba


  // Cuando mostramos texto, y queremos que se salte a la siguiente linea en la consola, usamos el caracter especial endl
  cout << "Ingrese su edad por favor" << endl; // mostrar("Ingrese su edad por favor")
  cin >> edad; // leer(edad)


  /*
  si edad < 18 entonces
    mostrar("Tienes ", edad, "años, no puedes usar este programa. Hasta luego!")
  sino
    mostrar("Sos mayor de edad, podes usar este programa")
    --------
    código en c++ del pseudocodigo del ejercicio1.txt
    --------
  finsi
  */
  if (edad < 18){
    cout << "Tienes " << edad << " años, no puedes usar este programa. Hasta luego!";

  } else {
    
    cout << "Sos mayor de edad, podes usar este programa" << endl;

    cout << "Ingresa dos números enteros por favor:" << endl;
    cin >> numero1;
    cin >> numero2;

    suma = numero1 + numero2;
    resta = numero1 - numero2;
    producto = numero1 * numero2;

    cout << "Suma: " << suma << endl;
    cout << "Resta: " << resta << endl;
    cout << "Producto: " << producto << endl;

    // con la division tenemos que tener cuidado de que el divisor (numero2) no sea 0
    if (numero2 != 0){
      division = numero1 / numero2;
      cout << "División: " << division;
    }
  }



// Fin
  return 0;
}
