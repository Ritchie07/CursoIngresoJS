function Mostrar()
{

var contador=0;
var positivo=0;
var negativo=1;
var respuesta='si';
var numeroIngresado;


while (respuesta=='si') {

		numeroIngresado=prompt ("ingrese numero " + contador);
		numeroIngresado=parseInt(numeroIngresado);
	
		if (numeroIngresado<0){

			negativo= negativo*numeroIngresado;
		}

		else{

			positivo= positivo+numeroIngresado;
		}

	respuesta= prompt("ingrese si para continuar");

}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN