// Si queremos hacer un programa que pida la edad al usuario, e informe si este es mayor o menor de edad, podriamos hacerlo asi:

let edad; // declaramos (creamos) la variable llamada edad

let textNum = prompt("Ingrese su edad"); // le pedimos al usuario su edad, y lo guardamos en la variable textNum
// textNum es de tipo string (ya que prompt siempre nos dara en tipo de dato string lo que ingrese el usuario), tenemos que castearlo a numero para preguntar si es mayor de edad
edad = parseInt(textNum);
if (edad >= 18){
  console.log("Sos una persona mayor de edad");
}else{
  console.log("Sos una persona menor de edad");
}