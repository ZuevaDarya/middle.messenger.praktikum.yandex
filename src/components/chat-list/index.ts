import Block from '../../shared/core/block';
import { CHAT_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';
import ChatController from '../../shared/controllers/chat-controller';
import ChatListItem from '../chat-list-item';
import chatListTmpl from './chat-list';
import { IChatList } from '../../shared/types';
import { URLS } from '../../shared/consts/api-consts';

export default class ChatList extends Block {
  constructor(props: IChatList) {
    super('div', {
      chatListItems: props.chats.map(chat => new ChatListItem({
        title: chat.title,
        src: chat.avatar !== null ? `${URLS.RESOURCES}/${chat.avatar}` : CHAT_AVATAR_DATA.src,
        lastMessage: chat.last_message!,
        countMessage: chat.unread_count && chat.unread_count !== 0 ? String(chat.unread_count) : null,
        events: {
          click: () => {
            ChatController.setCurrentChat(chat);
            ChatController.getChatUserById(chat.id);
          }
        }
      })),
    });
  }

  redefineRender() {
    return chatListTmpl;
  }
}

