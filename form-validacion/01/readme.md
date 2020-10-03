[Volver](../readme.md)
# Validando un formulario de tipo submit

- Un formulario tipo submit es aquel que tiene definido la propieda __onsubmit__ y que generalmente retorna un valor booleano (__true o false__).

~~~html
<form name="formulario" action="#" onsubmit="return validarFormulario()" method="post">
  Nombre: <input type="text" name="fnombre">
  <input type="submit" value="Enviar Formulario">
</form>
~~~


## Pasos para la validación del formulario
Los pasos para la validación del formularios son los siguientes:

1. El usuario ingresa los datos solicitados en el formulario.
2. El usuario debe hacer click en el __botón tipo submit__.
3. El click del usuario en el botón tipo submit gatilla el __evento onsubmit del formulario__
4. En este caso se ha definido como manejador del evento la función __validarFormulario()__
4. El manejador del evento onsubmit debe devolver __false__ cuando el formulario tiene datos incorrectos o cuando sea necesario que el usuario ingrese datos de caracter obligatorio.
5. Sólo cuando el usuario a ingesado todos los datos obligatorios y con datos correctos en valor y formato, el manejador del evento onsubmit debe devolver el valor __true__

## Manejador del evento onsubmit

Observa con detención el manejador del evento onsubmit que se ha definido para este ejemplo, se trata de la funcion __validarFormulario()__.

~~~JavaScript
function escribir(texto){
	document.getElementById("consola").innerHTML = texto;
}
function validarFormulario() {
  var x = document.forms["formulario"]["fnombre"].value;
  if (x == "") {
    escribir("Debe ingresar su nombre");
    return false;
  }
  escribir("Gracias por Registrarse");
  return true;
}
~~~

### Pasos generales dentro de un manejador del evento onsubmit

De forma general un manejador del evento onsubmit de un formulario son los siguientes:

1. Obtener los datos ingresados por el usuario
~~~JavaScript
var x = document.forms["formulario"]["fnombre"].value;
~~~

2. Validar que el datos ingresado no tenga valores incorrectos
~~~JavaScript
if (x == "") {
    escribir("Debe ingresar su nombre");
    return false;
  }
~~~
Observar como en caso el nombre ingresado corresponda a el valor cadena vacía __""__ se escribe el mensaje _"Debe ingresar su nombre"_ y se devuelve el valor __false__

3. En caso se haya validado que se haya validado que el usuario a ingresado todos los datos de forma correcta se devuelve __true__

~~~JavaScript
escribir("Gracias por Registrarse");
  return true;
~~~

[Volver](../readme.md)