import Block from '../../shared/utils/block';
import chatListTmpl from './chat-list';

export default class ChatList extends Block {
  redefineRender() {
    return chatListTmpl;
  }
}

