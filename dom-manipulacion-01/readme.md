# Manejo de DOM por medio de document.getElementById(id)

```html
 <body onload="onloadBody();">
  <h2>document.getElementById(id)</h2>

  <p id="consola"></p>
</body>
```

En el código html superior se ha agregado la propiedad **onload** al elemento *body*. Cuando el documento se haya cargado de forma completa se ejecutará la función JavaScript onloadBody:

```javascript
function onloadBody(){
    document.getElementById("consola").innerHTML="Se ha cargado completamente el documento!";
}
```

Dentro la función *onloadBody* se obtiene el párrafo con id igual a "consola" y se le asigna el contenido html:  
 **Se ha cargado completamente el documento!**

