import Block from '../../shared/core/block';
import error400Tmpl from './error-400.tmpl';

export default class Error400 extends Block {
  redefineRender() {
    return error400Tmpl;
  }
}

