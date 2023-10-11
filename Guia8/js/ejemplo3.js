let fechaHoy = new Date();

let desfase = -Math.round(fechaHoy.getTimezoneOffset() / 60) + 12;

const iniciar = function(){
    let select = document.getElementById("zhselect");
    if(select.addEventListener){
        select.addEventListener("change", getHoraLocal, false);
    }else if(select.attachEvent){
        select.attachEvent("onchange", getHoraLocal);
    }
};

const getHoraLocal = function(){
    let fechaHoy = new Date();

    let zh = document.frmZonaHoraria.zonas.selectedIndex - desfase;

    fechaHoy.setHours(fechaHoy.getHours() + zh);

    document.frmZonaHoraria.hour.value = fechaHoy.toLocaleString();
};

iniciar();
getHoraLocal();