
import Button from '../../components/button';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileInput from '../../components/profile-input';
import ProfilePassword from './profile-password';

export const profilePasswordPage = new ProfilePassword('div', {
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

