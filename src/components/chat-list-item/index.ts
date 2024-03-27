import Block from '../../shared/utils/block';
import chatListItemTmpl from './chat-list-item';

export default class ChatListItem extends Block {
  redefineRender() {
    return chatListItemTmpl;
  }
}
