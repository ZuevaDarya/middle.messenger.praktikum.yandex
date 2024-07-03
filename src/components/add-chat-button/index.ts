import addChatButtonTmpl from './add-chat-button';
import Block from '../../shared/core/block';

export default class AddChatButton extends Block {
  constructor() {
    super('button', {});
  }

  redefineRender() {
    return addChatButtonTmpl
  }
}
