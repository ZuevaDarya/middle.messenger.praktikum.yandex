import Block from '../../shared/core/block';
import profileAvatarTmpl from './profile-avatar';

export default class ProfileAvatar extends Block {
  redefineRender() {
    return profileAvatarTmpl;
  }
}

