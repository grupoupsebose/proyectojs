/*function numazarlimites(limiteInferior, limiteSuperior ) {
//validar que sean numeros
if(isNaN(limiteInferior) || isNaN(limiteSuperior))
{
	throw new Error("valor ingresado no es un numero");;
}
var num = Math.round(Math.random() * (limiteSuperior - limiteInferior)) + limiteInferior;
return num;

}
var limiteSuperior = prompt("Ingrese un limite superior");
var limiteInferior = prompt("Ingrese un limite inferior");

alert("su numero al azar es:  "  +	numazarlimites(parseInt(limiteInferior),parseInt(limiteSuperior)));*/

function numeroAlAzar()
{
	var num=Math.floor(Math.random()*10000)+1;
	return num;
}

var numero = numeroAlAzar();
var contador = 0;

while (true)
{
	contador = contador+1;
	num2 = numeroAlAzar();
	if (numero === num2)
	{
		alert("El numero oculto es: "+numero);
		alert("El numero adivinado por la PC es: "+num2);
		break;
	}
}

alert("El numero de intentos de busqueda fue: "+contador);