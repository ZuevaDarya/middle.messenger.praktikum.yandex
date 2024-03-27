import Block from '../../shared/utils/block';
import chatHeaderLinkTmpl from './chat-header-link';

export default class ChatHeaderLink extends Block {
  redefineRender() {
    return chatHeaderLinkTmpl;
  }
}

