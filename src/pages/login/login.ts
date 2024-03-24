import Block from '../../shared/utils/block';
import loginTmpl from './loginTmpl';

export default class Login extends Block {
  redefineRender() {
    return loginTmpl;
  }
}

