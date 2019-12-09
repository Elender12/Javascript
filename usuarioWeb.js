//clase de la cual va a heredar el resto
class UsuarioWeb {
    constructor(username, password, nombre, dni) {
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.dni = dni;
    }
}


//clase usuario Gestor: da de alta los empleados y crea las tablas de los horarios
class UsuarioGestor extends UsuarioWeb {
    constructor(username, password, nombre, dni) {
        super(username, password, nombre, dni);
        this.rol = "gestor";

    }
}

//clase usuario Cliente que tiene sus propios datos
class UsuarioCliente extends UsuarioWeb {
    constructor(username, password, nombre, dni, pesoInicial, altura, edad, sexo, imcInicial, FCMInicial) {
        //datos que le paso al constructor
        super(username, password, nombre, dni);
        //datos propios de la clase
        this.rol = "cliente";
        this.pesoInicial = pesoInicial; //esta var necesita un historial
        this.altura = altura;
        this.edad = edad;
        this.sexo = sexo;
        this.imcInicial = imcInicial;
        this.FCMInicial = FCMInicial; //esta var necesita un historial
    }
}

//creo array de clientes
 var arrayClientes = [];


function crearUsuario(){
    var usuario= document.getElementById("usuario").value;
    var password= document.getElementById("password").value;
    var nombre= document.getElementById("nombre").value;
    var dni= document.getElementById("dni").value;
    
    //creo que esta variable debe tener otro nombre
    var  cliente = new UsuarioCliente(usuario, password, nombre, dni);
     arrayClientes.push(cliente);

}
console.log(arrayClientes);

//esta función verifica quién entra en el sistema
function loginUsuario(){ 
    var done=0; 
    var usuario=document.getElementById("usuario").value; 
    var password=document.getElementById("password").value; 
    //si el usuario es un cliente que entre aqui
    if (usuario=="cliente" && password=="1") { 
        window.location="indexCliente.html"; 
    } 
    //si es usuario es gestor que entre aqui
    if (usuario=="gestor" && password=="2") { 
     window.location="indexGestor.html"; 
    } 
    if (usuario=="" && password=="") { 
       alert("Introduce un usuario y una contraseña."); 
    } 
    }
