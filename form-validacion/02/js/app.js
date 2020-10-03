function enviarForm1() {
  var nombre = document.forms["form1"]["fnombre"].value;
  document.forms["form1datos"]["fnombre"].value = nombre;
}