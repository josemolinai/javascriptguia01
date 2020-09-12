// Declaración de una variable y asignación de un arreglo con un conjunto de elementos iniciales.
var arreglo = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

// Operación de sumar elementos al arreglo
arreglo.push("Junio");
arreglo.push("Julio");
arreglo.push("Agosto");
arreglo.push("Septiembre");
arreglo.push("Octubre");
arreglo.push("Noviembre");
arreglo.push("Diciembre");
// Obtención del primer elemento del arreglo
var mensaje = "El primer més del año es: " + arreglo[0] + "<br>";
escribir(mensaje);

//mensaje = mensaje + "El último més del año es: " + arreglo[11];
mensaje +=  "El último més del año es: " + arreglo[11];

escribir(mensaje);

function escribir(texto) {
    document.getElementById("consola").innerHTML = texto;
}