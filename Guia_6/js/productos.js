let arrayProducts = [];

let totalPrice = () => {
    let total = 0;

    for (i = 0; i < arrayProducts.length; i++) {
        const price = parseInt(arrayProducts[i][1]);
        total += price;
    }
    return total.toFixed(2);
}

let addProducts = () => {
    const containerProducts = document.querySelector("#idContainerProducto");

    const inputNameProduct = document
        .querySelector("#inputNombreProducto")
        .value.toString();
    const inputPriceProduct = document
        .querySelector("#inputPrecioProducto")
        .value.toString();

    if (inputNameProduct != "" && inputPriceProduct != "") {
        arrayProducts.push(new Array(inputNameProduct, inputPriceProduct));
        console.log(arrayProducts);
        document.querySelector("#inputNombreProducto").value = "";
        document.querySelector("#inputPrecioProducto").value = "";
        document.querySelector("#inputNombreProducto").focus();
    } else {
        alert("Los campos aun no se han completado");
    }

    if (arrayProducts.length > 0) {
        let nameProduct;
        let priceProduct;
        let table = "<table class='table table-light table-striped'>";
        table += "<thead>";
        table += "<tr>";
        table += "<th scope='col' style='width: 5%;'>#</th>";
        table += "<th scope='col' style='width: 15%;'>Producto</th>";
        table += "<th scope='col'>Precio</th>";
        table += "</tr>";
        table += "</thead>";
        table += "<tbody>";

        for (let i = 0; i < arrayProducts.length; i++) {
            nameProduct = arrayProducts[i][0];
            priceProduct = arrayProducts[i][1];
            table += `<tr>`;
            table += `<td scope='row' style='font-wight:bold;'>${i + 1}</td>`;
            table += `<td>${nameProduct}</td>`;
            table += `<td>${priceProduct}</td>`;
            table += `</tr>`;


        }
        table += "</tbody>";
        table += "<tfoot>";
        table += "<tr>";
        table += "<td colspan='2'>Total</td>"
        table += `<td>${totalPrice()}</td>`
        table += "</tfoot>";
        table += "</table>";

        containerProducts.innerHTML = table;
    } else {
        alert("Aun no hay productos registrados");
    }
}



const btnAddProduct = document.querySelector("#idBtnAgregarProducto");
btnAddProduct.addEventListener("click", addProducts);
const btnTotalPrice = document.querySelector("#idBtnTotal");
btnTotalPrice.addEventListener("click", totalPrice);