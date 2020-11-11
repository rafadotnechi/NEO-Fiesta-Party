/**
 * Semantic-UI Form Validator Classes
 */
import {validarCPF, validarCNPJ} from "../functions/cpfcnpj";
import {validarTel, validarEmail} from "../functions/emailtel";

$.fn.form.settings.rules.cpf = function(value, cpf) {
    return validarCPF(value);
};

$.fn.form.settings.rules.cnpj = function(value, cnpj) {
    return validarCNPJ(value);
};

$.fn.form.settings.rules.telephoneV = function(value, tele) {
    return validarTel(value);
};

$.fn.form.settings.rules.emailV = function(value, mail) {
    return validarEmail(value);
};