var contador = 10;
var mensaje = ""

while(contador> 0){         // Se ejecutan
    mensaje += "Contador tiene el valor " + contador + "<br>";
    contador--;				// En cada iteración se disminuye en uno el valor de contador
    if(contador < 9){
        break;              // La sentencia break termina el ciclo 
    }
}

escribir(mensaje);
function escribir(texto) {
    document.getElementById("consola").innerHTML = texto;
}

