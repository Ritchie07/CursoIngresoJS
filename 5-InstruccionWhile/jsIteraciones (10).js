function Mostrar()
{

	var contador0=0;
	var contadorP=0;
	var contadorN=0;
	//declarar contadores y variables 
	var numeroIngresado;
	var promedioP;
	var promedioN;
	var sumaNegativos;
	var sumaPositivos;
	var cuentaCero=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		numeroIngresado=prompt("ingrese numero. ingrese 'no' para salir");
		numeroIngresado=parseInt(numeroIngresado);
		

		if (numeroIngresado=0){
			contador0++;
			cuentaCero== cuentaCero+contador0;
		}
		if (numeroIngresado<0){
				contadorN++;
				sumaNegativos=parseInt(sumaNegativos);
				sumaNegativos=numeroIngresado+sumaNegativos;
					promedioN== sumaNegativos/contadorN;
				}
				else{
					contadorP++;
					sumaPositivos=parseInt(sumaPositivos);
					sumaPositivos=numeroIngresado+sumaPositivos;
					promedioP== sumaPositivos/contadorP;
				}	
		}			

	}

respuesta=prompt("ingrese mostrar para pedir los numeros");
alert("La suma de los positivos es " +sumaPositivos+ "La suma de los suma de los negativos es " +sumaNegativos+ "Las veces que salio 0 fueron " +cuentaCero+" veces");

}//FIN DE LA FUNCIÓN