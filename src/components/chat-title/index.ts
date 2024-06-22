import Block from '../../shared/core/block';
import chatTitleTmpl from './chat-title';

export default class ChatTitle extends Block {
  redefineRender() {
    return chatTitleTmpl;
  }
}

