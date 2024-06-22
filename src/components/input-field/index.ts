import Block from '../../shared/core/block';
import Input from '../input';
import inputFieldTmpl from './input-field';

interface IInputField {
  title: string;
  name: string;
  type: string;
}

export default class InputField extends Block {
  constructor(props: IInputField) {
    super('div', {
      title: props.title,
      input: new Input({
        type: props.type,
        name: props.name,
        placeholder: props.title
      }),
    })
  }

  redefineRender() {
    return inputFieldTmpl;
  }
}
