const btnCalcular = document.getElementById("idBtnNumero");
const divResultado = document.getElementById("idDivResultado");

const mostrando = () => {
    let potencia = new Numero();
    potencia.calcularPotencia();
    divResultado.innerHTML = potencia.mostrarResultado();
}

class Numero {
    resultado;
    constructor() {
        this.base = document.getElementById("idTxtNumero").value;
        this.potencia = document.getElementById("idTxtPotencia").value;

    }

    calcularPotencia() {
        return this.resultado = Math.pow(this.base, this.potencia);;
    }
    mostrarResultado() {
        return `<h3>El resultado de la potencia es: ${this.resultado} </h3>`
    }
}

btnCalcular.addEventListener("click", mostrando);
