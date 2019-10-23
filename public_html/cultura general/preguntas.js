Quizzly = ( function(){
	var counter = 0;
	var puntaje = 0;
	var respuestas = [];
	var preguntadas = [
			//pregunta 1
        {
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