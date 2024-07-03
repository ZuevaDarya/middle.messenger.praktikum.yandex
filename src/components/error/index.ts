import Block from '../../shared/core/block';
import Button from '../button';
import errorTmpl from './error';
import { IError } from '../../shared/types';

export default class Error extends Block {
  constructor(props: IError) {
    super('div', {
      ...props,
      button: new Button({
        buttonText: props.button.buttonText,
        buttonClass: props.button.buttonClass,
        events: props.button.events
      })
    });
  }

  redefineRender() {
    return errorTmpl;
  }
}


