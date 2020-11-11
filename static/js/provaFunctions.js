function setP(field, pId) {
  $(pId).html($(field).val());
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
