import Block from '../../shared/utils/block';
import buttonTmpl from './button';

export default class Button extends Block {
  redefineRender() {
    return buttonTmpl;
  }
}

