import LoginController from '../../../shared/controllers/login-controller';
import Router from '../../../shared/router/router';
import { Routes } from '../routes';

export const PROFILE_USER_DATA = [
  {
    attr: { class: ['profile-item_border-green', 'before-profile'] },
    title: 'Имя',
  },
  {
    attr: { class: ['profile-item_border-green', 'profile-item_with-margin'] },
    title: 'Фамилия',
  },
  {
    attr: { class: ['profile-item_border-green', 'before-email'] },
    title: 'Почта',
  },
  {
    attr: { class: ['profile-item_border-green', 'before-login'] },
    title: 'Логин',
  },
  {
    attr: { class: ['profile-item_border-green', 'before-chat-name'] },
    title: 'Имя в чате',
  },
  {
    attr: { class: ['profile-item_border-green', 'before-phone'] },
    title: 'Телефон',
  }
];

export const PROFILE_SETTINGS_DATA = [
  {
    attr: { class: ['profile-item_border-grey', 'profile-item_text-green'] },
    title: 'Изменить данные',
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault();
        Router.go(Routes.ProfileData);
      }
    }
  },
  {
    attr: { class: ['profile-item_border-grey', 'profile-item_text-green'] },
    title: 'Изменить пароль',
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault();
        Router.go(Routes.ProfilePassword);
      }
    }
  },
  {
    attr: { class: ['profile-item_border-grey', 'profile-item_text-red'] },
    title: 'Выйти',
    events: {
      click: (event: MouseEvent) => {
        event.preventDefault();
        LoginController.logout();
      }
    }
  }
];

