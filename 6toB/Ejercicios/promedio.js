let numero1 = parseInt(prompt("Ingrese su nota por favor"));
let numero2 = parseInt(prompt("Ingrese su nota por favor"));
let numero3= parseInt(prompt("Ingrese su nota por favor"));

 let promedio = (numero1 + numero2 + numero3) / 3;
 
 alert("promedio:" + promedio);
 
 if (promedio < 4)
 {
alert("has aplazado")
}
if(promedio >= 4 && promedio<7)
{
alert ("Has desaprobo")
}
if(promedio >= 7)
{
alert ("has aprobado")
}