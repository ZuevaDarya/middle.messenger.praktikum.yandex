import Block from '../../shared/utils/block';
import profileCloseButtonTmpl from './profile-close-button';
import { Props } from '../../shared/types';

export default class profileCloseButton extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return profileCloseButtonTmpl;
  }
}

