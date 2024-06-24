import Block from '../../shared/core/block';
import inputTmpl from './input';

interface IInput {
  name: string;
  type: string
  placeholder: string;
  events?: object;
}

export default class Input extends Block {
  constructor(props: IInput) {
    super('input', {
      ...props,
      events: props.events
    });
  }

  redefineRender() {
    return inputTmpl;
  }
}
