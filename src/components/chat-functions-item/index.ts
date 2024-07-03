import Block from '../../shared/core/block';
import chatFunctionsItemTmpl from './chat-functions-item';
import { IChatFunctionsItem } from '../../shared/types';

export default class ChatFunctionsItem extends Block {
  constructor(props: IChatFunctionsItem) {
    super('ol', { ...props });
  }

  redefineRender() {
    return chatFunctionsItemTmpl;
  }
}
