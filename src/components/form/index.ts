import Block from '../../shared/utils/block';
import FormContent from '../form-content';
import FormFooter from '../form-footer';
import formTmpl from './form';
import { IForm } from '../../shared/types';
import { validateSubmit } from '../../shared/utils/validate-submit';

export default class Form extends Block {
  constructor(props: IForm) {
    super('form', {
      events: {
        submit: (e: Event) => validateSubmit(e)
      },
      formContent: new FormContent({
        formContentClass: props.formContentClass,
        list: props.list
      }),
      formFooter: new FormFooter({...props})
    });
  }

  redefineRender() {
    return formTmpl;
  }
}


