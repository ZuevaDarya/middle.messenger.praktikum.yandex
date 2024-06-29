import ChatController from '../../../shared/controllers/chat-controller';
import { FORM_INPUT_NAMES } from '../form-input-names';
import store from '../../../shared/core/store';

export const USER_AVATAR_DATA = {
  src: '/img/avatar.png',
  alt: 'Аватар профиля пользователя'
}

export const CHAT_AVATAR_DATA = {
  src: '/img/avatar.png',
  alt: 'Аватар чата'
}

export const CHAT_NOTICE = {
  selectChatMsg: 'Выберите чат, чтобы отправить сообщение',
  createChatMsg: 'Создайте чат, чтобы отправить сообщение'
};

export const CHAT_SEND_INPUT_DATA = {
  type: 'text',
  name: FORM_INPUT_NAMES.message,
  placeholder: 'Сообщение',
}

export const CHAT_FUNCTIONS_INFO = [
  {
    text: 'Добавить пользователя',
    icon: '/icons/add-user.svg',
    className: 'chat-functions__item_add-user',
  },
  {
    text: 'Удалить пользователя',
    icon: '/icons/delete-user.svg',
    className: 'chat-functions__item_delete-user'
  },
  {
    text: 'Изменить аватар чата',
    icon: '/icons/image.svg',
    className: 'chat-functions__item_change-avatar'
  },
  {
    text: 'Удалить чат',
    icon: '/icons/delete-chat.svg',
    className: 'chat-functions__item_delete-chat',
    events: {
      click: () => {
        const currentChat = store.getState().currentChat;

        ChatController.deleteChatById(currentChat!.id);
        alert('Чат удален!');
      }
    }
  },
];
