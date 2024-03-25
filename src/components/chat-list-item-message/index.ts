import Block from '../../shared/utils/block';
import chatListItemMessageTmpl from './chat-list-item-message';

export default class ChatListItemMessage extends Block {
  redefineRender() {
    return chatListItemMessageTmpl;
  }
}

