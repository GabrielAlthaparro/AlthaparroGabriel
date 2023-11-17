// la funcion vista en clase. Recorre el string que recibe por parámetro 
function tienePunto(texto) {
  let cont = 0;

  while (cont <= texto.length - 1) {
    if (texto[cont] == '.') {
      return true;
    }
    cont = cont + 1;
  }

  return false;
}


// la usariamos asi a la funcion, cuando tocan el boton de punto ".": 
let textoDePrueba1 = "1.25";
if (tienePunto(textoDePrueba1)) {
  alert("El texto 1 ya tiene un punto!")
} else {
  alert("El texto 1 no tiene un punto, lo podes agregar")
  textoDePrueba1 = textoDePrueba1 + "."
  alert(textoDePrueba1)
}


let textoDePrueba2 = "1325";
if (tienePunto(textoDePrueba2)) {
  alert("El texto 2 ya tiene un punto!")
} else {
  alert("El texto 2 no tiene un punto, lo podes agregar:")
  textoDePrueba2 = textoDePrueba2 + "."
  alert(textoDePrueba2)
}
