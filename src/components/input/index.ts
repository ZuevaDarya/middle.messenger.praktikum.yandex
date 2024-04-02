import Block from '../../shared/utils/block';
import inputTmpl from './input';

export default class Input extends Block {
  redefineRender() {
    return inputTmpl;
  }
}
