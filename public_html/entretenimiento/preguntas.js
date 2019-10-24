Quizzly = ( function(){
	var counter = 0;
	var puntaje = 0;
	var respuestas = [];
	var preguntadas = [{
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
	return {
		getCantidad	: function(){
			return preguntadas.length;
		},
		getCounter	: function(){
			return counter;
		},
		setCounter	: function(){
			return counter++;
		},
		getQuestion : function(question){
						return  preguntadas[question].pregunta;
		},
		getOptions: function(question){
						return  preguntadas[question].opciones;
		},
		getPuntaje : function(){
					  for(x in preguntadas){
					  		if( respuestas[x] == preguntadas[x].respuesta){
					  			puntaje += 1;
					  		}

					  };
					return puntaje + "/10" ;
		},
		setRespuestas : function(respuesta){
				respuestas.push(respuesta);
		},
		getRespuestas : function(){
				return respuestas;
		},

	} 		
	})();
  
		
$(document).ready(main);


function main(){

	cargarSection(0);
};		
	
 function cargarSection(pregunta){
 	$("#opciones").html("");



 	if( pregunta <  ( Quizzly.getCantidad()   ) ){
 		var question  = Quizzly.getQuestion(pregunta); 	
	 	var opciones  = Quizzly.getOptions(pregunta);

		$("#Pregunta").html("<p>" + question + "</p>");
		for(var i = 0, x = opciones.length; i < x ; i++){
			
			$("#opciones").append("<p class=\"respuesta\" id=\" " + i  +  " \"> <span class=\"opcionesN + " +  i + " \"> "  + opciones[i] + "</span></p>");
			};

	}else if(pregunta  == ( Quizzly.getCantidad()  )){
		var nombre = prompt("Registra Tu nombre");
		var puntaje = Quizzly.getPuntaje();
 		$("#Pregunta").html(nombre +" lograste " +  puntaje +" puntos!");
 		localStorage.setItem( nombre, puntaje ); 

 	};
 	



	$(".respuesta").on("click",responder);

 }

 function responder(){
 	var pregunta = Quizzly.setCounter();
 	var respuesta = $(this).attr("id");
 		Quizzly.setRespuestas(respuesta);
 		cargarSection(++pregunta);
 		

 };