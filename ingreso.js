const USUARIO_1 = "nelson";
const USUARIO_2 = "maria";
const CONTRASENIA_1 = 1234;
const CONTRASENIA_2 = 1111;

const IMAGEN_INGRESO_CORRECTO = "imagenes/imagenIngreso.png";
const IMAGEN_INGRESO_INCORRECTO= "imagenes/imagenIncorrecto.png";

let usuarioIngresado = "usuario ingresado en la pag";
let contraseniaIngresada = "contraseña ingresada en la pag";

function seleccion(){

    document.write("Excelente")
}


function verificacion() {
    usuarioIngresado = document.querySelector('#usuario_ingresado').value;
    contraseniaIngresada = document.querySelector('#contrasenia_ingresada').value;

    if ((usuarioIngresado == USUARIO_1 || usuarioIngresado == USUARIO_2) && (contraseniaIngresada == CONTRASENIA_1 || contraseniaIngresada == CONTRASENIA_2 )){ 
        document.body.style.backgroundColor = "rgb(44, 70, 56)";
        document.querySelector("#mensaje_resultado").innerHTML=`
            
        <img width= 50% src = "${IMAGEN_INGRESO_CORRECTO}" alt = "imagen_de_ingreso" title = "imagen" >
           
        `
    }else {
        document.body.style.backgroundColor = "rgb(177, 113, 113)";
        document.querySelector("#mensaje_resultado").innerHTML=`
        <h4> Clave o usuario incorrectos :( </h4>
        <img width= 50% src = "${IMAGEN_INGRESO_INCORRECTO}" alt = "imagen_de_ingreso" title = "imagen" >
        `
    }
};