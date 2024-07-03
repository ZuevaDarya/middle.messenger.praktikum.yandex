import avatarTmpl from './avatar';
import Block from '../../shared/core/block';
import { IAvatar } from '../../shared/types';

class Avatar extends Block {
  constructor(props: IAvatar) {
    super('div', { ...props });
  }

  redefineRender() {
    return avatarTmpl;
  }
}

export default Avatar;
