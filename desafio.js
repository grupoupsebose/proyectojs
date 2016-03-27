function numazarlimites(limiteInferior, limiteSuperior ) {
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

alert("su numero al azar es:  "  +	numazarlimites(parseInt(limiteInferior),parseInt(limiteSuperior)));