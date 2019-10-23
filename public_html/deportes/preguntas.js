Quizzly = ( function(){
	var counter = 0;
	var puntaje = 0;
	var respuestas = [];
	var preguntadas = [
			//pregunta1 
			{
				pregunta:"¿Cuál de las siguientes invocaciones es correcta?",
				opciones: [
					"function : myFunction()",
					"function myFunction()",
					"declare myFunction()",
					"new myFunction"
				],
				respuesta: 999/333 - 2 //1
			},
			//pregunta2 
			{
				pregunta:"¿Cuál de las siguientes expresiones es correcta?",
				opciones: [
					"Resultado=myFunction",
					"Call myFunction()",
					"myFunction",
					"Resultado=myFunction()"
				],
				respuesta: 4767/1589 //3
			},
			//pregunta3
			 {
				pregunta:"Dada la función con la firma: miFuncion(a,b) ¿Cuál invocación es correcta?",
				opciones: [
					"MiFuncion a,b",
					"a=MiFuncion(b)",
					"MiFuncion(x,y)",
					"Ninguna de las anteriores"
				],
				respuesta: 11%3//2
			},
			//pregunta4 
			{
				pregunta:"¿Cuál de las siguientes afirmaciones es verdadera?",
				opciones: [
					"Una variable local se debe declarar con var dentro de una función",
					"Una variable local se declara con o sin var dentro de una función",
					"No es necesario declarar una variable para que sea local",
					"Ninguna de las anteriores"
					],
				respuesta: 0
			},
			//pregunta5
			 {
				pregunta:"¿Cómo se introducen comentarios en la sintaxis Javascript?",
				opciones: [
					"\"&lt!-- Esto es comentario --&gt\"",
					"\"&lt Esto es un comentario \"&gt",
					"/* Esto es un comentario  ",
					"Ninguna de las anteriores"	
				],
				respuesta: 2664/888 
			},
			//pregunta6
			 {
				pregunta:"¿Cómo  se escribe un condicional para que sea verdadero sólo si i es distinta de 5",
				opciones: [
					"if (i => 5)",
					"if (i != 5)",
					"if =! 5 then  ",
					"if > 5"

				],
				respuesta: 777/777//1
			},
			//pregunta7
			 {
				pregunta:"¿Un array se define usando?",
				opciones: [
					"var myarray = new array();",
					"var myarray = new Array[];",
					"var myarray = new Array();",
					"Ninguna de las anteriores"
				],
				respuesta:  886/443// 2
			},
			//pregunta8
			 {
				pregunta:"¿Con cuál de estas sentencias es posible agregar un elemento al final de un vector?",
				opciones: [
					"arr[arr.length] = value;",
					"arr[arr.length+1] = new Arrays();",
					"arr[arr.length-1] = value;",
					"arr[arr.length*1] = value;"

				],
				respuesta: 0
			},
			//pregunta9 
			{
				pregunta:"¿Con cuál de estas sentencias se genera un número aleatorio?",
				opciones: [
					"Math.rnd",
					"Math.random",
					"Math.random()",
					"Randomize()"

				],
				respuesta:  666/333 //2
			},
			//pregunta10
			 {
				pregunta:"¿Cómo se redondea el número 7.25 al entero más cercano?",
				opciones: [
					"round(7.25)",
					"Math.rnd(7.25)",
					"rnd(7.25)",
					"Math.round(7.25)"
				],
				respuesta:  13 % 5 //3 
			
			}];	
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