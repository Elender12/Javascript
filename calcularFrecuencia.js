/**
 * Función que calcula la frecuencia cardiaca máxima y muestra 
 * el resultado al usuario
 * Alumna: Cirstea Elena
 * Curso: DAW2
 */
function mostrarFrecuencia() {
    //recojo los valores introducidos por el usuario
    var edad = document.getElementById("edad").value;
    var sexo = document.getElementById("sexo").value;
    //hago los cálculos según el sexo introducido
    if (sexo.toUpperCase() == "MUJER") {
        let FCMaxMujer = 214 - (0.7 * edad);
        //llamo a la función con el parámetro correspondiente
        calcularFrecuencia(FCMaxMujer);

    } else if (sexo.toUpperCase() == "HOMBRE") {
        let FCMaxHombre = 209 - (0.8 * edad);
        //llamo a la función con el parámetro correspondiente
        calcularFrecuencia(FCMaxHombre);

    } else {
        alert("Has introducido unos datos incorrectos.");
        document.getElementById("edad").value = "";
        document.getElementById("sexo").value = "";

    }
    //realiza los cálculos
    function calcularFrecuencia(paramFCMAx) {
        let recuperacionMax = (paramFCMAx * 70) / 100;
        let recuperacionMin = (paramFCMAx * 60) / 100;
        let aerobicaMax = (paramFCMAx * 80) / 100;
        let anaerobicaMax = (paramFCMAx * 90) / 100;

        let resul = document.getElementById("resulFCM");
        //array que guarda los datos de los cálculos mostrando 3 cifras
        let arrayResultados = ["Zona de recuperación: pulsaciones máximas: " + recuperacionMax.toPrecision(3) + " || pulsaciones mínimas: " + recuperacionMin.toPrecision(3),
        "Zona aeróbica: pulsaciones máximas: " + aerobicaMax.toPrecision(3) + " || pulsaciones minímas: " + recuperacionMax.toPrecision(3),
        "Zona anaeróbica: pulsaciones máximas: " + anaerobicaMax.toPrecision(3) + " || pulsaciones mínimas: " + aerobicaMax.toPrecision(3),
        "Línea roja: pulsaciones máximas: " + paramFCMAx.toPrecision(3) + " || pulsaciones mínimas: " + anaerobicaMax.toPrecision(3)];
        //muestro los resultados
        arrayResultados.forEach(elemento => {
            let parrafo = document.createElement("p");
            let texto = document.createTextNode(elemento);
            parrafo.appendChild(texto);
            resul.appendChild(parrafo);
        });

    }
}
