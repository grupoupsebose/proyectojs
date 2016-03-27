/*function tiraDados(){
    var dado = Math.floor(Math.random()  * 6)  + 1;
    return dado;
}

alert("Tiramos 3 dados: ");
alert("El dado dice: " + tiraDados());
var multiplo = 2 + tiraDados();
alert("El multiplo de bonus es :" + multiplo);
//tiraDados()

tiraDados();
tiraDados();
tiraDados();*/

/*function numeroAlAzarHastaLimite( limite ){
	var num = Math.floor(Math.random() * limite) + 1;
	return num;
}
var numAzar = numeroAlAzarHastaLimite(100);
alert("El numero es:    " + numAzar);*/

/*function max(num1, num2)
{
	if (parseInt(num1) > parseInt(num2))
	{
		var numMay =  num1;
	}
	else
	{
		var numMay = num2;
	}
	return numMay;
}
var result = max(7,3);
alert("El numero mayor es:   " + result);

function saludo(){
	mensaje = "hola a todos";
	alert(mensaje);}
var mensaje = "Chao";
saludo();
alert(mensaje);
saludo();*/

var num = prompt("Ingrese un numero:  ");

	if(isNaN(num))
{
	throw new Error("No es un numero valido");
	}else{ 
		num = num *0.5;
	}
	alert(num);
