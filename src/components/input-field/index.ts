import Block from '../../shared/utils/block';
import inputFieldTmpl from './input-field';

export default class InputField extends Block {
  redefineRender() {
    return inputFieldTmpl;
  }
}
