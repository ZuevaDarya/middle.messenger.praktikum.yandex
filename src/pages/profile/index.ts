import Profile from './profile';
import ProfileAvatar from '../../components/profile-avatar';
import ProfileCloseButton from '../../components/profile-close-button';
import ProfileItem from '../../components/profile-item';

export const profilePage = new Profile('div', {
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
