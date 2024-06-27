import Block from '../../shared/core/block';
import { IInputField } from '../../shared/types';
import Input from '../input';
import inputFieldTmpl from './input-field';

export default class InputField extends Block {
  constructor(props: IInputField) {
    super('div', {
      title: props.labelText ? props.labelText : props.title,
      input: new Input({
        type: props.type,
        name: props.name,
        placeholder: props.labelText ? props.labelText : props.title,
        accept: props.accept,
        events: props.events
      }),
    })
  }

  redefineRender() {
    return inputFieldTmpl;
  }
}
