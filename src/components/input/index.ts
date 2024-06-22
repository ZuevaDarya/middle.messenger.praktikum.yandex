import Block from '../../shared/core/block';
import inputTmpl from './input';
import { validateFormData } from '../../shared/utils/validation-func/validate-form-data';

interface IInput {
  name: string;
  type: string
  placeholder: string;
}

export default class Input extends Block {
  constructor(props: IInput) {
    super('input', {
      ...props,
      events: {
        blur: (e: Event) => validateFormData(e)
      }
    });
  }

  redefineRender() {
    return inputTmpl;
  }
}
