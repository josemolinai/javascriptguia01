[Volver](../)
# Validando datos numéricos en Formularios

- Observa con detención el siguiente formulario:

~~~html
 <form name="form2">
    <div class="titulo">Formulario 2</div>
    <p> Ingresa tu edad y año de nacimiento, luego presiona el boton enviar</p>
    <label>Edad:</label>
    <input name="fedad" type="number" /><br />

    <label>Año nacimiento:</label>
    <input name="fanio" type="text" /><br /><br />
    <input name="benviar" type="button" value="Enviar" onclick="return enviarForm2();"
    />
</form>
~~~

- Presta atención en uso de la propiedad __type number__ para el campo de edad 
~~~html
<input name="fedad" type="number" />
~~~

y el uso de la propiedad __type text__ para el campo del año.

~~~html
<input name="fanio" type="text" />
~~~

- La función que realizará la validación del formulario es la siguiente:

~~~JavaScript
function enviarForm2() {
  //Edad
  var edad = document.forms["form2"]["fedad"].value;
  if (edad == undefined || edad.trim() == "" || edad < 0) {
    alert("Debe ingresar una edad mayor o igual a cero.");
  } else {
    document.forms["form2datos"]["fedad"].value = edad;
  }

  //Año
  var anio = document.forms["form2"]["fanio"].value;
  if(isNaN(Number(anio))){
    alert("Debe ingresar un año mayor o igual a 1900");
  }else{
      if(Number(anio) < 1900){
        alert("Debe ingresar un año mayor o igual a 1900");
      }else{
        document.forms["form2datos"]["fanio"].value = anio;
      }
  }
}
~~~

## Validación de un campo de entrada tipo number

- Cuando un navegador detecta un campos de entrada tipo number sólo permite que el usuario ingrese números lo que incluye cualquier numero positivo, negativo o cero.

- Por lo anterior es necesario validar que la edad no sea menor a cero años.

~~~JavaScript
if (edad == undefined || edad.trim() == "" || edad < 0) {
   alert("Debe ingresar una edad mayor o igual a cero.");
}
~~~

- En caso que la edad ingresada se mayoro igual cero se copia el dato en el formuario de solo lectura

~~~JavaScript
document.forms["form2datos"]["fedad"].value = edad;
~~~

## Validación de un valor numérico en un campo de entrad tipo text

- Si un campo de entrada del cual se espera un valor numérico pero esta definido como tipo text, entonces se debe hacer una conversión de texto a número con la función __Number()__

- Si valor ingeresado por el usuario no corresponde a un valor numérico, la función __Number()__ devolver el valor especial __NaN__ (Not-A-Number) lo que indica que no se pudo efectuar la conversión a número.

- Observa como se pasa el resultado de la función __Number()__ como parámetro de la función __isNaN()__ que simplemente devuelve true cuando recibe como entrada el valor especial __NaN__ , de lo contrario devuelve false.

- Observa con detalle el siguien código donde se ocupan estas funciones.

~~~JavaScript
if(isNaN(Number(anio))){
    alert("Debe ingresar un año mayor o igual a 1900");
}
~~~

- En caso de que valor ingresado en el campo año no sea un número valido, se lanza una alerta pidiendo al usuario que ingrese un valor mayor 1990.

- Hasta el momento solo se ha validado el tipo de datos del campo año, falta validar que se encuentre dentro del rango esperado.

~~~JavaScript
if(Number(anio) < 1900){
    alert("Debe ingresar un año mayor o igual a 1900");
}else{
    document.forms["form2datos"]["fanio"].value = anio;
}
~~~

- Ya habiendo validado que el usuario ha ingresado un valor númerico en el campo año, se procede a validar que dicho valor sea mayor o igual a 1900.

- En caso positivo se copia el valor del año al formulario de solo lectura, en caso contrario se lanza una alerta al usuario pidiend que ingrese un año mayor o igual a 1900.

[Volver](../)