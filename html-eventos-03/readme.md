# Manejo de evento load el elemento body

```html
 <body onload="onloadBody();">
  <h2>Evento load</h2>

  <p id="consola"></p>
</body>
```

En el código html superior se ha agregado la propiedad **onload** al elemento *body*. Cuando el documento se haya cargado de forma completa se ejecutará la función JavaScript onloadBody:

```javascript
function onloadBody(){
    document.getElementById("consola").innerHTML="Se ha cargado completamente el documento!";
}
```


