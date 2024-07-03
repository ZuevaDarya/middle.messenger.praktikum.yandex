import Block from '../../shared/core/block';
import { IProfileCloseButton } from '../../shared/types';
import profileCloseButtonTmpl from './profile-close-button';

export default class ProfileCloseButton extends Block {
  constructor(props: IProfileCloseButton) {
    super('div', { ...props })
  }

  redefineRender() {
    return profileCloseButtonTmpl;
  }
}

