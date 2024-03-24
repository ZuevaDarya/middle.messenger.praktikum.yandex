import Block from '../../shared/utils/block';
import chatButtonTmpl from './chat-button';
import { Props } from '../../shared/types';

export default class ChatButton extends Block {
  constructor(tagName = 'button', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatButtonTmpl;
  }
}
