import Block from '../../shared/core/block';
import chatNoticeTmpl from './chat-notice';
import { IChatNotice } from '../../shared/types';

export default class ChatNotice extends Block {
  constructor(props: IChatNotice) {
    super('div', { ...props })
  }
  redefineRender() {
    return chatNoticeTmpl;
  }
}

