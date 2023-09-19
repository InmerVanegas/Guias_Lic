const convertMeasure = (conversionFactor, unit) => {
    const results = document.querySelector("#respuestas");
    let num = parseFloat(prompt(`Ingrese la medida en metros a convertir a ${unit}`));
    let result = num * conversionFactor;
    results.innerHTML = `La conversion es igual a ${result} ${unit}`;
}

const metersToFeet = () => {
    convertMeasure(3.28, 'pies');
}

const metersToYards = () => {
    convertMeasure(1.09, 'yardas');
}

const metersToInches = () => {
    convertMeasure(39.37, 'pulgadas');
}