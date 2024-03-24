import Block from '../../shared/utils/block';
import profileItemTmpl from './profile-item';
import { Props } from '../../shared/types';

export default class profileItem extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return profileItemTmpl;
  }
}

