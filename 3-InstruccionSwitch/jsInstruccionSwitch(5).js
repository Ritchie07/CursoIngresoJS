function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
laHora=parseInt(laHora);
switch(laHora){
	case 8:
	case 9:
	case 10:
		alert("Es de mañana");
		break;
	}



}//FIN DE LA FUNCIÓN