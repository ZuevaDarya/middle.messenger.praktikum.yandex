import Block from '../../shared/utils/block';
import formTmpl from './form';

export default class Form extends Block {
  redefineRender() {
    return formTmpl;
  }
}


