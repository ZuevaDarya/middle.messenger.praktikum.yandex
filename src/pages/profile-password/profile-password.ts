import Block from '../../shared/utils/block';
import profilePasswordTmpl from './profile-password.tmpl';

export default class ProfilePassword extends Block {
  redefineRender() {
    return profilePasswordTmpl;
  }
}
