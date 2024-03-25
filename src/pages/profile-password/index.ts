
import Button from '../../components/button';
import Link from '../../components/link';
import Navigation from '../../components/navigation';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileInput from '../../components/profile-input';
import ProfilePassword from './profile-password';

export const profilePasswordPage = new ProfilePassword('div', {
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
  profileCloseButton: new ProfileCloseButton('div', { page: 'profile' }),
  profileAvatar: new ProfileAvatar('div', { src: '/img/profile-avatar.png', name: 'Иван' }),
  profileContentList: [
    new ProfileInput('div', {
      attr: { class: 'profile-item_border-green' },
      title: 'Старый пароль',
      placeholder: 'Старый пароль',
      name: 'oldPassword',
      type: 'password'
    }),
    new ProfileInput('div', {
      attr: { class: 'profile-item_border-green' },
      title: 'Новый пароль',
      placeholder: 'Новый пароль',
      name: 'newPassword',
      type: 'password'
    }),
    new ProfileInput('div', {
      attr: { class: 'profile-item_border-green' },
      title: 'Повторите новый пароль',
      placeholder: 'Повторите новый пароль',
      type: 'password'
    }),
  ],
  button: new Button('button', {
    text: 'Сохранить',
    attr: { class: 'profile-data-button'}
  })
});

