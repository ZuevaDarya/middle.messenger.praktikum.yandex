import Block from '../../shared/utils/block';
import errorTmpl from './error';

export default class Error extends Block {
    redefineRender() {
    return errorTmpl;
  }
}


