let book = new Object();

const iniciar = function(){
    const showInfo = document.getElementById("idBtnEnviar");
    const txtAutor = document.getElementById("txtautor");
    txtAutor.focus();
    if(showInfo.addEventListener){
        showInfo.addEventListener(
            "click",
            function(){
                createObject(document.frmbook);
            },
            false
        );
    }else if(showInfo.attachEvent){
        showInfo.attachEvent("onclick", function(){
            createObject(document.frmbook);
        });
    }
};

const createObject = function(form){
    if(
        form.txtautor.value == "" ||
        form.txtitulo.value == "" ||
        form.txtpais.value == ""
    ){
        alert("Faltan campos por completar");
        return false;
    }

    book.autor = form.txtautor.value;
    book.titulo = form.txtitulo.value;
    book.editorial =
        form.seleditorial.options[form.seleditorial.selectedIndex].text;
    book.edicion = form.seledicion.options[form.seledicion.selectedIndex].text;
    book.pais = form.txtpais.value;

    shoProperties(book, "InfoBook");
};

const shoProperties = function(objeto, objName){
    let infBook = "";
    let tblBooK = "";

    for(let i in objeto){
        infBook = infBook + objName + "." + i + "=" + objeto[i] + "\n";
    }
    if(!confirm(infBook + "\n\n¿Desea agregar la siguiente informacion?")){
        frmbook.txtautor.value = "";
        frmbook.txtitulo.value = "";
        frmbook.seleditorial.value = "a";
        frmbook.seledicion.value = "a";
        frmbook.txtpais.value = "";
    }
    tblBooK = `
    <table class="table table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col" class="text-center">Titulo</th>
                <th scope="col" class="text-center">Autor</th>
                <th scope="col" class="text-center">Editorial</th>
                <th scope="col" class="text-center">Edicion</th>
                <th scope="col" class="text-center">Pais</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${book.titulo}</td>
                <td>${book.autor}</td>
                <td>${book.editorial}</td>
                <td>${book.edicion}</td>
                <td>${book.pais}</td>
            </tr>
        </tbody>
    </table>
    `;

    document.getElementById("idDivResultado").innerHTML = tblBooK;
};

if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}