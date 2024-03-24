import Block from '../../shared/utils/block';
import profileInputTmpl from './profile-input';
import { Props } from '../../shared/types';

export default class profileInput extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return profileInputTmpl;
  }
}

