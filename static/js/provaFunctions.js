function setP(field, pId) {
  $(pId).html($(field).val());
}

function validarTel() {
  if ($('#tel').val().length != 14 && $('#tel').val().length > 0) {
    alert("Telefone Invalido!");
    $(telRef).val("");
    return false;
  } else return true;
}

function validarEmail() {
  var re = new RegExp("^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
  var emailString = $('#emailForm').val();
  var valid = re.test(emailString);
  if (!valid) {
    alert("Email Invalido");
    $('#emailForm').val("");
    return false;
  } else return true;
}

function salvarCampos() {
  var formObj = {};
  formObj.nome = $("#nome").val();
  formObj.email = $("#emailForm").val();
  formObj.tel = $("#tel").val();
  formObj.assunto = $("#assunto").val();
  formObj.mensagem = $("#mensagem").val();

  sessionStorage.setItem("formMessage", JSON.stringify(formObj));
}

function recuperarCampos() {
  var json = sessionStorage.getItem("formMessage");
  var formObj = JSON.parse(json);

  $("#nome").val(formObj.nome);
  $("#emailForm").val(formObj.email);
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
    .each(function () {
      if ($(this).val() == "") {
        formValido = false;
        return false;
      }
    });

  return formValido;
}