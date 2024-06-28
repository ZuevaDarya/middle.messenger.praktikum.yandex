import Avatar from '../avatar';
import Block from '../../shared/core/block';
import { CHAT_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';
import ChatFunctions from '../chat-functions';
import chatRightHeaderTmpl from './chat-right-header';
import ChatTitle from '../chat-title';
import { IChatRightHeader } from '../../shared/types';

export default class ChatRightHeader extends Block {
  constructor(props: IChatRightHeader) {
    super('div', {
      chatAvatar: new Avatar({
        alt: CHAT_AVATAR_DATA.alt,
        src: props.src
      }),
      chatTitle: new ChatTitle({ title: props.title })
    });
  }

  redefineInit() {
    this.props['events'] = {
      click: {
        event: () => {

          if (this.children['chatFunctions']) {
            (this.children['chatFunctions'] as Block).displayToggle('block');
          } else {
            this.children['chatFunctions'] = new ChatFunctions();
          }
        },
        querySelector: 'button'
      } as unknown as EventListener
    }
  }

  redefineRender() {
    return chatRightHeaderTmpl;
  }
}

