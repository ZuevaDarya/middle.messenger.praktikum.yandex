import Block from '../../shared/core/block';
import formTitleTmpl from './form-title';

interface IFormTitle {
  text: string;
}

export default class FormTitle extends Block {
  constructor(props: IFormTitle) {
    super('h1', { ...props })
  }

  redefineRender() {
    return formTitleTmpl;
  }
}
