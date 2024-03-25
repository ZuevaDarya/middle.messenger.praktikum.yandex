import Link from '../../components/link';
import Navigation from '../../components/navigation';
import Profile from './profile';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileItem from '../../components/profile-item';

export const profilePage = new Profile('div', {
  navigation: new Navigation('nav', {
    lists: [
      new Link('a', { url: '', text: 'Логин', page: 'login' }),
      new Link('a', { url: '', text: 'Регистрация', page: 'registration' }),
      new Link('a', { url: '', text: 'Чат', page: 'chat' }),
      new Link('a', { url: '', text: 'Профиль', page: 'profile' }),
      new Link('a', { url: '', text: 'Изменить данные профиля', page: 'profileData' }),
      new Link('a', { url: '', text: 'Изменить пароль профиля', page: 'ProfilePassword' }),
      new Link('a', { url: '', text: 'Ошибка 404', page: 'error400' }),
      new Link('a', { url: '', text: 'Ошибка 500', page: 'error500' }),
    ]
  }),
  profileCloseButton: new ProfileCloseButton('div', { page: 'chat' }),
  profileAvatar: new ProfileAvatar('div', { src: '/img/profile-avatar.png', name: 'Иван' }),
  profileContentList: [
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-green', 'before-profile'] },
      title: 'Имя',
      data: 'Иван'
    }),
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-green', 'profile-item_with-margin'] },
      title: 'Фамилия',
      data: 'Иванов'
    }),
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-green', 'before-email'] },
      title: 'Почта',
      data: 'pochta@yandex.ru'
    }),
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-green', 'before-login'] },
      title: 'Логин',
      data: 'ivanivanov'
    }),
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-green', 'before-chat-name'] },
      title: 'Имя в чате',
      data: 'Иван'
    }),
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-green', 'before-phone'] },
      title: 'Телефон',
      data: '+7 (909) 967 30 30'
    }),
  ],
  profileSettingList: [
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-grey', 'profile-item_text-green'] },
      title: 'Изменить данные',
      page: 'profileData'
    }),
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-grey', 'profile-item_text-green'] },
      title: 'Изменить пароль',
      page: 'profilePassword'
    }),
    new ProfileItem('div', {
      attr: { class: ['profile-item_border-grey', 'profile-item_text-red'] },
      title: 'Выйти',
      page: 'login'
    }),
  ]
});
