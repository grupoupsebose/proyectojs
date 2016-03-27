function numazarlimites(lim1, lim2) 
{
var num = Math.round(Math.random() * (lim1-lim2)) + lim2;
return num;
}
var limiteSuperior = prompt("Ingrese un limite superior");
var limiteInferior = prompt("Ingrese un limite inferior");

if(isNaN(limiteInferior) || isNaN(limiteSuperior))
{
	throw new Error("valor ingresado no es un numero");;
}
var contador = 0;
while(contador<10)
{
	var randomico=numazarlimites(parseInt(limiteInferior),parseInt(limiteSuperior));
	document.write(randomico + "  ");
	contador++;
}