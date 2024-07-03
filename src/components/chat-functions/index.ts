import Block from '../../shared/core/block';
import { CHAT_FUNCTIONS_INFO } from '../../shared/consts/pages-data/chat-page-data';
import ChatFunctionsItem from '../chat-functions-item';
import chatFunctionsTmpl from './chat-functions';

export default class ChatFunctions extends Block {
  constructor() {
    super('div', {
      chatFunctionsList: CHAT_FUNCTIONS_INFO.map(item => new ChatFunctionsItem({
        text: item.text,
        className: item.className
      }))
    });
  }

  redefineRender() {
    return chatFunctionsTmpl;
  }
}
