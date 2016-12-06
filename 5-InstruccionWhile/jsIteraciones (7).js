function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while (respuesta=='si') {

		numeroIngresado=prompt ("ingrese numero " + contador);
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		
		contador++;
		respuesta = prompt("ingrese si para continuar");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN