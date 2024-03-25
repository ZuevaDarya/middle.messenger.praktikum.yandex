import avatarTmpl from './avatar';
import Block from '../../shared/utils/block';
export default class Avatar extends Block {
  redefineRender() {
    return avatarTmpl;
  }
}
