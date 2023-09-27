let digistsNumber = () => {
    let num = parseInt(prompt("Ingrese un numero entero positivo"));

    let digists = 0,
        evenDigists = 0,
        oddDigists = 0,
        sumEvenDigists = 0,
        sumOddDigists = 0,
        totalSum = 0,
        lowerDigits = Number.MAX_SAFE_INTEGER,
        higherNumber = 0;

    let positiveNum = Math.abs(num);
    while (positiveNum > 0) {
        console.log(positiveNum);
        let cifra = positiveNum % 10;
        digists++;
        totalSum += cifra;

        if (cifra % 2 == 0) {
            evenDigists++;
            sumEvenDigists += cifra
        } else {
            oddDigists++;
            sumOddDigists += cifra;
        }
        lowerDigits = Math.min(cifra, lowerDigits);
        higherNumber = Math.max(cifra, higherNumber);

        positiveNum = Math.floor(positiveNum / 10);
    }



    let containerDigists = document.querySelector("#idContainerCifras");
    let resutDiv = document.createElement("div");
    resutDiv.classList.add("col-md-12", "py-5");

    resutDiv.innerHTML = `
        <p>a) Cantidad de cifras: ${digists}</p>
        <p>b) Cantidad de cifras impares: ${oddDigists}</p>
        <p>c) Cantidad de cifras pares: ${evenDigists}</p>
        <p>d) Suma de cifras impares: ${sumOddDigists}</p>
        <p>e) Suma de cifras pares: ${sumEvenDigists}</p>
        <p>f) Suma de todas las cifras: ${totalSum}</p>
        <p>g) Cifra mayor: ${higherNumber}</p>
        <p>h) Cifra menor: ${lowerDigits}</p>
    `;
    containerDigists.appendChild(resutDiv);

}

const btnVerCifras = document.querySelector("#idBtnVerCifras");
btnVerCifras.addEventListener("click", digistsNumber);