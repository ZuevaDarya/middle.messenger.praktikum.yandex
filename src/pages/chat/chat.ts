import Avatar from '../../components/avatar';
import Block from '../../shared/core/block';
import ChatController from '../../shared/controllers/chat-controller';
import ChatHeaderLink from '../../components/chat-header-link';
import ChatLeftFunctions from '../../components/chat-left-functions';
import ChatList from '../../components/chat-list';
import chatTmpl from './chat.tmpl';
import LoginController from '../../shared/controllers/login-controller';
import Popup from '../../components/popup';
import Router from '../../shared/router/router';
import { Routes } from '../../shared/consts/routes';
import { USER_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';

export default class Chat extends Block {
  constructor() {
    super('div', {
      avatar: new Avatar({ ...USER_AVATAR_DATA }),
      chatHeaderLink: new ChatHeaderLink({ text: 'Профиль', url: Routes.Profile }),
      chatLeftFunctions: new ChatLeftFunctions(),
      chatList: new ChatList(),
      popup: new Popup(
        {
          text: 'Добавить',
          title: 'Создать чат',
          name: 'add_chat_title',
          type: 'text'
        }
      ),
      // chatAvatar: ,
      // chatTitle: ,
      // day: ,
      // messages: ,
      // chatSendMessageBlock: ,
      events: {
        load: () => {
          Router.go(Routes.Chats);
          LoginController.start();
          ChatController.getUserChats();
        },
      }
    })
  }

  redefineRender() {
    return chatTmpl;
  }
}

