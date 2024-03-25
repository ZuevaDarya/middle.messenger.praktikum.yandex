import Block from '../../shared/utils/block';
import error500Tmpl from './error-500.tmpl';

export default class Error500 extends Block {
  redefineRender() {
    return error500Tmpl;
  }
}

