import Block from '../../shared/core/block';
import profileItemTmpl from './profile-item';

export default class ProfileItem extends Block {
  redefineRender() {
    return profileItemTmpl;
  }
}

