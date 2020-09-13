# Manejo de evento click sobre un botón 

```html
<body>
  <h2>Evento clik</h2>

  <button type="button" onclick="document.getElementById('consola').innerHTML = Date()">
    Haz Click aquí!</button>

  <p id="consola"></p>
</body>
```

En el código html superior se ha agregado la propiedad **onclick** al elemento *button*. En caso que suceda el evento click sobre dicho botón, se ejecutará el siguiete código JavaScript:

```javascript
document.getElementById('consola').innerHTML = Date()
```


