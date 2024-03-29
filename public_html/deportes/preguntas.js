Quizzly = ( function(){
	var counter = 0;
	var puntaje = 0;
	var respuestas = [];
	var preguntadas = [{
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