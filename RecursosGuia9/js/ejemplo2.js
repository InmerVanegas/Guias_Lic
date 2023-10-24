const formulario = document.forms['frmRegistro'];

const button = document.forms['frmRegistro'].elements['btnRegistro'];

const modal = new bootstrap.Modal(document.getElementById('idModal'), {});

const bodyModal = document.getElementById('idBodyModal');

const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;
    let today = new Date();
    const regularExpresion = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        let elemento = elementos[index];

        let tipoElemento = elemento.type;

        let tipoNode = elemento.nodeName;

        if (tipoElemento == 'text' && tipoNode == 'INPUT') {
            if (elemento.value.trim() === '') {
                alert('Por favor, complete todos los campos');
                return;
            }
            totText++;
        } else if (tipoElemento == 'password' && tipoNode == 'INPUT') {
            if (elemento.value.trim() === '' || elemento.value !== elementos['idPasswordRepetir'].value) {
                alert('Por favor, complete todos los campos o las contraseñas deben ser iguales');
                return;
            }
            console.log(elemento);
            totPass++;
        } else if (tipoElemento == 'email' && tipoNode == 'INPUT') {
            if (elemento.value.trim() === '' || !regularExpresion.test(elemento.value)) {
                alert('Por favor, complete todos los campos');
                return;
            }
            totEmail++;
        } else if (tipoElemento == 'radio' && tipoNode == 'INPUT') {
            if (elemento.value.trim() === '' || !elemento.checked) {
                alert('Por favor, complete todos los campos o debe seleccionar una carrera');
                return;
            }
            totRadio++;
        } else if (tipoElemento == 'checkbox' && tipoNode == 'INPUT') {
            if (elemento.value.trim() === '' || !elemento.checked) {
                alert('Por favor, complete todos los campos o seleccionar un interes');
                return;
            }
            totCheck++;
        } else if (tipoElemento == 'file' && tipoNode == 'INPUT') {
            if (elemento.value.trim() === '') {
                alert('Por favor, complete todos los campos');
                return;
            }
            totFile++;
        } else if (tipoElemento == 'date' && tipoNode == 'INPUT') {
            const selectedDate = new Date(elemento.value);
            if (selectedDate > today) {
                alert('La fecha de nacimiento no puede ser mayor a la actual');
                return;
            }
            totDate++;
        } else if (tipoNode == 'SELECT') {
            if (elemento.value === '') {
                alert('Por favor, complete todos los campos');
                return;
            }
            totEmail++;
        }
    }

    let resultado = `
        Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="emal"] = ${totEmail}<br>
        Total de input= ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;
    const tablaBody = document.getElementById('tablaBody');


    const tabla = document.createElement('table');
    tabla.classList.add('table');
    tabla.classList.add('table-bordered');

    const encabezado = tabla.createTHead();
    const filaEncabezado = encabezado.insertRow(0);


    const encabezados = ['Campo', 'Cantidad'];
    for (let i = 0; i < encabezados.length; i++) {
        const th = document.createElement('th');
        th.innerHTML = encabezados[i];
        filaEncabezado.appendChild(th);
    }


    const tiposCampos = ['Text', 'Password', 'Radio', 'Checkbox', 'Date', 'Email', 'Select'];
    for (let i = 0; i < tiposCampos.length; i++) {
        const filaDatos = tabla.insertRow(i);
        const tipo = tiposCampos[i];
        const cantidad = [totText, totPass, totRadio, totCheck, totDate, totEmail, totSelect][i];
        const celdas = [tipo, cantidad];
        for (let j = 0; j < celdas.length; j++) {
            const celda = filaDatos.insertCell(j);
            celda.textContent = celdas[j];
        }
    }

    while (tablaBody.firstChild) {
        tablaBody.removeChild(tablaBody.firstChild);
    }

    tablaBody.appendChild(tabla);

    modal.show();
};

button.onclick = () => {
    recorrerFormulario();
}