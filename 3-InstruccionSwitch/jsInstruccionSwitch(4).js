function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño){
	case "Febrero":
		alert("Este mes tiene 28 dias");
	break;	
	if (mesDelAño=="Enero"||"Marzo"||"Mayo"||"Julio"||"Agosto"||"Octubre"||"Diciembre") {
		alert("Este mes tiene 31 dias");
		else
			alert("Este mes tiene 30 dias");
		}
	}

//no funciona, revisar.-

}//FIN DE LA FUNCIÓN