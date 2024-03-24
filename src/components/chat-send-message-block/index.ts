import Block from '../../shared/utils/block';
import chatSendMessageBlockTmpl from './chat-send-mesage-block';
import { Props } from '../../shared/types';

export default class ChatSendMessageBlock extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatSendMessageBlockTmpl;
  }
}

