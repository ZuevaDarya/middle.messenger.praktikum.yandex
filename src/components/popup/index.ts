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
    });

    if (document.querySelector('.popup')) {
      const closeSpan = document.querySelector('.popup__close');
      console.log(closeSpan)
      closeSpan!.addEventListener('click', (e: Event) => {
       // e.preventDefault();
        //e.stopPropagation();
        e.stopImmediatePropagation();
        console.log('ss')
        this.hide();
      })
    }
  }

  redefineRender() {
    return popupTmpl;
  }
}
