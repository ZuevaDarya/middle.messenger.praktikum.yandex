import Avatar from '../avatar';
import Block from '../../shared/core/block';
import changeTimeFormat from '../../shared/utils/change-time-format';
import { CHAT_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';
import ChatListItemMessage from '../chat-list-item-message';
import chatListItemTmpl from './chat-list-item';
import ChatTitle from '../chat-title';
import { IChatListItem } from '../../shared/types';

export default class ChatListItem extends Block {
  constructor(props: IChatListItem) {
    super('div', {
      avatar: new Avatar({ src: props.src, alt: CHAT_AVATAR_DATA.alt }),
      chatTitle: new ChatTitle({ title: props.title }),
      chatListMessage: new ChatListItemMessage({
        lastMessage: props.lastMessage !== null ? props.lastMessage.content : '',
        senderName: props.lastMessage?.user.display_name
      }),
      countMessage: props.countMessage,
      time: changeTimeFormat(props?.lastMessage?.time),
      events: props.events
    });
  }

  redefineRender() {
    return chatListItemTmpl;
  }
}
