function setP(field, pId) {
  $(pId).html(field.val());
}

function validarTel(telRef) {
  if (telRef.val().length != 14) {
    alert("Telefone Inválido!");
    telRef.val("");
    return false;
  } else return true;
}

function validarEmail(emailRef) {
  var validEmail =
    "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  var re = new RegExp(validEmail);
  var emailString = emailRef.val();
  var valid = re.test(emailString);
  if (!valid) {
    alert("Email Inválido");
    emailRef.val("");
    return false;
  } else return true;
}

function salvarCampos() {
  var formObj = {};
  formObj.nome = $("#nome").val();
  formObj.email = $("#email").val();
  formObj.tel = $("#tel").val();
  formObj.assunto = $("#assunto").val();
  formObj.mensagem = $("#mensagem").val();

  sessionStorage.setItem("formMessage", JSON.stringify(formObj));
}

function recuperarCampos() {
  var json = sessionStorage.getItem("formMessage");
  var formObj = JSON.parse(json);

  $("#nome").val(formObj.nome);
  $("#email").val(formObj.email);
  $("#tel").val(formObj.tel);
  $("#assunto").val(formObj.assunto);
  $("#mensagem").val(formObj.mensagem);

  $("#nomeMostra").html(formObj.nome);
  $("#emailMostra").html(formObj.email);
  $("#telMostra").html(formObj.tel);
  $("#assuntoMostra").html(formObj.assunto);
  $("#mensagemMostra").html(formObj.mensagem);
}

function validaCampos() {
  var formValido = true;

  $("#formMensagem")
    .find("input")
    .each(function() {
      if ($(this).val() == "") {
        formValido = false;
        return false;
      }
    });

  return formValido;
}
