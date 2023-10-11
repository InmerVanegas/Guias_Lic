const btnGuardar = document.querySelector('#idBtnGuardar');
const btnMostrar = document.querySelector('#idBtnMostrar');
let arrayPeople = [];

//Object Person

class Person {
    constructor(names, lastName, birthdate, email, userName, password) {
        this.name = names;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.email = email;
        this.userName = userName;
        this.password = password;

        const initials = this.getInitials(lastName);
        const year = new Date().getFullYear();
        const randomId = this.generatedRandom();
        this.id = `${initials}-${year}-${randomId}`;
    }

    getInitials(lastName) {
        const parts = lastName.split(' ');
        let initials = '';
        if (parts.length > 1) {
            initials = parts[0][0] + parts[1][0];
        } else if (parts.length === 1) {
            initials = parts[0][0] + parts[0][0];
        }
        return initials.toUpperCase();
    }

    generatedRandom() {
        const randomDigits = Math.floor(Math.random() * 10000);
        return String(randomDigits).padStart(4, '0');
    }
}

const savePerson = () => {
    const names = document.querySelector('#idTxtNombreCompleto').value;
    const lastName = document.querySelector('#idTxtApellidos').value;
    const birthdate = document.querySelector('#idTxtFechaNacimiento').value;
    const email = document.querySelector('#idTxtCorreo').value;
    const userName = document.querySelector('#idTxtNombreUsuario').value;
    const password = document.querySelector('#idTxtPassword').value;

    if (names === "" || lastName === "" || birthdate === "" || email === "" || userName === "" || password === "") {
        alert("Los campos deben ser rellenados correctamente");
    }

    const person = new Person(names, lastName, birthdate, email, userName, password);
    arrayPeople.push(person);
    console.log(arrayPeople);
}

const printPeople = () => {
    let $fila = "";
    let contador = 1;
    arrayPeople.forEach((element) => {
        $fila += `<tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.lastName}</td>
                    <td>${element.birthdate}</td>
                    <td>${element.email}</td>
                    <td>${element.userName}</td>
                </tr>`
        contador++;
    })
    return $fila;
}

const showPeople = () => {
    let $table = `<div class="table-responsive">
                    <table class="table table-striped table-hover table-bordered">
                        <tr>
                            <th scope="col" class="text-center" style="width:5%">Id</th>
                            <th scope="col" class="text-center" style="width:15%">Nombre</th>
                            <th scope="col" class="text-center" style="width:15%">Apellidos</th>
                            <th scope="col" class="text-center" style="width:10%">Fecha Nacimiento</th>
                            <th scope="col" class="text-center" style="width:10%">Correo</th>
                            <th scope="col" class="text-center" style="width:10%">Nombre de usuario</th>
                        </tr>
                        ${printPeople()}
                    </table>
                </div>
    `;
    document.querySelector('#idTablaPersonas').innerHTML = $table;
}
btnGuardar.addEventListener("click", savePerson);
btnMostrar.addEventListener("click", showPeople);