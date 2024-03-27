import Block from '../../shared/utils/block';
import profileAvatarTmpl from './profile-avatar';

export default class ProfileAvatar extends Block {
  redefineRender() {
    return profileAvatarTmpl;
  }
}

