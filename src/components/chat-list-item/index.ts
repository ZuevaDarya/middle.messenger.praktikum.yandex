import Block from '../../shared/utils/block';
import chatListItemTmpl from './chat-list-item';
import { Props } from '../../shared/types';

export default class ChatListItem extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatListItemTmpl;
  }
}
