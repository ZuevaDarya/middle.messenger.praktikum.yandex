import Block from '../../shared/utils/block';
import chatListItemMessageTmpl from './chat-list-item-message';
import { Props } from '../../shared/types';

export default class ChatListItemMessage extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatListItemMessageTmpl;
  }
}

