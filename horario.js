/**
 * Script que genera una tabla de actividades y  
 * muestra el resultado en un archivo html
 * Alumno: Cirstea Elena
 * Curso: DAW2
 */

function tablaActividades() {
    var actividades = ['Pilates', 'TRX', 'BodyFitness', 'Zumba', 'GAP', 'Yoga', 'Cardio', 'Spinning', 'Circuito Indoor', 'Streching', 'Pop-Dance', 'Kangoo-Jumps'];
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    var hora = 7;

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //imprimo los días de la semana en la tabla
    var dias = ['Horario', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    for (var j = 0; j < 7; j++) {
        dia = document.createTextNode(dias[j]);
        var cabeceraTh = document.createElement("th");
        cabeceraTh.appendChild(dia);
        tblBody.appendChild(cabeceraTh);
    }

    // Crea las celdas
    for (var i = 0; i < 14; i++) {
        // Crea las filas de la tabla
        var fila = document.createElement("tr");
        //mostrar la hora en la tabla
        var textoHorario = document.createTextNode(hora + ":00" + " - " + (hora + 1) + ":00");
        hora++;
        fila.appendChild(textoHorario);
        //bucle para las columnas
        for (var j = 0; j < 6; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la fila de la tabla
            var aleatorio = Math.floor((Math.random() * 12));
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(actividades[aleatorio]);
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }

        // agrega la fila al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(fila);
    }
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "1";
    tabla.setAttribute("style", "border: 1px solid red;");
    //asignar un atributo a la tabla
    tabla.id = "tablaactividad";
}

//Creo una funcion para verificar si la variable actividad está CHECKED
//en la lista de checkboxes
function IsValueSelected(actividad) {
    //Obtengo un elemento con la lista de checkboxes
    var ele = document.getElementsByName('lista_actividades');
    //Comienzo a recorrer dicho elemento
    for (i = 0; i < ele.length; i++) {
        //Verifico si el elemento está CHECKED en la lista de checkboxes
        if (ele[i].checked) {
            //Si esta checked, ahora verifico si coincide su valor/nombre con el de
            //la variable actividad
            if (ele[i].value == actividad) {
                return true;
            }
        }

    }
    return false;
}

function seleccionaActividad() {
    //Obtengo la tabla tablaactividad a traves su id
    var sTableName = document.getElementById("tablaactividad");
    //Comienzo a recorrerla
    for (var i = 0; i < sTableName.children[0].childElementCount; i++) {
        var tableRow = sTableName.children[0].children[i];
        for (var j = 0; j < tableRow.childElementCount; j++) {
            var tableColumn = tableRow.children[j];
            console.log(tableColumn);
            //Verifico si el elemento de la tabla coincide con algun elemento seleccionado
            //en la lista de checkboxes
            if (IsValueSelected(tableColumn.innerText)) {
                //Si es el caso le pinto un color de fondo
                tableColumn.style.backgroundColor = "salmon";
            }
            else {
                //Para el resto se les quita el fondo porque no están seleccionados
                tableColumn.style.backgroundColor = null;
            }

        }
    }

}