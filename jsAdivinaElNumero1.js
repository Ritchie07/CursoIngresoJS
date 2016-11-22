/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	contadorIntentos=0; //aclaracion para indicar que no ha habido intentos antes!!
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	numeroSecreto= Math.floor((Math.random() * 100) + 1);

}

function verificar()
{

var numero = document.getElementById('numero').value;

contadorIntentos++;
	//contadorIntentos= contadorIntentos+1;
	//contadorIntentos+=1;
document.getElementById('intentos').value=contadorIntentos;
	if(numero==numeroSecreto)
		{
		alert("Usted es un ganador!!! y en solo " +contadorIntentos+ " intentos");
		}
	if(numero<numeroSecreto)
		{
		alert("Falta...");
		}
	if(numero>numeroSecreto) //en este caso tambien puede ser "else"
		{
		alert("Se paso...");
		}

}