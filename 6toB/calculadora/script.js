const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const selectedOperationTextElement = document.querySelector('[selected-operation]')

function actualizarPantalla() {
  previousOperandTextElement.textContent = calculadora.getTextoOperandoPrevio();
  currentOperandTextElement.textContent = calculadora.getTextoOperandoActual();
}

for (let i = 0; i < numberButtons.length; i++) {
  const numberButton = numberButtons[i];
  numberButton.addEventListener('click', function () {
    try {
      calculadora.agregarDigito(numberButton.textContent);
    } catch (error) {
      alert(error);
    }

    actualizarPantalla();
  });
}

for (let i = 0; i < operationButtons.length; i++) {
  const operationButton = operationButtons[i];
  operationButton.addEventListener('click', function () {
    try {
      if (calculadora.tieneOperacion()) {
        if (calculadora.getTextoOperandoActual() !== '') {
          calculadora.calcularEnOperandoPrevio();
        }
      } else {
        calculadora.pasarOperandoActualAPrevio();
      }

      calculadora.cambiarOperacion(operationButton.textContent);
    } catch (error) {
      alert(error);
    }
    actualizarPantalla();
  })
}

equalsButton.addEventListener('click', function () {
  try {
    calculadora.calcularEnOperandoActual();
    actualizarPantalla();
  } catch (error) {
    alert(error);
  }
})

allClearButton.addEventListener('click', function () {
  calculadora.limpiar();
  actualizarPantalla();
})

deleteButton.addEventListener('click', function () {
  calculadora.borrarDigito();
  actualizarPantalla();
})