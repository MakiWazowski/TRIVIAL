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
        
            pregunta:"¿Cuáles son los cinco tipos de sabores primarios?",
            opciones:["dulce, saldo, amargo y ácido","dulce, amargo, ácido y salado","amargo, ácido, salado y umami","dulce, amargo, ácido, salado y umami"],
            respuesta:2
        },
        {
            //pregunta 2
            pregunta:"¿Cuál es el lugar más frío de la tierra?",
            opciones:["Antártida","Polo Norte","Polo Sur","La casa de yeti"],
            respuesta:0
        },
        {
            //pregunta 3
            pregunta:"¿Quién escribió La Odisea?",
            opciones:["Unamuno","Azorín","Homero","Valle-Inclán"],
            respuesta:2
        },
        {
            //pregunta 4
            pregunta:"¿Cuál es el río más largo del mundo?",
            opciones:["Misisipi","Tajo","Nilo","Amazonas"],
            respuesta:3
        },
        {
            //pregunta 5
            pregunta:"¿Qué tipo de animal es la ballena?",
            opciones:["Ovovíparos","Pez","Herbívoro","Mamífero"],
            respuesta:3
        },
        {
            //pregunta 6
            pregunta:"¿Qué son los humanos: omnívoros, herbívoros o carnívoros?",
            opciones:["Herbívoros","Omnivoros","Carnivoros","Hay gente de todo en este mundo"],
            respuesta:1
        },
        {
            //pregunta 7
            pregunta:"¿En qué se especializa la cartografía?",
            opciones:["Cartón","Ortografía","Mapas","Estudio del estudio"],
            respuesta:2
        },
        {
            //pregunta 8
            pregunta:"¿Cuál es el color que representa la esperanza?",
            opciones:["Verde","Morado","Amarillo","Violeta"],
            respuesta:0
        },{
            //pregunta 9
            pregunta:"¿Cuál es la capital de Croacia?",
            opciones:["Dubrovnik","Zagreb","Split","Zadar"],
            respuesta:1
        },
        {
            //pregunta 10
            pregunta:"¿Qué instrumento tocaba Paco de Lucía?",
            opciones:["Tambor","Violin","Piano","Guitarra"],
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