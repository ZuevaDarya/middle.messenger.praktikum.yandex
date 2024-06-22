import Block from '../../shared/core/block';
import messageTmpl from './message';

export default class Message extends Block {
  redefineRender() {
    return messageTmpl;
  }
}

