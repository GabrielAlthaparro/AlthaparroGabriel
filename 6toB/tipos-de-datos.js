/*
link de página para programar en javascript (programiz):
https://www.programiz.com/javascript/online-compiler/
*/

// number
alert("number:");
let miNumero; // declaramos una variable
miNumero = 5; // le asignamos 5
alert(miNumero);
miNumero = 10; // ahora le asignamos 10
alert(miNumero);

//operaciones
alert("Operaciones con números:");
alert(miNumero + miNumero); // suma
alert(miNumero - miNumero); // resta
alert(miNumero * miNumero); // multiplicacion
alert(miNumero / miNumero); // division
alert(miNumero % 4); // resto de una division 10 % 4 = 2, por ejemplo

// condiciones
alert("Condiciones con números:");
let otroNumero = 5; // declaramos e inicializamos la variable otroNumero con el valor 5
alert(miNumero == otroNumero); // son iguales?
alert(miNumero != otroNumero); // son diferentes?
alert(miNumero > otroNumero); // miNumero es mayor que otroNumero?
alert(miNumero < otroNumero); // miNumero es menor que otroNumero? 
alert(miNumero >= otroNumero); // miNumero es mayor o igual que otroNumero?
alert(miNumero <= otroNumero); // miNumero es menor o igual que otroNumero? 



// string
alert();
alert("string:")
let texto = "Hola, soy un texto, y me puedo concatenar";
let otro = " con otros textos";

// operaciones
alert("Operaciones con strings:");
alert(texto + otro); // concatenacion

// condiciones
alert("Condiciones con strings:");
alert(texto == otro); // son iguales?
alert(texto != otro); // son diferentes?

// acceder a un caracter de un string
alert("Acceder a caracter de un string:");
let primeraLetra = texto[0]; // declaramos la variable primeraLetra. Recordemos que podemos acceder a un caracter de un string indicando la posicion, iniciando desde la posicion 0. Cual es la letra en la posicion 0 de la variable texto? :)
alert(primeraLetra);
let segundaLetra = texto[1];
alert(segundaLetra);

// para obtener la cantidad (numéro entero) de caracteres de un string usamos .length luego de un string:
alert("Obtener cantidad de caracteres de un string:")
alert(texto.length)
alert("Hola".length)





// boolean
alert();
alert("boolean:");
// true y false son los unicos 2 tipos de datos que puede tener una variable de tipo boolean
let miBooleano = true; // a la variable miBooleano le asignamos el valor true
miBooleano = false; // ahora le asignamos el valor false

if (miBooleano == true) {
  alert("miBooleano tiene valor true!");
}else{
  alert("miBooleano tiene el valor false!");
}

// condiciones
alert("Condiciones de booleanos:");
alert(true == true) // son iguales? true
alert(true != true) // son diferentes? false

// operadores lógicos

// operador lógico NO (Negación lógica. Si el valor era verdadero, retorna falso. Si era falso, retorna verdadero)
alert("Operador lógico NO:");
alert(!true);  // false
alert(!false); // true

// operador lógico Y (Conjunción lógica. Retorna verdadero solo si ambos valores son verdaderos. Es decir, si alguno de ellos es falso, entonces retornará falso)
alert("Operador lógico Y:");
alert(true && true);   // true
alert(true && false);  // false
alert(false && true);  // false
alert(false && false); // false

// operador lógico O (Disyunción lógica. Retorna verdadero si al menos uno de los valores es verdadero. Para que retorne falso, ambas valores deben ser falsos)
alert("Operador lógico O:");
alert(true || true);   // true
alert(true || false);  // true
alert(false || true);  // true
alert(false || false); // false
