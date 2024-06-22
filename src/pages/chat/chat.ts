import Avatar from '../../components/avatar';
import Block from '../../shared/core/block';
import ChatHeaderLink from '../../components/chat-header-link';
import ChatLeftFunctions from '../../components/chat-left-functions';
import chatTmpl from './chat.tmpl';
import { USER_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';
// import { Routes } from '../../shared/consts/routes';

// import ChatList from '../../components/chat-list';

export default class Chat extends Block {
  constructor() {
    super('div', {
      avatar: new Avatar({ ...USER_AVATAR_DATA }),
      chatHeaderLink: new ChatHeaderLink({ text: 'Профиль', url: Routes.Profile }),
      chatLeftFunctions: new ChatLeftFunctions(),
      // chatList: new ChatList(),
      // chatAvatar: ,
      // chatTitle: ,
      // day: ,
      // messages: ,
      // chatSendMessageBlock: ,

    })
  }

  redefineRender() {
    return chatTmpl;
  }
}

