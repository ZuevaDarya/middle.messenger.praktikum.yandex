import Block from '../../shared/utils/block';
import chatListTmpl from './chat-list';
import { Props } from '../../shared/types';

export default class ChatList extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatListTmpl;
  }
}

