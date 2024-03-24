import Block from '../../shared/utils/block';
import formContentTmpl from './form-content';

export default class FormContent extends Block {
  redefineRender() {
    return formContentTmpl;
  }
}


