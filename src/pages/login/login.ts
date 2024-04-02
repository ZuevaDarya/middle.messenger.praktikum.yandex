import Block from '../../shared/utils/block';
import loginTmpl from './login.tmpl';

export default class Login extends Block {
  redefineRender() {
    return loginTmpl;
  }
}

