import Block from '../../shared/core/block';
import chatMessagesTmpl from './chat-messages';

export default class ChatMessages extends Block {
  constructor() {
    super('div', {
      messages: []
    });
  }

  redefineRender() {
    return chatMessagesTmpl;
  }
}

