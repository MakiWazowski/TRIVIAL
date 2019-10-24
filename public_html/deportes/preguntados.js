function main(){
    cargarSection(0)
}
function cargarSection(e){
    if($("#opciones").html(""),e<Quizzly.getCantidad()){
        var a=Quizzly.getQuestion(e),n=Quizzly.getOptions(e);$("#Pregunta").html("<p>"+a+"</p>");for(var r=0,s=n.length;r<s;r++)$("#opciones").append('<p class="respuesta" id=" '+r+' "> <span class="opcionesN + '+r+' "> '+n[r]+"</span></p>")
    }
    else if(e==Quizzly.getCantidad()){
        var o=prompt("Registra Tu nombre"),t=Quizzly.getPuntaje();$("#Pregunta").html(o+" lograste "+t+" puntos!"),localStorage.setItem(o,t)
    }
    $(".respuesta").on("click",responder)
}

function responder(){
    var e=Quizzly.setCounter(),a=$(this).attr("id");Quizzly.setRespuestas(a),cargarSection(++e)
}
Quizzly=function(){var e=0,a=0,n=[],r=[{
            //pregunta 1
            pregunta:"¿Cuántos mangos por lado tiene el futbolín?",
            opciones:["Dos","Tres","Cuatro","Cinco"],
            respuesta:2
        },
        {
            //pregunta 2
            pregunta:"¿Cuál es el estilo de natación más rápido?",
            opciones:["Crol","Espalda","Mariposa","Pecho"],
            respuesta:0
        },
        {
            //pregunta 3
            pregunta:"¿Cuántos jugadores componen un equipo de rugby?",
            opciones:["11","12","15","21"],
            respuesta:2
        },
        {
            //pregunta 4
            pregunta:"¿Cuál de las siguientes modalidades no forma parte del deporte rural vasco?",
            opciones:["Arrastre de piedra","Lanzamiento de fardo","Corte de troncos","Desintegramiento de piedras"],
            respuesta:3
        },
        {
            //pregunta 5
            pregunta:"¿Cuántos puntos vale un tiro libre encestado en baloncesto?",
            opciones:["Dos","Tres","Depende","Uno"],
            respuesta:3
        },
        {
            //pregunta 6
            pregunta:"¿Cuánto dura un partido de fútbol?",
            opciones:["45 minutos","90 minutos","75 minutos","80 minutos"],
            respuesta:1
        },
        {
            //pregunta 7
            pregunta:"¿Dónde se inventó el tenis de mesa?",
            opciones:["China","Inglaterra","Korea del sur","Japón"],
            respuesta:2
        },
        {
            //pregunta 8
            pregunta:"¿Quién quedó número 1 del mundo de tenis en 2008?",
            opciones:["Rafael Nadal","Roger Federer","Novak Djokovic","Carlos Moyá"],
            respuesta:0
        },{
            //pregunta 9
            pregunta:"¿Cuál es el club de fútbol más antiguo de España?",
            opciones:["Athelic Club de Bilbao","Recreativo de Huelva","Real Madrid","F.C. Barclona"],
            respuesta:1
        },
        {
            //pregunta 10
            pregunta:"¿Qué gimnasta española ha disputado cuatro juegos Olímpicos?",
            opciones:["Carolina Rodriguez","Natalia García","Julia Usón","Almudena Cid"],
            respuesta:3
        }
    ];	
    return{
        getCantidad:function(){
            return r.length
        },
        getCounter:function(){
            return e
        },
        setCounter:function(){
            return e++
        },
        getQuestion:function(e){
            return r[e].pregunta
        },
        getOptions:function(e){
            return r[e].opciones
        },
        getPuntaje:function(){
            for(x in r)n[x]==r[x].respuesta&&(a+=1);return a+"/10"
        },
        setRespuestas:function(e){
            n.push(e)
        },
        getRespuestas:function(){
            return n
        }
    }
}
(),$(document).ready(main);