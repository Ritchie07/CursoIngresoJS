/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*
	concepto de variable
	concatenacion
	prompt
	*/
//concepto de variable

	var producto;
	producto= "samsung";
	producto=prompt("ingrese marca","sin marca");
	var precio=prompt("ingrese precio","999");

//concatenacion, se hace con el signo + !!


	alert("su producto es: "+producto+" y su precio es: "+precio);


}

