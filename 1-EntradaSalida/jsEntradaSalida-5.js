/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	//id = "elNombre", "laEdad"
	var SuNombre= ("elNombre");
	var SuEdad=("laEdad");
		
		laEdad=prompt("Su edad es");
		elNombre=prompt("Su nombre es");

	document.getElementById('elNombre').value= SuNombre;
	document.getElementById('laEdad').value= SuEdad;
		

	alert("Ústed se llama "+elNombre+" y tiene "+laEdad);


}

