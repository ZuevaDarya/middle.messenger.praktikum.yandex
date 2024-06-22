import Block from '../../shared/core/block';
import profileTmpl from './profile.tmpl';

export default class Profile extends Block {
  redefineRender() {
    return profileTmpl;
  }
}

