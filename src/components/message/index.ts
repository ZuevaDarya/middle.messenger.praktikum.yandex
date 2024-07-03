import Block from '../../shared/core/block';
import { IMessage } from '../../shared/types';
import messageTmpl from './message';

export default class Message extends Block {
  constructor(props: IMessage) {
    super('div', {
      ...props,
      attr: { class: props.className }
    });
  }
  redefineRender() {
    return messageTmpl;
  }
}

