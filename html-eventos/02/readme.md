[Volver](../)
# Manejo de evento change sobre un campo de entrada

```html
 <form name="formulario">
    <input type="text" name="entrada"  onchange="onchangeInput(this)" placeholder="Escriba un texto"  ><br>
    <input type="text" name="salida" readonly>
  </form>
```

En el código html superior se ha agregado la propiedad **onchange** al elemento *input*. En caso que cambie el valor del input se ejecutará la función JavaScript onchangeInput:

```javascript
function onchangeInput(input){
    document.forms["formulario"]["salida"].value = input.value;
}
```

[Volver](../)