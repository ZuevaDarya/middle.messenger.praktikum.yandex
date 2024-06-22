import Block from '../../shared/core/block';
import formContentTmpl from './form-content';

interface IFormContent {
  formContentClass?: string;
  list?: Block[]
}

export default class FormContent extends Block {
  constructor(props: IFormContent) {
    super('div', {
      attr: { class: props?.formContentClass },
      lists: props.list
    });
  }

  redefineRender() {
    return formContentTmpl;
  }
}
