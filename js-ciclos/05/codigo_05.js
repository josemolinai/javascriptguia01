var contador = 10;
var mensaje = ""

while (contador > 0) {         // Se ejecutan
    if (contador == 9) {
        contador--;	
        continue;               // La sentencia continue salta a la siguiete iteración
    }
    mensaje += "Contador tiene el valor " + contador + "<br>";
    contador--;				// En cada iteración se disminuye en uno el valor de contador
}

escribir(mensaje);
function escribir(texto) {
    document.getElementById("consola").innerHTML = texto;
}

