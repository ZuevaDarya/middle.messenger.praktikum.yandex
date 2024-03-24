import Block from '../../shared/utils/block';
import errorTmpl from './error';
import { Props } from '../../shared/types';

export default class Error extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return errorTmpl;
  }
}


