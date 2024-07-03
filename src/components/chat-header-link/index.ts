import Block from '../../shared/core/block';
import chatHeaderLinkTmpl from './chat-header-link';
import { IChatHeaderLink } from '../../shared/types';
import Router from '../../shared/router/router';

export default class ChatHeaderLink extends Block {
  constructor(props: IChatHeaderLink) {
    super('a', {
      ...props,
      events: {
        click: (e: MouseEvent) => {
          e.preventDefault();
          Router.go(props.url);
        }
      }
    });
  }

  redefineRender() {
    return chatHeaderLinkTmpl;
  }
}

