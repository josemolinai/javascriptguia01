[Volver](../)
# Copiando datos ingresado a un formulario de solo lectura.

- Una alternativa a los formulario tipo submit, son los formulario donde la validación de datos se efectuar cuando el usuario hace click sobre un __input de tipo button__.

- Observa con detención el siguiente formulario HTML.

~~~html
<form name="form1">
<div class="titulo">Formulario 1</div>
    <p>Ingresa tu nombre y apellido, luego presiona el boton enviar</p>
    <label>Nombre:</label>
    <input name="fnombre" type="text" placeholder="Nombre" /><br />

    <label>Apellido:</label>
    <input name="fapellido" type="text" /><br /><br />
    <input name="benviar" type="button" value="Enviar" onclick="return enviarForm1();" />
</form>
~~~

- Observa como este formulario no tiene definida la propiedad __obsubmit__ ni tampoco la propiedad __action__.


- Para entender como se efectua la validación de datos en este formulario presta atención al botón _"Enviar"_

~~~html
<input name="benviar" type="button" value="Enviar" onclick="return enviarForm1();" />
~~~

- Tiene definida la propiedad _onclick_ y un manejador de dicho evento __"enviarForm1()"__.

~~~JavaScript
function enviarForm1() {
  var nombre = document.forms["form1"]["fnombre"].value;
  document.forms["form1datos"]["fnombre"].value = nombre;
}
~~~

- La función __enviarForm1()__ rescata el nombre del usuario y lo escribe en un segudo formulario llamado __form1datos__.

~~~html
<form name="form1datos">
<div class="titulo">Datos Ingresados</div>
<p>El usuario a ingesado los siguientes datos</p>
    <label>Nombre:</label>
    <input name="fnombre" type="text" readonly /><br />

    <label>Apellido:</label>
    <input name="fapellido" type="text" readonly /><br /><br />
</form>
~~~

- En este ejemplo sólo se demuestra como es posible copiar los datos de un formulario en otro destino, en este caso un formulario de solo lectura.

- Observa el uso de la propiedad __readonly__ en 
~~~html
<input name="fnombre" type="text" readonly />
~~
y en 

~~~html
<input name="fapellido" type="text" readonly />
~~~

[Volver](../)