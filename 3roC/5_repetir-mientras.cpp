/*
Estructura repetir-mientras en pseudocodigo:

repetir
  ------
  ------
  ------
mientras CONDICION



Ejemplo del programa visto en clase:

Programa repetir-mientras
Variables
  numero: numérico entero

Comenzar
  numero <= 1
  repetir
    mostrar("Hola ", numero)
    numero <= numero + 1
  mientras numero < 101
*/



#include <iostream>
using namespace std;
int main()
{

  // sintaxis de la estructura repetir-mientras en C++
  do
  {
    // aca escribimos las instrucciones que se repetiran
  } while (/* condicion */);

  // La estructura do-while (repetir-mientras) se repite mientras que la condicion sea verdadera. Cuando la condición sea falsa, el ciclo termina
  
  return 0;
}
