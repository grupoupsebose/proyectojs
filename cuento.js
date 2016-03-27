console.log("Inicio de Programa");
/*var preguntas = 3;
var preguntasFaltantes = "Quedan  " + preguntas + " preguntas";
alert("Este es el juego del cuenta cuentos. Sigue las Instrucciones");

var verbo = prompt ("Estimado usuario, ingrese un verbo: " + preguntasFaltantes);
preguntas = preguntas - 1;
var preguntasFaltantes = "Quedan  " + preguntas + " preguntas";

var sustantivo = prompt ("Ahora ingrese un sustantivo: " + preguntasFaltantes);
preguntas = preguntas - 1;
preguntasFaltantes = "Quedan " + preguntas + " preguntas ";

var adjetivo = prompt("Por último, ingrese un adjetivo: " + preguntasFaltantes);
var cuento ="El " + adjetivo + " " + sustantivo + " queria " + verbo + " en ";
document.write("<h1>Cuento </h1> <p> "+  cuento  + " </p>");
console.log("Programa Completado");*/

/*document.write("<h1>Cuenta cuentos</h1><br>");
document.write("<p>El "+sustantivo+" "+adjetivo+" "+verbo+" locamente,</p>");
document.write("<p>porque cuando "+verbo+" el "+sustantivo+" siempre es "+adjetivo+",</p>");
document.write("<p>por eso el "+sustantivo+" siente que es muy "+adjetivo+" y es así que cada día "+verbo+" que "+verbo+".</p>");*/
var usuario = prompt("Ingrese un numero del 1 al 10:  ");
var numero = 7;
if (parseInt(usuario) === numero)
{
	adivinoCorrectamente = true;
} 
else if ((parseInt(usuario) > numero))
	{
		alert("Te equivocaste amigo");
		var nuevoIntento = prompt("Intenta de nuevo, ingresa otro numero de 1 a 10:  ");
		if((parseInt(nuevoIntento) === numero))
		{
			adivinoCorrectamente = true;
		}
		else
		{
			adivinoCorrectamente = false;
		}
	}
else if ((parseInt(usuario) < numero))
{
	alert("Fallasteeeeee...!!!");
	var nuevoIntento = prompt("Ingresa otro numero: ");
	if ((parseInt(nuevoIntento)=== numero))
	{
		adivinoCorrectamente = true;
	}
	else
	{
		adivinoCorrectamente = false;
	}
}


if (adivinoCorrectamente)
{
	document.write("<p>Adivinaste!!!!</p>");

}
else
{
	document.write("<p>NO Adivinaste!!!!</p>");
}
console.log("Programa comnpleto");


