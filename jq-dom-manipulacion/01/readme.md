[Volver](../)
# Jquery - Evento ready 

- Jquery permite obtener un elemento del DOM mediante selectores $(selector)
- Jquery permite interceptar la ejecución del evento __ready__ que se gatilla cuando el documento html esta completamente cargado.
- Controlar este evento es útil para poder efectuar tareas de inicialición del documento HTML

~~~JavaScript
$(document).ready(function(){
// Esta sección de código se ejecuta cuando el documento ha sido cargado
    $("#salida").html("Se ha cargado completamente el documento!");
});
~~~

- observa como el código anterior ocupa el selector _document_ en la forma __$(document)__, luego se define una función que manejará el control del evento ready por medio de   
 __$(document).ready(function(){... .... });__

- Para asignar un contenido html al elemento seleccionado se usa la fómula $(selector).html(nuevohtml)

~~~JavaScript
$("#salida").html("Se ha cargado completamente el documento!");
~~~

- En esta ocación se ha usado un selector de tipo __id__, lo que se aprecia al estar precedido por el signo __#__
[Volver](../)