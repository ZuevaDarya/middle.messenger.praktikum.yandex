import Block from '../../shared/utils/block';
import profileCloseButtonTmpl from './profile-close-button';

export default class ProfileCloseButton extends Block {
  redefineRender() {
    return profileCloseButtonTmpl;
  }
}

