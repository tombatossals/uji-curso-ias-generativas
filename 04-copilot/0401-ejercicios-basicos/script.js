// Captura cualquier error que ocurra en la página
window.onerror = function (message, source, lineno, colno, error) {
    const errorLog = document.getElementById('errorLog');
    const resultadoDiv = document.getElementById('resultado');

    errorLog.style.display = 'block';
    resultadoDiv.style.display = 'none';

    // Formatea el mensaje de error
    const errorMessage = `
          Mensaje: ${message}
          Fuente: ${source}
          Línea: ${lineno}, Columna: ${colno}
          Error: ${error ? error.stack : "N/A"}
        `;

    // Muestra el error en el elemento HTML
    errorLog.textContent = errorMessage;
};
