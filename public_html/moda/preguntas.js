Quizzly = ( function(){
	var counter = 0;
	var puntaje = 0;
	var respuestas = [];
	var preguntadas = [
                //pregunta1 
		{
                pregunta:"¿Qué es una colección cápsula?",
                opciones:["Una colección sucinta compuesta por prendas fácilmente combinables en cualquier armario.","Ninguna de las otras respuestas.","Una línea de prendas de estilo deportivo.","El resultado de una fructífera relación empresarial entre un diseñador y unos grandes almacenes."],
                respuesta:0
            },
            //pregunta2
            {
                pregunta:"¿Qué es una colección 'resort'?",
                opciones:["Colecciones que presentan los diseñadores a base de prendas en tonos claros.","Ninguna de las otras respuestas.","Colecciones que son confeccionadas exclusivamente en seda.","Colecciones que son presentadas entre las dos grandes temporadas de la pasarela."],
                respuesta:3
            },
            //pregunta3
            {
                pregunta:"¿Quién precedió a John Galliano en Dior?",
                opciones:["Raf Simons","Marc Boham","Gianfranco Ferré","Ninguna de las otras respuestas."],
                respuesta:2
            },
            //pregunta4
            {
                pregunta:"¿En qué año presentó Christian Dior el 'New Look'?",
                opciones:["1947","1937","Ninguna de las otras respuestas.","1945"],
                respuesta:0
            },
            //pregunta5
            {
                pregunta:"¿Con qué complemento se lanzó a la fama la firma Prada?",
                opciones:["Ninguna de las otras respuestas.","un llavero de linóleo","un cinturón de fieltro","una mochila de nylon"],
                respuesta:3
            },
            //pregunta6
            {
                pregunta:"¿Cuál de estas citas no dijo Gabrielle Chanel?",
                opciones:["'La moda pasa, el estilo perdura'."," 'Ojalá hubiese inventado yo el vaquero: tiene expresión, modestia, sex appeal y simplicidad; todo lo que yo deseo que tenga mi ropa'.","'Algunos piensan que el lujo es lo opuesto a la pobreza; y no, es lo opuesto de la vulgaridad'.","Ninguna de las otras respuestas."],
                respuesta:1
            },
            //pregunta7
            {
                pregunta:"¿En qué firma francesa empezó trabajando Karl Lagerfeld?",
                opciones:["Ninguna de las otras respuestas.","Chloé","Pierre Balmain","Jean Dessès"],
                respuesta:2
            },
            //pregunta8
            {
                pregunta:"¿Cual fue la última casa por la que pasó Óscar de la Renta?",
                opciones:["Pierre Balmain","Lanvin","Cristóbal Balenciaga","Ninguna de las otras respuestas."],
                respuesta:0
            },
            //pregunta9
            {
                pregunta:"¿En qué año lanzó al mercado Tom Ford su firma homónima?",
                opciones:["1994","2000","2006","2004"],
                respuesta:2
            },
            //pregunta10
            {
                pregunta:"¿Quién popularizó la 'mini falda'?",
                opciones:["Ninguna de las otras respuestas.","Sonia Rykiel","Vivienne Westwood","Mary Quant"],
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