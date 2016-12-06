function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
var numeroIngresado;
var maximo;
var minimo;


	while(respuesta!='no')
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (contador==0){

			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}
		else
		{
			if (numeroIngresado>maximo){

				maximo=numeroIngresado;
			}
				if (numeroIngresado<minimo){
					minimo=numeroIngresado;
				}	
			}



		contador++;
		respuesta = prompt ("ingrese no para salir");

	
	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN