import Block from '../../shared/core/block';
import chatButtonTmpl from './chat-button';
import { IChatButton } from '../../shared/types';

export default class ChatButton extends Block {
  constructor(props: IChatButton) {
    super('button', { ...props });
  }

  redefineRender() {
    return chatButtonTmpl;
  }
}
