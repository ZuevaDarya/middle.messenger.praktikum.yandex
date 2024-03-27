import Block from '../../shared/utils/block';
import chatTitleTmpl from './chat-title';

export default class ChatTitle extends Block {
  redefineRender() {
    return chatTitleTmpl;
  }
}

