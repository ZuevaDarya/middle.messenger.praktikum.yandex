import Block from '../../shared/utils/block';
import messageTmpl from './message';

export default class Message extends Block {
  redefineRender() {
    return messageTmpl;
  }
}

