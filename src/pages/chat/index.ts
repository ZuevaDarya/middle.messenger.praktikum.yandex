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

export const chatPage = new Chat('div', {
  avatar: new Avatar('div', {
    src: '/img/avatar.png',
    alt: 'Аватар профиля пользователя'
  }),
  chatHeaderLink: new ChatHeaderLink('a', {
    text: 'Профиль',
    page: 'profile',
    src: ''
  }),
  chatLeftFunctions: new ChatLeftFunctions(),
  chatList: new ChatList('div', {
    chatListItems: [
      new ChatListItem('div', {
        time: '12:30',
        avatar: new Avatar('div', { src: '/img/avatar.png', alt: 'Аватар чата' }),
        chatTitle: new ChatTitle('p', { name: 'Иван Иванов' }),
        chatListMessage: new ChatListItemMessage('p', { senderName: 'Вы', message: 'стикер' }),
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
  chatSendMessageBlock: new ChatSendMessageBlock('div', {
    chatButtonAddFile: new ChatButton('button', { attr: { class: 'chat-button__add-file-btn' } }),
    chatButtonSendMsg: new ChatButton('button', { attr: { class: 'chat-button__send-message-btn' } })
  })
});
