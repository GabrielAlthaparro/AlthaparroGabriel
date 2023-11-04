// objetos

let persona = {
  nombre: "Lionel",
  apellido: "Messi",
  edad: 36,

  // podemos declarar funciones en una propiedad. Cuando es así, no la llamamos "funcion", sino "método", método de un objeto. Igual para nosotros es lo mismo, no importa :)
  queSoy: function soyUn() {
    return "Un dios";
  }
}

console.log(persona);

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.queSoy);
console.log(persona.queSoy()); // llamo al metodo


// puedo agregar mas propiedades si quiero
persona.mujer = "Antonella"

console.log(persona);
console.log(persona.mujer);
