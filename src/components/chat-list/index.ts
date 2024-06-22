import Block from '../../shared/core/block';
import chatListTmpl from './chat-list';

export default class ChatList extends Block {
  redefineRender() {
    return chatListTmpl;
  }
}

