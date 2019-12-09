function abrirArchivo(archivos){    //envía una lista de archivos seleccionados aunque solo sea 1
    var lector = new FileReader();
    lector.onload = function(){
        var contenido = lector.result;
        cargarContenido(contenido);    //hasta que no se cargue no se leerá el contenido
    }
    lector.readAsText(archivos[0]);
}
function cargarContenido(contenido){
    var usuarios = contenido.split(/\n/);
    alert(usuarios[2]);
}