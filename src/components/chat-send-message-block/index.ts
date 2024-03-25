import Block from '../../shared/utils/block';
import chatSendMessageBlockTmpl from './chat-send-mesage-block';

export default class ChatSendMessageBlock extends Block {
  redefineRender() {
    return chatSendMessageBlockTmpl;
  }
}

