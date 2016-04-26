/**
 * Created by Diego on 12/04/2016.
 */
function mostrar_responder() {
    document.getElementById("form-Respuesta").style.display = "block";
    document.getElementById("cuerpoR").style.display = "none";
}

function ocultar_responder() {
    document.getElementById("cuerpoR").style.display = "block";
    document.getElementById("form-Respuesta").style.display = "none";
    document.getElementById("mensajeError").style.display = "none";
}

function mostrar_preguntar() {
    document.getElementById("form-Pregunta").style.display = "block";
    document.getElementById("cuerpoP").style.display = "none";
}

function ocultar_preguntar() {
    document.getElementById("cuerpoP").style.display = "block";
    document.getElementById("form-Pregunta").style.display = "none";
    document.getElementById("mensajeError").style.display = "none";
}

function enviar_pregunta() {
    var tit = document.getElementById("tituloP").value;
    var text = document.getElementById("textoP").value;
    var aut = document.getElementById("autorP").value;
    var error = document.getElementById("mensajeError");
    var envio = true;
    if (tit.length==0){
        error.innerHTML = "El t&iacutetulo no puede estar vac&iacute;o";
        error.style.display="block";
        envio=false;
    }

    if(text.length==0 && envio){
        error.innerHTML = "El texto no puede estar vac&iacute;o";
        error.style.display="block";
        envio=false;
    }

    if(aut.length==0 && envio){
        error.innerHTML = "El autor no puede estar vac&iacute;o";
        error.style.display="block";
        envio=false;
    }

    if(envio){
        error.style.display="none";
        return true;
    }else{
        return false;
    }
}

function enviar_respuesta() {
    var text = document.getElementById("textoR").value;
    var aut = document.getElementById("autorR").value;
    var error = document.getElementById("mensajeError");
    var envio = true;

    if(text.length==0){
        error.innerHTML = "El texto no puede estar vac&iacute;o";
        error.style.display="block";
        envio=false;
    }

    if(aut.length==0 && envio){
        error.innerHTML = "El autor no puede estar vac&iacute;o";
        error.style.display="block";
        envio=false;
    }

    if(envio){
        error.style.display="none";
        return true;
    }else {
        return false;
    }
}

function necesita_login(){
    var error = document.getElementById("mensajeError");
    error.innerHTML = "Se necesita login para esta acci&oacuten";
    error.style.display="block";
}