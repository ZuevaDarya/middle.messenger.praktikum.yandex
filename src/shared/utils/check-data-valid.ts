
import {
  checkEmail,
  checkLogin,
  checkMessage,
  checkName,
  checkPassword,
  checkPhone
} from './check-functions';
import { FORM_INPUT_NAMES } from '../consts/form-input-names';

export function checkDataValid(name: string, data: string) {
  const isPassword =
    name === FORM_INPUT_NAMES.password ||
    name === FORM_INPUT_NAMES.newPassword ||
    name === FORM_INPUT_NAMES.oldPassword ||
    name === FORM_INPUT_NAMES.passwordAgain;

  const isName =
    name === FORM_INPUT_NAMES.firstName ||
    name === FORM_INPUT_NAMES.secondName;

  if (isPassword) {
    return checkPassword(data);
  }

  if (isName) {
    return checkName(data);
  }

  if (name === FORM_INPUT_NAMES.login) {
    return checkLogin(data);
  }

  if (name === FORM_INPUT_NAMES.email) {
    return checkEmail(data);
  }

  if (name === FORM_INPUT_NAMES.phone) {
    return checkPhone(data);
  }

  if (name === FORM_INPUT_NAMES.message) {
    return checkMessage(data);
  }
}
