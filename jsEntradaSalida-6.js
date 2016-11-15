/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numero1;
var numero2;
		numero1=document.getElementById('numero1').value;
		numero2=document.getElementById('numero2').value;
	numero1=parseint(numero1);
	numero2=parseint(numero2);

/*otra version > numero1=parseint(numero1);
---------------> nuuero2=parseint(numero2);
---------------> var suma=numero1+numero2;*/
	var suma=numero1+numero2;
	
alert("la suma es "+suma);

//no me anduvo D: -- chequear
}

