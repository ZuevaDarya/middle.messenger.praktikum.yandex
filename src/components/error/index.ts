import Block from '../../shared/core/block';
import errorTmpl from './error';

export default class Error extends Block {
  redefineRender() {
    return errorTmpl;
  }
}


