/**
 * Created by Diego on 12/04/2016.
 */
function mostrar_responder() {
    document.getElementById("form-Respuesta").style.display = "block";
    document.getElementById("respuestas").style.display = "none";
}

function ocultar_responder() {
    document.getElementById("respuestas").style.display = "block";
    document.getElementById("form-Respuesta").style.display = "none";
}

function mostrar_preguntar() {
    document.getElementById("form-Pregunta").style.display = "block";
    document.getElementById("preguntas").style.display = "none";
}

function ocultar_preguntar() {
    document.getElementById("preguntas").style.display = "block";
    document.getElementById("form-Pregunta").style.display = "none";
}

function enviar_pregunta() {
    var tit = document.getElementById("tituloP").value;
    var text = document.getElementById("textoP").value;
    var aut = document.getElementById("autorP").value;
    var envio = true;
    if (tit.length==0 ||  /^\s*$/.test(tit)){
        alertify.error("El t&iacutetulo no puede estar vac&iacute;o");
        envio=false;
    }

    if(text.length==0 ||  /^\s*$/.test(text)){
        alertify.error("El texto no puede estar vac&iacute;o");
        envio=false;
    }

    if(aut.length==0 ||  /^\s*$/.test(aut)){
        alertify.error("El autor no puede estar vac&iacute;o");
        envio=false;
    }

    if(envio){
        document.getElementById("formP").submit();
    }else{
        return false;
    }
}

function enviar_respuesta() {
    var text = document.getElementById("textoR").value;
    var aut = document.getElementById("autorR").value;
    var envio = true;

    if(text.length==0 ||  /^\s*$/.test(text)){
         alertify.error("El texto no puede estar vac&iacute;o");
        envio=false;
    }

    if(aut.length==0 ||  /^\s*$/.test(aut)){
        alertify.error("El autor no puede estar vac&iacute;o");
        envio=false;
    }

    if(envio){
        document.getElementById("formR").submit();
    }else {
        return false;
    }
}

function necesita_login(){
    alertify.error("Se necesita login para realizar esta acci&oacute;n");
}