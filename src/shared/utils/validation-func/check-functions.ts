
import { VALIDATE_ERRORS } from '../../consts/validate-errors';

type ReturnData = {
  isValid: boolean,
  errorMsg: string
}

export function checkName(data: string): ReturnData {
  const regexp = /^[A-ZЁА-Я][a-zA-ZЁA-Яёа-я-]+$/;
  return {
    isValid: regexp.test(data),
    errorMsg: VALIDATE_ERRORS.nameError,
  };
}

export function checkLogin(data: string): ReturnData {
  const regexp = /^[A-Za-z][A-Za-z0-9_-]{2,19}$/;
  return {
    isValid: regexp.test(data),
    errorMsg: VALIDATE_ERRORS.loginError,
  };
}

export function checkEmail(data: string): ReturnData {
  const regexp = /^[a-zA-Z0-9_.+-]+@[A-Za-z0-9]+([_.-][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
  return {
    isValid: regexp.test(data),
    errorMsg: VALIDATE_ERRORS.emailError,
  };
}

export function checkPassword(data: string): ReturnData {
  const regexp = /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,40}$/;
  return {
    isValid: regexp.test(data),
    errorMsg: VALIDATE_ERRORS.passwordError,
  };
}

export function checkPhone(data: string): ReturnData {
  const regexp = /^(\+)?\d{10,15}$/;
  return {
    isValid: regexp.test(data),
    errorMsg: VALIDATE_ERRORS.phoneError,
  };
}

export function checkMessage(data: string): ReturnData {
  const regexp = /.+/;
  return {
    isValid: regexp.test(data),
    errorMsg: VALIDATE_ERRORS.messageError,
  };
}
