import { CHAT_AVATAR_DATA, CHAT_NOTICE, USER_AVATAR_DATA } from '../../shared/consts/pages-data/chat-page-data';
import store, { StoreEvents } from '../../shared/core/store';
import Avatar from '../../components/avatar';
import Block from '../../shared/core/block';
import ChatController from '../../shared/controllers/chat-controller';
import ChatFunctions from '../../components/chat-functions';
import ChatHeaderLink from '../../components/chat-header-link';
import ChatLeftFunctions from '../../components/chat-left-functions';
import ChatList from '../../components/chat-list';
import ChatMessages from '../../components/chat-messages';
import ChatNotice from '../../components/chat-notice';
import ChatRightHeader from '../../components/chat-right-header';
import ChatSendMessageBlock from '../../components/chat-send-message-block';
import chatTmpl from './chat.tmpl';
import { getFormData } from '../../shared/utils/validation-func/get-form-data';
import LoginController from '../../shared/controllers/login-controller';
import Popup from '../../components/popup';
import { POPUPS_DATA } from '../../shared/consts/pages-data/popups-data';
import { Routes } from '../../shared/consts/routes';
import { URLS } from '../../shared/consts/api-consts';

class Chat extends Block {
  constructor() {
    super('div', {
      chatHeaderLink: new ChatHeaderLink({ text: 'Профиль', url: Routes.Profile }),
      chatLeftFunctions: new ChatLeftFunctions(),
      chatFunctions: new ChatFunctions()
    })

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
      this.redefineInit();
    });
  }

  preRender() {
    this.removeChildrenInRoot();
    LoginController.start().then(() => LoginController.getUserInfo());
    ChatController.getUserChats();
  }

  protected redefineInit() {
    const user = store.getState().user;
    const chats = store.getState().chats;
    const currentChat = store.getState().currentChat;

    if (user.avatar) {
      this.children['avatar'] = new Avatar({
        alt: USER_AVATAR_DATA.alt,
        src: `${URLS.RESOURCES}/${user.avatar}`
      });
    } else {
      this.children['avatar'] = new Avatar({
        alt: USER_AVATAR_DATA.alt,
        src: USER_AVATAR_DATA.src
      });
    }

    if (chats?.length === 0) {
      this.children['chatNotice'] = new ChatNotice({ text: CHAT_NOTICE.createChatMsg });
    } else {
      this.children['chatNotice'] = new ChatNotice({ text: CHAT_NOTICE.selectChatMsg });
    }

    if (currentChat?.id) {
      this.children['chatRightHeader'] = new ChatRightHeader({
        src: currentChat.avatar ? `${URLS.RESOURCES}/${currentChat.avatar}` : CHAT_AVATAR_DATA.src,
        title: currentChat.title
      });
      this.children['chatMessages'] = new ChatMessages();
      this.children['chatSendMessageBlock'] = new ChatSendMessageBlock();
      (this.children['chatNotice'] as Block).hide();
    } else {
      (this.children['chatRightHeader'] as Block)?.hide();
      (this.children['chatMessages'] as Block)?.hide();
      (this.children['chatSendMessageBlock'] as Block)?.hide();
    }

    if (chats?.length !== 0) {
      this.children['chatList'] = new ChatList({
        chats: chats!,
      });
    }

    this.props['events'] = {
      click: {
        event: (e: Event) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();

          this.children['popup'] = new Popup({
            title: POPUPS_DATA.addChat.title,
            buttonText: POPUPS_DATA.addChat.buttonText,
            name: POPUPS_DATA.addChat.name,
            type: POPUPS_DATA.addChat.type,
            labelText: POPUPS_DATA.addChat.labelText,
            events: {
              submit: {
                event: (e: Event) => {
                  e.preventDefault();

                  const data = getFormData(e.target as HTMLFormElement);
                  ChatController.createChat(data.title);
                },
                querySelector: '.popup__form'
              }
            }
          });
        },
        querySelector: '.chat-left-functions__button'
      } as unknown as EventListener
    }
  }

  redefineRender() {
    return chatTmpl;
  }
}

export default Chat;

