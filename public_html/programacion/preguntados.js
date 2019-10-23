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
        pregunta:"¿Cuál de las siguientes invocaciones es correcta?",
        opciones:["function : myFunction()","function myFunction()","declare myFunction()","new myFunction"],
        respuesta:1
    },
    {
        pregunta:"¿Cuál de las siguientes expresiones es correcta?",
        opciones:["Resultado=myFunction","Call myFunction()","myFunction","Resultado=myFunction()"],
        respuesta:3
    },
    {
        pregunta:"Dada la función con la firma: miFuncion(a,b) ¿Cuál invocación es correcta?",
        opciones:["MiFuncion a,b","a=MiFuncion(b)","MiFuncion(x,y)","Ninguna de las anteriores"],
        respuesta:2
    },
    {
        pregunta:"¿Cuál de las siguientes afirmaciones es verdadera?",
        opciones:["Una variable local se debe declarar con var dentro de una función","Una variable local se declara con o sin var dentro de una función","No es necesario declarar una variable para que sea local","Ninguna de las anteriores"],
        respuesta:0
    },
    {
        pregunta:"¿Cómo se introducen comentarios en la sintaxis Javascript?",
        opciones:['"&lt!-- Esto es comentario --&gt"','"&lt Esto es un comentario "&gt',"/* Esto es un comentario  ","Ninguna de las anteriores"],
        respuesta:3
    },
    {
        pregunta:"¿Cómo  se escribe un condicional para que sea verdadero sólo si i es distinta de 5",
        opciones:["if (i => 5)","if (i != 5)","if =! 5 then  ","if > 5"],
        respuesta:1
    },
    {
        pregunta:"¿Un array se define usando?",
        opciones:["var myarray = new array();","var myarray = new Array[];","var myarray = new Array();","Ninguna de las anteriores"],
        respuesta:2
    },
    {
        pregunta:"¿Con cuál de estas sentencias es posible agregar un elemento al final de un vector?",
        opciones:["arr[arr.length] = value;","arr[arr.length+1] = new Arrays();","arr[arr.length-1] = value;","arr[arr.length*1] = value;"],
        respuesta:0
    },
    {
        pregunta:"¿Con cuál de estas sentencias se genera un número aleatorio?",
        opciones:["Math.rnd","Math.random","Math.random()","Randomize()"],
        respuesta:2
    },
    {
        pregunta:"¿Cómo se redondea el número 7.25 al entero más cercano?",
        opciones:["round(7.25)","Math.rnd(7.25)","rnd(7.25)","Math.round(7.25)"],
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