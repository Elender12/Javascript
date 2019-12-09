/**
 * Script que genera una tabla de fisioterapeutas y  muestra
 * el resultado en un archivo html
 * Alumno: Cirstea Elena
 * Curso: DAW2
 */

function tablaFisio() {
    var fisioterapeutas = ['María Perez', 'Miguel Lorenzo', 'Denís Valle', 'Sara Lorden', 'Ana Mercedes', 'Romualdo Ramíres', 'Mandingo García'];
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");

    var tblBody = document.createElement("tbody");
    var dias = ['Horario', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
    for (var j = 0; j < 6; j++) {
        dia = document.createTextNode(dias[j]);
        var cabeceraTh = document.createElement("th");
        cabeceraTh.appendChild(dia);
        tblBody.appendChild(cabeceraTh);
    }
    //variables para mostrar el horario de los fisioterapeutas en la tabla generada
    //var horaManiana y horaManiana1 inicializa las horas del turno de mañana
    var horaManiana = new Date('2018-09-28T10:00:00');
    var horaManiana1 = new Date('2018-09-28T09:15:00');
    //var horaTarde y horaTarde1 inicializo las horas del turno de la tarde
    var horaTarde = new Date('2018-09-28T13:15:00');
    var horaTarde1 = new Date('2018-09-28T12:30:00');

    // Crea las celdas
    for (var i = 0; i < 11; i++) {
        // Crea las filas de la tabla
        var fila = document.createElement("tr");
        //genero las horas del turno de la mañana 
        horaManiana.setMinutes(horaManiana.getMinutes() + 45);
        horaManiana1.setMinutes(horaManiana1.getMinutes() + 45);
        //genero las horas del turno de la tarde
        horaTarde.setMinutes(horaTarde.getMinutes() + 45);
        horaTarde1.setMinutes(horaTarde1.getMinutes() + 45);
        //guardo las horas en una variable
        var anterior = horaManiana1.getHours() + ":" + ("00" + horaManiana1.getMinutes()).slice(-2);
        var presente = horaManiana.getHours() + ":" + ("00" + horaManiana.getMinutes()).slice(-2);
        var anteriorTarde = horaTarde1.getHours() + ":" + ("00" + horaTarde1.getMinutes()).slice(-2);
        var presenteTarde = horaTarde.getHours() + ":" + ("00" + horaTarde.getMinutes()).slice(-2);
    
        if (i <= 4) {
            //imprime desde 10:00 hasta las 13:45
            var textoHorario = document.createTextNode(anterior + "-" + presente);
        } else {
            //imprime desde las 17:00 hasta las 21:30
            textoHorario = document.createTextNode(anteriorTarde + "-" + presenteTarde);
        }

        fila.appendChild(textoHorario);

        for (var j = 0; j < 5; j++) {
            // Crea un elemento <td> y un nodo de texto, hace que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la fila de la tabla
            var celda = document.createElement("td");
            var aleatorio = Math.floor((Math.random() * 7));
            var textoCelda = document.createTextNode(fisioterapeutas[aleatorio]);
            //console.log(textoCelda);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }

        // agrega la fila al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(fila);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "3";
    tabla.setAttribute("style", "border: 3px solid blue;");
    tabla.id = "tablafisio";

}
//Creo una funcion para obtener el valor del radio button
function getRadioValue() {
    //Obtengo el conjunto de radio buttons cuyo nombre es fisio
    var ele = document.getElementsByName('fisio');
    //Recorro esos elementos y devuelvo el que esté CHECKED
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            return ele[i].value;
        }

    }
    return null;
}

function seleccionaFisio() {

    //Utilizo la funcion getRadioValue para obtener el nombre
    //del fisio seleccionado
    var fisioName = getRadioValue();
    //Obtengo la tabla de id tablafisio
    var sTableName = document.getElementById("tablafisio");
    //recorro la tabla
    for (var i = 0; i < sTableName.children[0].childElementCount; i++) {
        var tableRow = sTableName.children[0].children[i];
        for (var j = 0; j < tableRow.childElementCount; j++) {
            var tableColumn = tableRow.children[j];
            //Verifico si el texto de la celda coincide con el del radioButton(fisioName)
            if (fisioName == tableColumn.innerText) {
                //Si coincide, le agrego un color de fondo
                tableColumn.style.backgroundColor = "lightblue";
            }
            else {
                //A todo lo que no coincide le retiro el fondo que tenga
                tableColumn.style.backgroundColor = null;
            }

        }
    }

}

