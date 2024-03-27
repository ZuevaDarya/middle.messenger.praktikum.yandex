import Block from '../../shared/utils/block';
import linkTmpl from './link';

export default class Link extends Block {
  redefineRender() {
    return linkTmpl;
  }
}

