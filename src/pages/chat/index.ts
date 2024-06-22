import Avatar from '../../components/avatar';
import Chat from './chat';
import ChatButton from '../../components/chat-button';
import ChatHeaderLink from '../../components/chat-header-link';
import ChatLeftFunctions from '../../components/chat-left-functions';
import ChatList from '../../components/chat-list';
import ChatListItem from '../../components/chat-list-item';
import ChatListItemMessage from '../../components/chat-list-item-message';
import ChatSendMessageBlock from '../../components/chat-send-message-block';
import ChatTitle from '../../components/chat-title';
import Message from '../../components/message';
import { profilePage } from '../profile';
import { removeChildrenInRoot } from '../../shared/utils/remove-children-in-root';
import { render } from '../../shared/utils/render';
import SearchInput from '../../components/search-input';
import { validateFormData } from '../../shared/utils/validation-func/validate-form-data';
import { validateSubmit } from '../../shared/utils/validation-func/validate-submit';

export const chatPage = new Chat('div', {
  avatar: new Avatar('div', {
    src: '/img/avatar.png',
    alt: 'Аватар профиля пользователя'
  }),
  chatHeaderLink: new ChatHeaderLink('a', {
    text: 'Профиль',
    page: 'profile',
    src: '#',
    events: {
      click: () => {
        removeChildrenInRoot('#app');
        render('#app', profilePage);
      }
    }
  }),
  chatLeftFunctions: new ChatLeftFunctions(),
  chatList: new ChatList('div', {
    chatListItems: [
      new ChatListItem('div', {
        time: '12:30',
        avatar: new Avatar('div', { src: '/img/avatar.png', alt: 'Аватар чата' }),
        chatTitle: new ChatTitle('p', { name: 'Иван Иванов' }),
        chatListMessage: new ChatListItemMessage('p', { senderName: 'Вы', message: 'Круто!' }),
      }),
      new ChatListItem('div', {
        time: '17:00',
        avatar: new Avatar('div', { src: '/img/avatar.png', alt: 'Аватар чата' }),
        chatTitle: new ChatTitle('p', { name: 'Макс' }),
        chatListMessage: new ChatListItemMessage('p', { senderName: 'Вы', message: 'До завтра!' }),
      }),
      new ChatListItem('div', {
        time: '21:05',
        avatar: new Avatar('div', { src: '/img/avatar.png', alt: 'Аватар чата' }),
        chatTitle: new ChatTitle('p', { name: 'Киноклуб' }),
        chatListMessage: new ChatListItemMessage('p', { senderName: 'Вы', message: 'стикер' }),
      }),
      new ChatListItem('div', {
        time: 'Пн',
        avatar: new Avatar('div', { src: '/img/avatar.png', alt: 'Аватар чата' }),
        chatTitle: new ChatTitle('p', { name: 'Елена Половинкина' }),
        chatListMessage: new ChatListItemMessage('p', { message: 'Можно на сегодня или завтра. Ты как?' }),
        numMessage: '3'
      }),
      new ChatListItem('div', {
        time: 'Пн',
        avatar: new Avatar('div', { src: '/img/avatar.png', alt: 'Аватар чата' }),
        chatTitle: new ChatTitle('p', { name: 'Анна Блая' }),
        chatListMessage: new ChatListItemMessage('p', { message: 'Изображение' }),
        numMessage: '2'
      }),
      new ChatListItem('div', {
        time: '1 Мая 2020',
        avatar: new Avatar('div', { src: '/img/avatar.png', alt: 'Аватар чата' }),
        chatTitle: new ChatTitle('p', { name: 'Design Destroyer' }),
        chatListMessage: new ChatListItemMessage('p', {
          message: 'В 2008 году художник Jon Rafman начал собирать...'
        }),
      }),
    ],
  }),
  chatAvatar: new Avatar('div', {
    src: '/img/avatar.png',
    alt: 'Аватар чата'
  }),
  chatTitle: new ChatTitle('p', { name: 'Иван Иванов' }),
  day: '19 июня',
  messages: [
    new Message('div', {
      atrr: { class: 'message_left' },
      text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — 
            НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для 
            полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — 
            и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, 
            так как астронавты с собой забрали только кассеты с пленкой.
            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету 
            они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно 
            продали на аукционе за 45000 евро.`,
      time: '11:56'
    }),
    new Message('div', {
      attr: { class: 'message_left' },
      src: '/img/message-img.png',
      time: '11:56'
    }),
    new Message('div', {
      attr: { class: 'message_right' },
      text: 'Круто!',
      time: '12:00'
    }),
  ],
  chatSendMessageBlock: new ChatSendMessageBlock('form', {
    events: {
      submit: (e: Event) => validateSubmit(e)
    },
    chatButtonAddFile: new ChatButton('button', { attr: { class: 'chat-button__add-file-btn' } }),
    chatButtonSendMsg: new ChatButton('button', {
      attr: { class: 'chat-button__send-message-btn' },
    }),
    searchInput: new SearchInput('input', {
      type: 'text',
      name: 'message',
      placeholder: 'Сообщение',
      events: {
        blur: (e: Event) => validateFormData(e)
      }
    })
  })
});
