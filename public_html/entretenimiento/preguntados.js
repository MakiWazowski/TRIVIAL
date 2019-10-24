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
            pregunta:"¿Cómo se llamaba el personaje que interpretaba John Travolta en Grease?",
            opciones:["Danny Puño","Danny Grease","Danny Zuko","Danny Chulo"],
            respuesta:2
        },
        {
            //pregunta 2
            pregunta:"¿Qué personaje famoso lidera la banda llamada Nancys Rubias?",
            opciones:["Mario Vaquerizo","Nacho Canut","Alaska","Nacho Vidal"],
            respuesta:0
        },
        {
            //pregunta 3
            pregunta:"¿A qué película de Disney pertenece la canción Un mundo ideal?",
            opciones:["Pocahontas","Mulán","Aladdin","Hércules"],
            respuesta:2
        },
        {
            //pregunta 4
            pregunta:"¿Qué actor interpretaba a Hache en la película 3MSC?",
            opciones:["Hugo Silva","Miguel Ángel Silvestre","Dani Martin","Mario Casas"],
            respuesta:3
        },
        {
            //pregunta 5
            pregunta:"¿A qué hace referencia 'La milla verde'??",
            opciones:["A un prado cercano","A una carrera","A la carcel","Al corredor de la muerte"],
            respuesta:3
        },
        {
            //pregunta 6
            pregunta:"¿Cómo se llama el protagonista de la saga Indiana Jones?",
            opciones:["Jack Nicholson","Harrison Ford","Robin Williams","Michael Fox"],
            respuesta:1
        },
        {
            //pregunta 7
            pregunta:"¿A quién se considera el Rey del Pop",
            opciones:["Justin Bieber","Zayn Malik","Michael Jackson","Zac Efron"],
            respuesta:2
        },
        {
            //pregunta 8
            pregunta:"¿Cómo se llama el pájaro símbolo de los Juegos del Hambre?",
            opciones:["Sinsajo","Lechuza","Gale","Llamas"],
            respuesta:0
        },{
            //pregunta 9
            pregunta:"¿Qué personaje de Disney perdió su zapato de cristal?",
            opciones:["Tiana","Cenicienta","Blancanieves","La Sirenita"],
            respuesta:1
        },
        {
            //pregunta 10
            pregunta:"¿Qué Beatle fue asesinado por un fan?",
            opciones:["George Harrison","Ringo Star","Ninguno","Jonh Lennon"],
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