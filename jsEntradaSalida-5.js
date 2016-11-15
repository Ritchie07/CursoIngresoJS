/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	//id = "elNombre", "laEdad"
	var elnombre= ("Su nombre");
	var laEdad=("Su edad");
		
		laEdad=prompt("Su edad es");
		elNombre=prompt("Su nombre es");

	document.getElementById('elNombre').value= elNombre;
	document.getElementById('laEdad').value= laEdad;
		

	alert("Ústed se llama "+elNombre+" y tiene "+laEdad);


}

