
import Block from '../../shared/utils/block';
import chatLeftFunctionsTmpl from './chat-left-functions';

export default class ChatLeftFunctions extends Block {
  redefineRender() {
    return chatLeftFunctionsTmpl;
  }
}


