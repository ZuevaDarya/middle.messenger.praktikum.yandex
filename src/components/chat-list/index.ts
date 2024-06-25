import Block from '../../shared/core/block';
import chatListTmpl from './chat-list';
import { IChatList } from '../../shared/types';

export default class ChatList extends Block {
  constructor(props: IChatList) {
    super('div', {
      chatListItems: props.chats
    });
  }
  redefineRender() {
    return chatListTmpl;
  }
}

