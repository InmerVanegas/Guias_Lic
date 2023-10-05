const btnValidar = document.getElementById("idBtnAgregar");


btnValidar.addEventListener("click", function (event) {
    event.preventDefault();

    const carnet = document.getElementById("idTxtCarnet").value;
    const nombreCompleto = document.getElementById("idTxtNombreCompleto").value;
    const dui = document.getElementById("idTxtNumeroDui").value;
    const nit = document.getElementById("idTxtNumeroNit").value;
    const fechaNacimiento = document.getElementById("idTxtFechaNacimiento").value;
    const correo = document.getElementById("idTxtCorreo").value;
    const edad = document.getElementById("idTxtEdad").value;


    const carnetRegex = /^[A-Z]{2}\d{3}$/;
    const nombreRegex = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/;
    const duiRegex = /^\d{8}-\d{1}$/;
    const nitRegex = /^\d{4}-\d{6}-\d{3}-\d{1}$/;
    const fechaNacimientoRegex = /^\d{4}-\d{2}-\d{2}$/;
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const edadRegex = /^\d+$/;

    function validarCampo(valor, regex) {
        return regex.test(valor);
    }

    function mostrarError(campo, mensaje) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "alert alert-danger mt-2";
        errorDiv.innerText = mensaje;
        campo.parentNode.appendChild(errorDiv);
    }

    function limpiarErrores() {
        const errores = document.querySelectorAll(".alert");
        errores.forEach(function (error) {
            error.remove();
        });
    }

    limpiarErrores();
    if (!validarCampo(carnet, carnetRegex)) {
        mostrarError(document.getElementById("idTxtCarnet"), "Carnet no válido. Formato: AB001");
    }
    if (!validarCampo(nombreCompleto, nombreRegex)) {
        mostrarError(document.getElementById("idTxtNombreCompleto"), "Nombre no válido. No debe contener números ni caracteres especiales.");
    }
    if (!validarCampo(dui, duiRegex)) {
        mostrarError(document.getElementById("idTxtNumeroDui"), "Número de DUI no válido. Formato: ########-#");
    }
    if (!validarCampo(nit, nitRegex)) {
        mostrarError(document.getElementById("idTxtNumeroNit"), "Número de NIT no válido. Formato: ####-######-###-#");
    }
    if (!validarCampo(fechaNacimiento, fechaNacimientoRegex)) {
        mostrarError(document.getElementById("idTxtFechaNacimiento"), "Fecha de nacimiento no válida. Formato: YYYY-MM-DD");
    }
    if (!validarCampo(correo, correoRegex)) {
        mostrarError(document.getElementById("idTxtCorreo"), "Correo electrónico no válido.");
    }
    if (!validarCampo(edad, edadRegex)) {
        mostrarError(document.getElementById("idTxtEdad"), "Edad no válida. Debe ser un número.");
    }
});

