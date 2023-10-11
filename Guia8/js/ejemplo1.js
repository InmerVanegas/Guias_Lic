const btnArea = document.getElementById("idBtnAltura");
const btnPerim = document.getElementById("idBtnPerimetro");
const base = document.getElementById("idTxtBase");
const altura = document.getElementById("idTxtAltura");

const iniciar = () => {
    if(btnArea.addEventListener){
        btnArea.addEventListener("click", calcularArea,false);
    }else{
        btnArea.attachEvent("onclick", calcularArea);
    }
    if(btnPerim.addEventListener){
        btnPerim.addEventListener("click", calcularPerimetro,false);
    }else{
        btnPerim.attachEvent("onclick",calcularPerimetro);
    }
};

const calcularArea = function (){
    if(base.value == "" || altura.value == ""){
        alert("Faltan campos por llenar");
    }else{
        let rect = new rectangulo(base.value, altura.value);
        rect.mostrar(rect.cArea(), " area");
    }
    return false;
};

const calcularPerimetro = function (){
    if(base.value == "" || altura.value == ""){
        alert("Faltan campos por llenar");
    }else{
        let peri = new rectangulo(base.value, altura.value);
        peri.mostrar(peri.cPerimetro(), "perimetro");
    }
    return false;
}

const rectangulo = function (base, altura){
    this.base = parseFloat(base);
    this.altura = parseFloat(altura);
    this.cArea = new Function("return this.base * this.altura");
    this.cPerimetro = new Function("return 2*this.base + 2*this.altura");
    this.mostrar = new Function(
        "valor",
        "tipoc",
        "alert('El ' + tipoc + ' es: ' + valor)"
    );
};

iniciar();