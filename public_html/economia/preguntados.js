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
            pregunta:"",
            opciones:["","","",""],
            respuesta:1
        },
        {
            pregunta:"",
            opciones:["","","",""],
            respuesta:3
        },
        {
            pregunta:"",
            opciones:["","","",""],
            respuesta:2
        },
        {
            pregunta:"",
            opciones:["","","",""],
            respuesta:0
        },
        {
            pregunta:"",
            opciones:["","","",""],
            respuesta:3
        },
        {
            pregunta:"",
            opciones:["","","",""],
            respuesta:1
        },
        {
            pregunta:"",
            opciones:["","","",""],
            respuesta:2
        },
        {
           pregunta:"",
            opciones:["","","",""],
            respuesta:0
        },{
            pregunta:"",
            opciones:["","","",""],
            respuesta:2
        },
        {
            pregunta:"",
            opciones:["","","",""],
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