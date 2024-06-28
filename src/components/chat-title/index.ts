import Block from '../../shared/core/block';
import chatTitleTmpl from './chat-title';
import { IChatTitle } from '../../shared/types';

export default class ChatTitle extends Block {
  constructor(props: IChatTitle) {
    super('p', { ...props });
  }

  redefineRender() {
    return chatTitleTmpl;
  }
}

