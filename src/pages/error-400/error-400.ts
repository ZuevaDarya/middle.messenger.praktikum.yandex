import Block from '../../shared/utils/block';
import error400Tmpl from './error-400.tmpl';

export default class Error400 extends Block {
  redefineRender() {
    return error400Tmpl;
  }
}

