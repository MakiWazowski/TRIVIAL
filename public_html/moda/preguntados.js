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
            pregunta:"¿Qué es una colección cápsula?",
            opciones:["Una colección sucinta compuesta por prendas fácilmente combinables en cualquier armario.","Ninguna de las otras respuestas.","Una línea de prendas de estilo deportivo.","El resultado de una fructífera relación empresarial entre un diseñador y unos grandes almacenes."],
            respuesta:0
        },
        {
            pregunta:"¿Qué es una colección 'resort'?",
            opciones:["Colecciones que presentan los diseñadores a base de prendas en tonos claros.","Ninguna de las otras respuestas.","Colecciones que son confeccionadas exclusivamente en seda.","Colecciones que son presentadas entre las dos grandes temporadas de la pasarela."],
            respuesta:3
        },
        {
            pregunta:"¿Quién precedió a John Galliano en Dior?",
            opciones:["Raf Simons","Marc Boham","Gianfranco Ferré","Ninguna de las otras respuestas."],
            respuesta:2
        },
        {
            pregunta:"¿En qué año presentó Christian Dior el 'New Look'?",
            opciones:["1947","1937","Ninguna de las otras respuestas.","1945"],
            respuesta:0
        },
        {
            pregunta:"¿Con qué complemento se lanzó a la fama la firma Prada?",
            opciones:["Ninguna de las otras respuestas.","un llavero de linóleo","un cinturón de fieltro","una mochila de nylon"],
            respuesta:3
        },
        {
            pregunta:"¿Cuál de estas citas no dijo Gabrielle Chanel?",
            opciones:["'La moda pasa, el estilo perdura'."," 'Ojalá hubiese inventado yo el vaquero: tiene expresión, modestia, sex appeal y simplicidad; todo lo que yo deseo que tenga mi ropa'.","'Algunos piensan que el lujo es lo opuesto a la pobreza; y no, es lo opuesto de la vulgaridad'.","Ninguna de las otras respuestas."],
            respuesta:1
        },
        {
            pregunta:"¿En qué firma francesa empezó trabajando Karl Lagerfeld?",
            opciones:["Ninguna de las otras respuestas.","Chloé","Pierre Balmain","Jean Dessès"],
            respuesta:2
        },
        {
            pregunta:"¿Cual fue la última casa por la que pasó Óscar de la Renta?",
            opciones:["Pierre Balmain","Lanvin","Cristóbal Balenciaga","Ninguna de las otras respuestas."],
            respuesta:0
        },{
            pregunta:"¿En qué año lanzó al mercado Tom Ford su firma homónima?",
            opciones:["1994","2000","2006","2004"],
            respuesta:2
        },
        {
            pregunta:"¿Quién popularizó la 'mini falda'?",
            opciones:["Ninguna de las otras respuestas.","Sonia Rykiel","Vivienne Westwood","Mary Quant"],
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