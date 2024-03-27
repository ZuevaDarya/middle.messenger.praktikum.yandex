import Block from '../../shared/utils/block';
import profileItemTmpl from './profile-item';

export default class ProfileItem extends Block {
  redefineRender() {
    return profileItemTmpl;
  }
}

