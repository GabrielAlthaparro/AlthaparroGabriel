/*
Consigna: mostrar números por pantalla desde el 1 hasta el 100. Es decir:
1
2
...
99
100





1) estructura para (for):

Esta estructura de repetición nos va a servir cuando tenemos que repetir algo una CANTIDAD FIJA DE VECES. La variable que usamos solo puede ser numérica. En la primer iteración (cada vez que entra a ejecutar las instrucciones) a la VARIABLE se le asigna el VALOR_INICIO, y cada vez que llega al final del bloque, se incrementa la VARIABLE en 1 (es decir, variable <= variable + 1). Esto se repite hasta que a la VARIABLE se le asigna el VALOR_FINAL (inclusive), y luego de ejecutar esa iteración saldra del ciclo.

Estructura

para VARIABLE <= VALOR_INICIO hasta VALOR_FINAL hacer
  ---------
  --------- // instucciones que se repiten hasta que la variable llegue al VALOR_FINAL
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

// programa EjemploPara en javascript:

let contador1;

// (INICIALIZACION;   CONDICION;    INCREMENTO)
for (contador1 = 1; contador1 <= 100; contador1++) {
  alert(contador1);
}






/*

2) estructura repetir-mientras (do-while)


Estructura:

repetir
  --------
  -------- // instrucciones que se repiten mientras que la condición es verdadera
  --------
mientras CONDICION

pseudocodigo:

Programa ejemploRepetirMientras
Variables
  contador: numérico entero
Comenzar
  contador <= 1
  repetir
    mostrar(contador)
    contador <= contador + 1
  mientras contador <= 100
Fin


*/

let contador2 = 1;

do {
  alert(contador2);
  contador2 = contador2 + 1;
} while (contador2 <= 100);




/*
3) estructura mientras-hacer (do-while)

Estructura:

mientras CONDICION hacer
  --------
  -------- // instruccion que se repiten mientras que la condición es verdadera
  --------
finmientras

pseudocodigo:

Programa ejemploMientrasHacer
Variables
  contador: numérico entero
Comenzar
  contador <= 1
  mientras contador <= 100
    mostrar(contador)
    contador <= contador + 1
  finmientras
Fin

*/

let contador3 = 1;

while (contador3 <= 100) {
  alert(contador3);
  contador3 = contador3 + 1;
}