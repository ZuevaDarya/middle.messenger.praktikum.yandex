import { checkDataValid } from './check-data-valid';
import comparePasswords from './compare-passwords';
import { FORM_INPUT_NAMES } from '../../consts/form-input-names';
import { VALIDATE_ERRORS } from '../../consts/validate-errors';

export function validateFormData(e: Event): void {
  e.preventDefault();

  const input = e.target as HTMLInputElement;
  const inputValue = input.value;
  const inputPasswordAgain = document.querySelector(`[name=${FORM_INPUT_NAMES.passwordAgain}]`) as HTMLInputElement;
  const dataValidState = checkDataValid(input.name, inputValue);

  if (input.name === FORM_INPUT_NAMES.displayName) {
    return;
  }

  if (!dataValidState?.isValid) {
    prepareSpanError(dataValidState?.errorMsg as string, input);
  } else {
    removeSpanError(input);
  }

  if (inputPasswordAgain && dataValidState?.isValid) {
    const passwordsEqual = comparePasswords();

    if (!passwordsEqual) {
      prepareSpanError(VALIDATE_ERRORS.comparePasswordError as string, inputPasswordAgain);
    } else {
      removeSpanError(inputPasswordAgain);
    }
  }
}

function prepareSpanError(message: string, input: HTMLInputElement) {
  const errorElem = document.createElement('span');
  const inputField = input.parentElement;
  const container = inputField?.parentElement;
  const inputName = input.name;
  const errorId = `error-${inputName}`;

  errorElem.classList.add('validation-error');
  errorElem.textContent = message;
  errorElem.setAttribute('id', errorId);

  const errorText = container?.querySelector(`#${errorId}`);
  if (!errorText) {
    inputField?.insertAdjacentElement('afterend', errorElem);
    input?.classList.add('input_validation-error');
  }
}

function removeSpanError(input: HTMLInputElement) {
  const inputField = input.parentElement;
  const container = inputField?.parentElement;
  const errorId = `error-${input.name}`;

  if (container?.querySelector(`#${errorId}`)) {
    container?.removeChild(container!.querySelector(`#${errorId}`)!);
    input?.classList.remove('input_validation-error');
  }
}
