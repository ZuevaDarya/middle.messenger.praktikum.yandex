import Block from '../../shared/utils/block';
import formFooterTmpl from './form-footer';

export default class FormFooter extends Block {
  redefineRender() {
    return formFooterTmpl;
  }
}


