/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var numeroUno;
var numeroDos;
		numeroUno=document.getElementById('numeroUno').value;
		numeroDos=document.getElementById('numeroDos').value;
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		var suma =numeroUno+numeroDos;

alert("la suma es: "+suma);
}

function restar()
{
var numeroUno;
var numeroDos;
		numeroUno=document.getElementById('numeroUno').value;
		numeroDos=document.getElementById('numeroDos').value;	
var resta=numeroUno-numeroDos;
alert("la resta es "+resta);
}

function multiplicar()
{ 
var numeroUno;
var numeroDos;
		numeroUno=document.getElementById('numeroUno').value;
		numeroDos=document.getElementById('numeroDos').value;
var producto=numeroUno*numeroDos;		
alert("La multiplicacion es "+producto);
}

function dividir()
{
var numeroUno;
var numeroDos;
		numeroUno=document.getElementById('numeroUno').value;
		numeroDos=document.getElementById('numeroDos').value;
var cociente=numeroUno/numeroDos;
alert("La division es "+cociente);		

}

//funciono todo joya!!!