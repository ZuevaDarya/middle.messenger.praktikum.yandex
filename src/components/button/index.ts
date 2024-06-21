import Block from '../../shared/utils/block';
import buttonTmpl from './button';
import { IButton } from '../../shared/types';

export default class Button extends Block {
  constructor(props: IButton) {
    super('button', {
      attr: { class: props?.buttonClass },
      text: props.text,
      page: props?.page
    });
  }

  redefineRender() {
    return buttonTmpl;
  }
}

