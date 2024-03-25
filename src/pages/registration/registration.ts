import Block from '../../shared/utils/block';
import registrationTmpl from './registration.tmpl';

export default class Registration extends Block {
  redefineRender() {
    return registrationTmpl;
  }
}

