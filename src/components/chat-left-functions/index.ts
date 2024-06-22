
import Block from '../../shared/core/block';
import chatLeftFunctionsTmpl from './chat-left-functions';

export default class ChatLeftFunctions extends Block {
  redefineRender() {
    return chatLeftFunctionsTmpl;
  }
}


