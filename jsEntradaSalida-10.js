/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var importe;
	importe=document.getElementById('importe').value;
var resultado;
	resultado=parseInt(importe)-(importe/100*25);
	
document.getElementById('resultado').value=resultado;	
}
