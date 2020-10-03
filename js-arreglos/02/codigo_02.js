
// Declaración de una variable y asignación de un arreglo con un conjunto de elementos iniciales.
// Se toma como base una cadena de texto y con ayuda de la función split se crea el arreglo.

/*	
	String:split Retorn una arreglo en base al caracter que se le pasa como divisor 
	Array.slice(inicio,): Devuelve un arreglo que contiene los elementos desde la posicion inicio hasta la posicion fin

*/


var arreglo = "Primavera,Verano".split(",");
//var arreglo = ["Primavera","Verano"]

// Operación de sumar un elemento al arreglo
arreglo.push("Otoño");
arreglo.push("Invierno");


// Obtención de un subconjunto de elementos del arreglo
var estaciones = arreglo.slice(0,3);


// Transformación de los elementos de un arreglo en una secuencia de cadenas unidas por una coma
//Las estaciones del año son Primavera,Verano,Otoño
var mensaje = "Las estaciones del año son " + estaciones.join(","); 

//e Invierno
mensaje +=  " e " + arreglo[3];

escribir(mensaje);
function escribir(texto){
	document.getElementById("consola").innerHTML = texto;
}