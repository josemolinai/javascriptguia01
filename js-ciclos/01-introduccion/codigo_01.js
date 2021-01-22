var arreglo = []; //Declaración de un arreglo con cero elementos.

//for ([expresionInicial]; [condicion]; [expresionIncremento])
//  sentencia
for (var posicion = 0; posicion < 10; posicion++) {
    arreglo.push(posicion); // Se agrega el elemento posición al arreglo
}
//Se obtiene el largo del arreglo
var mensaje = "El arreglo tiene un largo de " + arreglo.length + " elementos";


for(var posicion = arreglo.length -1; posicion >=0; posicion--){
    mensaje +="<br>" + "El valor del arreglo en la posicion " +  posicion + " es " + arreglo[posicion];
}

escribir(mensaje);
function escribir(texto) {
    document.getElementById("consola").innerHTML = texto;
}