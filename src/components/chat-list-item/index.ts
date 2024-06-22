import Block from '../../shared/core/block';
import chatListItemTmpl from './chat-list-item';

export default class ChatListItem extends Block {
  redefineRender() {
    return chatListItemTmpl;
  }
}
