/*
Hay dos variantes (formas) de usar la estructura si-entonces:

1)
si CONDICION entonces
  -----------
  ----------- // instrucciones que se ejecutan solo si la condicion es verdadera
  -----------
finsi

2)
si CONDICION entonces
  -----------
  ----------- // instrucciones que se ejecutan solo si la condicion es verdadera
  -----------
sino
  -----------
  ----------- // instrucciones que se ejecutan solo si la condicion es falsa
  -----------
finsi

*/



// En javascript, la primera forma se escribe así:
// Aclaración: reemplazen /*condicion*/ por una condición váida

if (/*condicion*/) {
  // instrucciones que se ejecutan solo si la condicion es verdadera
}


// la otra forma, usando el sino, se escribe así:

if (/*condicion*/) {
  // instrucciones que se ejecutan solo si la condicion es verdadera
} else {
  // instrucciones que se ejecutan solo si la condicion es falsa
}