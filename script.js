// Función para verificar si un número es par
function esPar(num) {
  if (typeof num !== 'number') throw new Error('Debe ser un número');
  return num % 2 === 0;
}

// Interacción simple con la UI
document.getElementById('checkBtn').addEventListener('click', () => {
  const input = document.getElementById('numberInput').value;
  const result = document.getElementById('result');
  const num = Number(input);

  if (isNaN(num)) {
    result.textContent = 'Por favor ingresa un número válido';
  } else {
    result.textContent = esPar(num) ? 'Es par' : 'No es par';
  }
});

// Exportar función para testeo
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { esPar };
}
