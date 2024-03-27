import Block from '../../shared/utils/block';
import chatTmpl from './chat.tmpl';

export default class Chat extends Block {
  redefineRender() {
    return chatTmpl;
  }
}

