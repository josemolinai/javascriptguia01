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
