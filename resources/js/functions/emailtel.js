export function validarTel(tele) {
  var re = /\d{2}\-\d{4}\-\d{4}/;
  if (re.test(tele)) {
    return true;
  } else
  return false;
}


export function validarEmail(mail) {
  var re = /^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
  if (re.test(mail)) {
    return true;
  } else
  return false;
}