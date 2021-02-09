/**
 * Declaración de un arreglo con cero elementos.
 **/ 
var arreglo = []; 

/**
 *  Agregando nuevos elemento al arreglo mediante el método push.
**/
arreglo.push(0);
arreglo.push(1);
arreglo.push(2);

/**
 * for ([expresionInicial]; [condicion]; [expresionIncremento]) {
 *  [code]
 * }
 **/

for (var posicion = 3; posicion < 5; posicion++) {
    
    // Se agrega el elemento posición al arreglo
    arreglo.push(posicion); 
}


/**
 * do {
 *  [code]
 * } while (condición)
 * 
 */
 var posicion = 5;
 do  {
    arreglo.push(posicion); 
    posicion++;
 } while(posicion < 9)

 

 /**
 * while (condición){
 *  [code]
 * } 
 */

posicion = 9;
while(posicion < 11){
    arreglo.push(posicion); 
    posicion++;
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