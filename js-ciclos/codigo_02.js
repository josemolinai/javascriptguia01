var contador = 10;
var mensaje = ""
do {
    mensaje += "Contador tiene el valor " + contador + "<br>";
    contador--;				// En cada iteración se disminuye en uno el valor de contador
} while (contador > 0)		//El ciclo se detiene cuando contador es igual o menor a cero
escribir(mensaje);
function escribir(texto) {
    document.getElementById("consola").innerHTML = texto;
}