import Block from '../../shared/core/block';
import { IProfileAvatar } from '../../shared/types';
import profileAvatarTmpl from './profile-avatar';

export default class ProfileAvatar extends Block {
  constructor(props: IProfileAvatar) {
    super('div', { ...props });
  }
  redefineRender() {
    return profileAvatarTmpl;
  }
}

