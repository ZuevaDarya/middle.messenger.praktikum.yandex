import { FORM_INPUT_NAMES } from '../consts/form-input-names';

function comparePasswords(): boolean {
  const inputPassword = document.querySelector(`[name=${FORM_INPUT_NAMES.password}]`);
  const inputNewPassword = document.querySelector(`[name=${FORM_INPUT_NAMES.newPassword}]`);
  const inputPasswordAgain = document.querySelector(`[name=${FORM_INPUT_NAMES.passwordAgain}]`);
  const passwordAgainValue = (inputPasswordAgain as HTMLInputElement)?.value;
  let password = '';

  if (inputPassword) {
    password = (inputPassword as HTMLInputElement).value;
  }

  if (inputNewPassword) {
    password = (inputNewPassword as HTMLInputElement).value;
  }

  return passwordAgainValue !== undefined && passwordAgainValue === password;
}

export default comparePasswords;

