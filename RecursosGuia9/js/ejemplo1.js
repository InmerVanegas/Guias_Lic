const constrolIDS = {};

const newForm = document.getElementById('idNewForm');

const btnCrear = document.getElementById('idBtnCrear');
const btnValidar = document.getElementById('idBtnValidar');
const buttonAddElemento = document.getElementById('idBtnAddElement');

const cmbElemento = document.getElementById('idCmbElemento');

const tituloElemento = document.getElementById('idTituloElemento');
const nombreElemento = document.getElementById('idNombreElemento');

const modal = new bootstrap.Modal(document.getElementById('idModal'), {});

const verificarTipoElemento = function () {
    let elemento = cmbElemento.value;

    if (elemento != "") {
        modal.show();
    } else {
        alert('Debe seleccionar el elemento que se creara');
    }
};

const newSelect = function () {
    let addElemento = document.createElement('select');
    addElemento.setAttribute('id', `id${nombreElemento.value}`);
    addElemento.setAttribute('class', 'form-select');

    for (let i = 1; i <= 10; i++) {
        let addOption = document.createElement('option');
        addOption.value = i;
        addOption.innerHTML = `Opcion ${i}`;
        addElemento.appendChild(addOption);
    }

    let labelElemento = document.createElement('label');
    labelElemento.setAttribute('for', `id${nombreElemento.value}`);
    labelElemento.textContent = tituloElemento.value;

    let labelId = document.createElement('span');
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    let divElemento = document.createElement('div');
    divElemento.setAttribute('class', 'form-floatin');

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);

    newForm.appendChild(divElemento);

}

const newRadioCheckbox = function (newElemento) {
    let addElemento = document.createElement('input');

    addElemento.setAttribute('id', `id${nombreElemento.value}`);
    addElemento.setAttribute('type', newElemento);
    addElemento.setAttribute('class', 'form-check-input');

    let labelElemento = document.createElement('label');
    labelElemento.setAttribute('class', 'form-check-label');
    labelElemento.setAttribute('for', `id${nombreElemento.value}`);

    labelElemento.textContent = tituloElemento.value;

    let labelID = document.createElement('span');
    labelID.textContent = `ID de control: ${nombreElemento.value}`;

    let divElemento = document.createElement('div');

    divElemento.setAttribute('class', 'form-check');

    divElemento.appendChild(addElemento);
    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelID);

    newForm.appendChild(divElemento);
}

const newInput = function (newElemento) {
    let addElemento;

    if (newElemento === "color") {
        addElemento = document.createElement('input');
        addElemento.setAttribute('type', 'color');
    } else if (newElemento === "email") {
        addElemento = document.createElement('input');
        addElemento.setAttribute('type', 'email');
    } else {
        addElemento =
            newElemento === "textarea"
                ? document.createElement('textarea')
                : document.createElement('input');
        addElemento.setAttribute('type', newElemento);
    }

    addElemento.setAttribute('id', `id${nombreElemento.value}`);
    addElemento.setAttribute('type', newElemento);
    addElemento.setAttribute('class', 'form-control');
    addElemento.setAttribute('placeholder', tituloElemento.value);

    let labelElemento = document.createElement('label');
    labelElemento.setAttribute('for', `id${nombreElemento.value}`);

    let iconLabel = document.createElement('i');
    iconLabel.setAttribute('class', 'bi bi-tag');

    labelElemento.textContent = tituloElemento.value;

    labelElemento.insertAdjacentElement('afterbegin', iconLabel);

    let labelId = document.createElement('span');
    labelId.textContent = `ID de control: ${nombreElemento.value}`;

    let divElemento = document.createElement('div');
    divElemento.setAttribute('class', 'form-floating mb-3');

    divElemento.appendChild(addElemento);

    divElemento.appendChild(labelElemento);

    newForm.appendChild(labelId);

    newForm.appendChild(divElemento);
}

btnCrear.onclick = () => {
    verificarTipoElemento();
};

buttonAddElemento.onclick = () => {
    if (nombreElemento.value != "" && tituloElemento.value != "") {
        let elemento = cmbElemento.value;

        const newControlID = `id${nombreElemento.value}`;

        if (constrolIDS[newControlID]) {
            alert('El identificador del componente ya existe, coloque uno diferente');
            console.log(constrolIDS);
        } else {
            constrolIDS[newControlID] = true;

            if (elemento == "select") {
                newSelect();
            } else if (elemento == "radio" || elemento == "checkbox") {
                newRadioCheckbox(elemento);
            } else if (elemento === "color" || elemento === "email") {
                newInput(elemento);
            } else {
                newInput(elemento);
            }
        }
    } else {
        alert('Faltan campos por completar');
    }
};

btnValidar.onclick = () => {
    const controls = newForm.querySelectorAll('.form-control, .form-check-input, .form-select');

    let valid = true;

    controls.forEach(control => {
        if (control.type === 'checkbox' || control.type === 'radio' || control.tagName === 'select') {
            if (!control.checked && control.value === '') {
                valid = false;
            }
        } else if (control.value === '') {
            valid = false;
        }
    });

    if (valid) {
        alert('La informacion de los controles es valida');
    } else {
        alert('Llene todo los campos correctamente');
    }
}

document.getElementById('idModal').addEventListener('show.bs.modal', () => {
    tituloElemento.value = "";
    nombreElemento.value = "";

    tituloElemento.focus();
})