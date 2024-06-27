import Block from '../../shared/core/block';
import Button from '../button';
import FormTitle from '../form-title';
import InputField from '../input-field';
import { IPopup } from '../../shared/types';
import popupTmpl from './popup';

export default class Popup extends Block {
  constructor(props: IPopup) {
    super('div', {
      ...props,
      formTitle: new FormTitle({ text: props.title }),
      inputField: new InputField({ ...props }),
      button: new Button({ buttonText: props.buttonText }),
      events: {
        click: {
          event: (e: Event) => {
            e.preventDefault();
            this.hide();
          },
          querySelector: '.popup__close'
        },
        ...props.events
      }
    });
  }

  redefineRender() {
    return popupTmpl;
  }
}
