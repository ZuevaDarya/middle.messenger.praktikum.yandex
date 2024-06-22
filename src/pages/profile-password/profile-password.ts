import Block from '../../shared/core/block';
import profilePasswordTmpl from './profile-password.tmpl';

export default class ProfilePassword extends Block {
  redefineRender() {
    return profilePasswordTmpl;
  }
}
