let textoOperandoPrevio = '';
let textoOperandoActual = '';
let operacion = null;

const calculadora = {
  getTextoOperandoPrevio,
  getTextoOperandoActual,
  pasarOperandoActualAPrevio,
  agregarDigito,
  tieneOperacion,
  cambiarOperacion,
  borrarDigito,
  limpiar,
  calcularEnOperandoPrevio,
  calcularEnOperandoActual,
}

function getTextoOperandoPrevio() {
  let texto = textoOperandoPrevio;
  if (operacion != null) {
    texto = texto + ' ' + operacion;
  }
  return texto;
}

function getTextoOperandoActual() {
  return textoOperandoActual;
}

function pasarOperandoActualAPrevio() {
  textoOperandoPrevio = textoOperandoActual;
  textoOperandoActual = '';
}

function agregarDigito(digito) {
  if (digito === '.' && cadenaContieneCaracter(textoOperandoActual, '.')) {
    throw new Error('Ya agregó un punto al número');
  }

  textoOperandoActual += digito;
}

function cadenaContieneCaracter(cadena, caracter) {
  let contieneCaracter = false;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
      contieneCaracter = true;
    }
  }
  return contieneCaracter
}

function tieneOperacion() {
  if (operacion === null) {
    return false;
  } else {
    return true;
  }
}

function cambiarOperacion(nuevaOperacion) {
  if (textoOperandoPrevio === ''){
    throw new Error('El operando previo no puede estar vacío')
  }
  operacion = nuevaOperacion;
}

function borrarDigito() {
  textoOperandoActual = borrarUltimoCaracterDeCadena(textoOperandoActual);
}

function borrarUltimoCaracterDeCadena(cadena) {
  let nuevaCadena = '';
  for (let i = 0; i < cadena.length - 1; i++) {
    nuevaCadena += cadena[i];
  }
  return nuevaCadena;
}

function limpiar() {
  textoOperandoPrevio = '';
  textoOperandoActual = '';
  operacion = null;
}

function calcularEnOperandoPrevio() {
  const resultado = calcular();
  textoOperandoPrevio = resultado.toString();
  textoOperandoActual = '';
}

function calcularEnOperandoActual() {
  const resultado = calcular();
  textoOperandoActual = resultado.toString();
  textoOperandoPrevio = '';
}

function calcular() {
  if (operacion === null) {
    throw new Error('Seleccione una operación');
  };

  if (textoOperandoPrevio === '' || textoOperandoActual === '') {
    throw new Error('Ingrese ambos operandos');
  }

  let resultado;
  const operandoPrevio = parseFloat(textoOperandoPrevio);
  const operandoActual = parseFloat(textoOperandoActual);
  switch (operacion) {
    case '+':
      resultado = operandoPrevio + operandoActual;
      break;
    case '-':
      resultado = operandoPrevio - operandoActual;
      break;
    case '*':
      resultado = operandoPrevio * operandoActual;
      break;
    case '÷':
      if (operandoActual === 0) {
        throw new Error('No se puede dividir por 0');
      }
      resultado = operandoPrevio / operandoActual;
      break;
    case '^':
      resultado = calcularPotencia(operandoPrevio, operandoActual);
      break;
    default:
      throw new Error('Operación desconocida');
  }
  operacion = null;

  return resultado;
}

function calcularPotencia(base, exponente) {
  let resultado = 1;
  for (let i = 0; i < exponente; i++) {
    resultado = resultado * base;
  }
  return resultado;
}