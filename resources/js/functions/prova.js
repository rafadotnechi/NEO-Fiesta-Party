$(document).ready(function () {
  $('#formMensagem')
    .form({
      fields: {
        nome: {
          rules: [
            {
              type: 'empty'
            }
          ]
        },
        emailForm: {
          rules: [
            {
              type: 'emailV[{value}]'
            }
          ]
        },
        tel: {
          rules:
            [
              {
                type: 'telephoneV[{value}]'
              }
            ]
        },
        assunto: {
          rules: [
            {
              type: 'empty'
            }
          ]
        },
        mensagem: {
          rules: [
            {
              type: 'empty'
            }
          ]
        }
      }
    });


  $('#tel').mask('00-0000-0000');

  $('#nome').focusout(function (event) {
    setP('#nome', '#nomeMostra');
  });

  $('#emailForm').focusout(function (event) {
    setP('#emailForm', '#emailMostra');
  });

  $('#tel').focusout(function (event) {
    setP('#tel', '#telMostra');
  });

  $('#assunto').focusout(function (event) {
    setP('#assunto', '#assuntoMostra');
  });

  $('#mensagem').focusout(function (event) {
    setP('#mensagem', '#mensagemMostra');
  });

  $('#formMensagem').submit(function (event) {
    event.preventDefault();
    if ($('#formMensagem').form('is valid')) {
      salvarCampos();
      this.submit();
      return true;
    }
    else {
      return false;
    }
  });

  $('#recuperar').click(function (event) {
    recuperarCampos();
  });
});

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