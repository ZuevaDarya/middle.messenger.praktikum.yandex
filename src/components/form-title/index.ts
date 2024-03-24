import Block from '../../shared/utils/block';
import formTitleTmpl from './form-title';

export default class FormTitle extends Block {
  redefineRender() {
    return formTitleTmpl;
  }
}
