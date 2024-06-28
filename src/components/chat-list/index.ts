// import store, { StoreEvents } from '../../shared/core/store';
import Block from '../../shared/core/block';
import { CHAT_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';
import ChatListItem from '../chat-list-item';
import chatListTmpl from './chat-list';
import { IChatList } from '../../shared/types';
import store from '../../shared/core/store';
import { URLS } from '../../shared/consts/api-consts';

export default class ChatList extends Block {
  constructor(props: IChatList) {
    super('div', {
      chatListItems: props.chats.map(chat => new ChatListItem({
        title: chat.title,
        src: chat.avatar !== null ? `${URLS.RESOURCES}/${chat.avatar}` : CHAT_AVATAR_DATA.src,
        lastMessage: chat.last_message!,
        countMessage: chat.unread_count !== 0 ? String(chat.unread_count) : null,
        events: {
          click: () => {
            store.setState('currentChat', chat);
          }
        }
      })),
    });
  }

  redefineRender() {
    return chatListTmpl;
  }
}

