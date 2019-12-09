/**
 * Función que calcula el índice de masa corporal y 
 * muestra al usuario el rando de su resultado
 * 
 * Alumna: Cirstea Elena
 * Curso: DAW2
 */


function calcularIMC() {
	//patrones para verificar que no se introducen datos erróneos
	var patronAltura = /\d{3}/;
	var patronPeso = /\d{2}/;
	var indice;
	//recogo los datos que ha introducido el usuario
	var altura = document.getElementById("altura").value;
	//primero verifico que la altura esté introducida de manera correcta
	if (patronAltura.test(altura) == false || parseInt(altura) < 140 || parseInt(altura) > 300) {
		alert("Debes medir mínimo 140cm o máximo 300cm. Introduce tu altura en cm DE NUEVO: ");
		document.getElementById("altura").value = "";
	}
	//verifico los kilos que sean correctos
	var kilos = document.getElementById("peso").value;
	if (patronPeso == false || parseInt(kilos) < 30 || parseInt(kilos) > 250) {
		alert("Debes pesar mínimo 30kg o máximo 250. Introduce DE NUEVO tu peso en kg: ");
		document.getElementById("peso").value = "";
	} else {
		//calculo el índice
		indice = kilos / (Math.pow(altura / 100, 2));

		//indico el índice solo con 2 decimales
		indice = indice.toPrecision(4);
		//muestro el índice al usuario en la tabla
		var textNode = document.createTextNode(indice);
		document.getElementById("indice").appendChild(textNode);
		var fila;
		//destaco la fila correspondiente 
		if (indice < 16) {
			fila = document.getElementById("delSev");
			fila.style.color = "red";
		} else if (indice > 16 && indice <= 16.99) {
			fila = document.getElementById("delMod");
			fila.style.color = "red";
		} else if (indice >= 17 && indice <= 18.49) {
			fila = document.getElementById("infra");
			fila.style.color = "red";
		} else if (indice >= 18.50 && indice <= 24.99) {
			fila = document.getElementById("normal");
			fila.style.color = "green";
		} else if (indice >= 25 && indice <= 29.99) {
			fila = document.getElementById("sobre");
			fila.style.color = "red";
		} else if (indice >= 30 && indice <= 34.99) {
			fila = document.getElementById("obeso1");
			fila.style.color = "red";
		} else if (indice >= 35 && indice <= 40) {
			fila = document.getElementById("obeso2");
			fila.style.color = "red";
		} else if (indice >= 40) {
			fila = document.getElementById("obeso3");
			fila.style.color = "red";
		}
	}
}

