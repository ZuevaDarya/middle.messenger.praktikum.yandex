import Block from '../../shared/utils/block';
import chatTitleTmpl from './chat-title';
import { Props } from '../../shared/types';

export default class ChatTitle extends Block {
  constructor(tagName = 'p', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatTitleTmpl;
  }
}

