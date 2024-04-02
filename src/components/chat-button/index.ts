import Block from '../../shared/utils/block';
import chatButtonTmpl from './chat-button';

export default class ChatButton extends Block {
  redefineRender() {
    return chatButtonTmpl;
  }
}
