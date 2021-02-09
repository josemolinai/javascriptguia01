# Introducción a los Ciclos en JavaScript

Los ciclos en JavaScript permiten realizar una taraea que se repite hasta que se logra una condición o mientras se cumpla una condición.

Las instrucciones de JavaScript para ejecutar ciclos ocupan los comandos __for__, __do__ y __while__. 

Otros comandos úttiles en este contexto son __continue__ y __break__. 

Nuestro caso de ejemplo comenzará declarando un arreglo vacío como puedes ver en el siguiente código:

```javascript
/**
 * Declaración de un arreglo con cero elementos.
 **/ 
var arreglo = []; 
```

Mediante __array.push()__ podemos agregar nuevos elementos a este arreglo.

```javascript
/**
 *  Agregando nuevos elementos al arreglo mediante el método push.
**/
arreglo.push(0);
arreglo.push(1);
arreglo.push(2);
```


También se puede ocupar el ciclo __for__:

```javascript
/**
 * for ([expresionInicial]; [condicion]; [expresionIncremento]) {
 *  [code]
 * }
 **/

for (var posicion = 3; posicion < 5; posicion++) {
    
    // Se agrega el elemento posición al arreglo
    arreglo.push(posicion); 
}
```

O el ciclo __do-while__ :

```javascript
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
```

Finalmente un ejemplo utilzando el ciclo __while__


```javascript
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
```