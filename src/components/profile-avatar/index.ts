import Block from '../../shared/utils/block';
import profileAvatarTmpl from './profile-avatar';
import { Props } from '../../shared/types';

export default class profileAvatar extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return profileAvatarTmpl;
  }
}

