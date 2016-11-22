/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
//var input = getElementById("numero").value;

function comenzar()
{
	contadorIntentos=0;
	//Genero el número RANDOM entre 1 y 100
   	Math.floor((Math.random() * 100) + 1);



}										//en construccion

function verificar()
{
	
contadorIntentos++;

document.getElementById('intentos').value=contadorIntentos;

if(contadorIntentos=1)
	{
	alert("Usted es un Psíquico");
	}
if(contadorIntentos=2)
	{
	alert("Usted tiene excelente percepción");
	}
if(contadorIntentos=3)
	{
	alert("Esto es suerte");
	}
if(contadorIntentos=4)
	{
	alert("Excelente tecnica");
	}	
if(contadorIntentos=5)
	{
	alert("Usted esta en la media")
	}
if(contadorIntentos>5&&contadorIntentos<=10);
	{
	alert("Falta tecnica")
	}	
if(contadorIntentos>5&&contadorIntentos<=10);
	{
	alert("Falta tecnica")
	}	
}