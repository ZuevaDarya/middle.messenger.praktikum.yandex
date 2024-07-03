import AddChatButton from '../add-chat-button';
import Block from '../../shared/core/block';
import chatLeftFunctionsTmpl from './chat-left-functions';

export default class ChatLeftFunctions extends Block {
  constructor() {
    super('div', {
      addChatButton: new AddChatButton(),
    });
  }

  redefineRender() {
    return chatLeftFunctionsTmpl;
  }
}


