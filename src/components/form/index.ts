import Block from '../../shared/core/block';
import FormContent from '../form-content';
import FormFooter from '../form-footer';
import formTmpl from './form';
import { IForm } from '../../shared/types';

export default class Form extends Block {
  constructor(props: IForm) {
    super('form', {
      formContent: new FormContent({
        formContentClass: props.formContentClass,
        list: props.list
      }),
      formFooter: new FormFooter({ ...props })
    });
  }

  redefineRender() {
    return formTmpl;
  }
}


