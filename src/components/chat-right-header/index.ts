import Avatar from '../avatar';
import Block from '../../shared/core/block';
import { CHAT_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';
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
      chatTitle: new ChatTitle({title: props.title})
    });
  }

  redefineRender() {
    return chatRightHeaderTmpl;
  }
}

