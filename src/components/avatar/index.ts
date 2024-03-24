import avatarTmpl from './avatar';
import Block from '../../shared/utils/block';
import { Props } from '../../shared/types';

export default class Avatar extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return avatarTmpl;
  }
}
