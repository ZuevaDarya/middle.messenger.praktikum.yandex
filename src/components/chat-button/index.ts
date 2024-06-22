import Block from '../../shared/core/block';
import chatButtonTmpl from './chat-button';

export default class ChatButton extends Block {
  redefineRender() {
    return chatButtonTmpl;
  }
}
