import { FORM_INPUT_NAMES } from '../form-input-names';
import LoginController from '../../../shared/controllers/login-controller';
import Router from '../../../shared/router/router';
import { Routes } from '../routes';

export const PROFILE_USER_DATA = [
  {
    attr: { class: ['profile-item_border-green', 'before-profile'] },
    title: 'Имя',
    name: FORM_INPUT_NAMES.firstName,
    type: 'text'
  },
  {
    attr: { class: ['profile-item_border-green', 'profile-item_with-margin'] },
    title: 'Фамилия',
    name: FORM_INPUT_NAMES.secondName,
    type: 'text'
  },
  {
    attr: { class: ['profile-item_border-green', 'before-email'] },
    title: 'Почта',
    name: FORM_INPUT_NAMES.email,
    type: 'email'
  },
  {
    attr: { class: ['profile-item_border-green', 'before-login'] },
    title: 'Логин',
    name: FORM_INPUT_NAMES.login,
    type: 'text'
  },
  {
    attr: { class: ['profile-item_border-green', 'before-chat-name'] },
    title: 'Имя в чате',
    name: FORM_INPUT_NAMES.displayName,
    type: 'text'
  },
  {
    attr: { class: ['profile-item_border-green', 'before-phone'] },
    title: 'Телефон',
    name: FORM_INPUT_NAMES.phone,
    type: 'tel'
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

export const AVATAR_LOCAL_PATH = '/img/profile-avatar.png';

export const PROFILE_CHANGE_BUTTON = {
  buttonText: 'Сохранить',
  buttonClass: 'profile-data-button'
}

export const PROFILE_CHANGE_PASSWORD_ITEMS = [
  {
    attr: { class: 'profile-item_border-green' },
    title: 'Старый пароль',
    name: FORM_INPUT_NAMES.oldPassword,
    type: 'password',
  },
  {
    attr: { class: 'profile-item_border-green' },
    title: 'Новый пароль',
    name: FORM_INPUT_NAMES.newPassword,
    type: 'password',
  },
  {
    attr: { class: 'profile-item_border-green' },
    title: 'Повторите новый пароль',
    type: 'password',
    name: FORM_INPUT_NAMES.passwordAgain,
  }
];
