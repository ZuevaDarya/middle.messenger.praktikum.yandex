import Block from '../../shared/utils/block';
import chatHeaderLinkTmpl from './chat-header-link';
import { Props } from '../../shared/types';

export default class ChatHeaderLink extends Block {
  constructor(tagName = 'a', props: Props) {
    super(
      tagName,
      {
        ...props
      }
    )
  }

  redefineRender() {
    return chatHeaderLinkTmpl;
  }
}

