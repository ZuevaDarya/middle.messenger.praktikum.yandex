
import Block from '../../shared/utils/block';
import chatLeftFunctionsTmpl from './chat-left-functions';
import { Props } from '../../shared/types';

export default class ChatLeftFunctions extends Block {
  constructor(tagName = 'div', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatLeftFunctionsTmpl;
  }
}


