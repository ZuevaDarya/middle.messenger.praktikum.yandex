import Block from '../../shared/core/block';
import Button from '../button';
import FormTitle from '../form-title';
import InputField from '../input-field';
import { IPopup } from '../../shared/types';
import popupTmpl from './popup';

export default class Popup extends Block {
  constructor(props: IPopup) {
    super('div', {
      formTitle: new FormTitle({text: props.title}),
      inputField: new InputField({ ...props }),
      button: new Button({ text: props.text })
    });
  }

  redefineRender() {
    return popupTmpl;
  }
}
