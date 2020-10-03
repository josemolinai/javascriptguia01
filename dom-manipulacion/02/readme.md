[Volver](../readme.md)
# Manejo de DOM por medio de document.getElementsByTagName(tagname)

```html
<body onload="onloadBody();">
  <h2>document.getElementsByTagName(tagname)</h2>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
</body>
```

En el código html superior se ha agregado la propiedad **onload** al elemento *body*. Cuando el documento se haya cargado de forma completa se ejecutará la función JavaScript onloadBody:

```javascript
function onloadBody(){
    var parrafos = document.getElementsByTagName("p");
    parrafos[0].innerHTML = "Párrafo 1";
    parrafos[1].innerHTML = "Párrafo 2";
    parrafos[2].innerHTML = "Párrafo 3";
    parrafos[3].innerHTML = "Párrafo 4";
}
```

Dentro de la función *onloadBody* se obtienen los párrafos del documento y se le asigna un texto que los enumera.

[Volver](../readme.md)