import Block from '../../shared/utils/block';
import chatNoticeTmpl from './chat-notice';
import { Props } from '../../shared/types';

export default class ChatNotice extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatNoticeTmpl;
  }
}

