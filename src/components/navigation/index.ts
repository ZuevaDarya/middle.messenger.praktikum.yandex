import Block from '../../shared/utils/block';
import navigationTmpl from './navigation';

export default class Navigation extends Block {
  redefineRender() {
    return navigationTmpl;
  }
}
