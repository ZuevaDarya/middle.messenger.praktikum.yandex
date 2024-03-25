import Block from '../../shared/utils/block';
import chatNoticeTmpl from './chat-notice';

export default class ChatNotice extends Block {
  redefineRender() {
    return chatNoticeTmpl;
  }
}

