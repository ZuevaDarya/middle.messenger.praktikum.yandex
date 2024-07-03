import { checkDataValid } from './check-data-valid';
import { FORM_INPUT_NAMES } from '../../consts/form-input-names';
import { VALIDATE_ERRORS } from '../../consts/validate-errors';

export function validateSubmit(e: Event): boolean {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const inputs = form.querySelectorAll('input');

  const errorId = 'error-form-submit';
  const errorElem = document.createElement('span');
  const btnSubmit = document.querySelector('[type=submit]')
  const btnParent = btnSubmit?.parentElement;
  const errorText = document.querySelector(`#${errorId}`);
  const searchInput = document.querySelector(`[name=${FORM_INPUT_NAMES.message}]`);

  let isError = false;

  const inputsForCheck = [...inputs].filter(item => item.name !== FORM_INPUT_NAMES.displayName);

  inputsForCheck.forEach(input => {
    const checkDataState = checkDataValid(input.name, input.value);

    if (!checkDataState?.isValid) {
      isError = true;
    }
  });

  if (isError) {
    if (!errorText) {
      errorElem.textContent = VALIDATE_ERRORS.submitError;
      errorElem.classList.add('submit-error');
      errorElem.setAttribute('id', errorId);
      btnSubmit?.insertAdjacentElement('beforebegin', errorElem);

      searchInput?.classList.add('search-input_error');
    }

    return false;
  } else {
    if (errorText) {
      btnParent?.removeChild(errorText);
    }

    if (searchInput) {
      searchInput.classList.remove('search-input_error');
    }

    return true;
  }
}
