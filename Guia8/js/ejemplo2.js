const cmbDia = document.getElementById("idCmbDia");
const cmbMes = document.getElementById("idCmbMes");
const txtAnio = document.getElementById("idTxtAnio");
const btnCalcular = document.getElementById("idBtnCalcular");

const arrayMes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const esBisiesto = function(anno){
    if(anno % 4 == 0 && (anno % 400 == 0 || anno % 100 != 0)){
        bisiesto = true;
    }else{
        bisiesto = false;
    }
    return bisiesto;
};

const quitarDias = function (menuDias){
    for(i = 0; i < menuDias.options.length; i++){
        menuDias.options[i] = null;
    }
};

const llenarDias = function (mes){
    let i;
    const menuDias = document.frmEdad.idCmbDia;
    quitarDias(menuDias);
    switch(mes){
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
            for(i = 0; i < 31; i++){
                menuDias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
            }
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            for(i = 0; i < 30; i++){
                menuDias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
            }
            break;
        case "Febrero":
            if(esBisiesto(txtAnio.value)){
                for(i = 0; i < 29; i++){
                    menuDias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
                }
            }else{
                for(i = 0; i < 28; i++){
                    menuDias[i] = new Option(parseInt(i + 1), parseInt(i + 1));
                }
            }
            break;
    }
};

const loadMes = () =>{
    let option, textnode;
    for(const m of arrayMes){
        document.appendChild;
        option = document.createElement("option");
        option.value = m;
        textnode = document.createTextNode(m);
        option.appendChild(textnode);
        cmbMes.appendChild(option);
    }
};

const calcularEdad = function(dia, mes, annio){
    let tusdias, tusmeses, tusannios;
    let fecActual = new Date();
    let year = fecActual.getFullYear();
    let month = parseInt(fecActual.getMonth()) + 1;
    let day = fecActual.getDate();
    tusdias = day - dia;
    
    switch(mes){
        case "Enero":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Febrero":
            mes = 2;
            if(tusdias < 0 && esBisiesto(annio)){
                tusdias = day - dia + 29;
                month--;
            }else if(tusdias < 0 && !esBisiesto(annio)){
                tusdias = day - dia + 28;
                month--;
            }
            break;
        case "Marzo":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Abril":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 30;
                month--;
            }
            break;
        case "Mayo":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Junio":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 30;
                month--;
            }
            break;
        case "Julio":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Agosto":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Septiembre":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 30;
                month--;
            }
            break;
        case "Octubre":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 31;
                month--;
            }
            break;
        case "Noviembre":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 30;
                month--;
            }
            break;
        case "Diciembre":
            mes = 1;
            if(tusdias < 0){
                tusdias = day - dia + 31;
                month--;
            }
            break;
    }
    tusmeses = month - mes;
    if(tusmeses < 0){
        tusmeses = month - mes + 12;
        year--;
    }
    tusannios = year - annio;
    alert(
        "Tu edad exacta es:\n"+
        tusannios +
        " años,\n"+
        tusdias +
        " dias."
    );
};

btnCalcular.onclick = function(){
    let dia = cmbDia.value;
    let mes = cmbMes.value;
    let anio = txtAnio.value;
    calcularEdad(dia,mes,anio);
};

cmbMes.onchange = function (){
    llenarDias(this.value);
}

txtAnio.onchange = function (){
    llenarDias(cmbMes.value);
};

llenarDias("Enero");
loadMes();