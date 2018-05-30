function validar() {

  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var numero = document.getElementById('message').value;
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (username == "") {
    alert(" Escriba su nombre");
    return false;
  }

  if (email == "") {
    alert(" Escriba su correo");
    return false;
  }

  if (message == "") {
    alert(" Escriba su mensaje");
    return false;
  }

  if (!regex.test(email)) {
    alert("correo invalido");
    return false;
  }

}



function soloLetras(e){

    key=e.keycode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras="abcdefghijklmnñopqrstuvwxyz";

    especiales="8-37-38-46-164";

    teclado_especial=false;

    for (var i in especiales) {
      if (key==especiales[i]) {
        teclado_especial=true;
        break;
      }
    }

    if (letras.indexOf(teclado)==-1  && !teclado_especial) {

      return false;
    }
}
