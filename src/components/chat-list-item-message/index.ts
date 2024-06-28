import Block from '../../shared/core/block';
import chatListItemMessageTmpl from './chat-list-item-message';
import { IChatListItemMessage } from '../../shared/types';

export default class ChatListItemMessage extends Block {
  constructor(props: IChatListItemMessage) {
    super('p', {
      lastMessage: props.lastMessage,
      senderName: props.senderName
    });
  }

  redefineRender() {
    return chatListItemMessageTmpl;
  }
}

